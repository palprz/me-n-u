import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { SimpleRecipe } from '../simple-recipe';
import { Recipe } from '../recipe';
import { Ingredient } from '../ingredient';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) { }

  loadRecipeById(id: String): Observable<Recipe> {
      return this.http.get('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + id).pipe(
        map(data => {

          for (const key of Object.keys(data["meals"])) {
            const ingredientArray: Ingredient[] = [];
            for (var i=1; i <= 20; i++) {
              if(data["meals"][key]["strIngredient" + i].length != 0
                  && data["meals"][key]["strMeasure" + i].length != 0) {
                  const ingredient: Ingredient = new Ingredient(
                    data["meals"][key]["strIngredient" + i],
                    data["meals"][key]["strMeasure" + i]
                  );

                ingredientArray.push(ingredient);
              }
            }
            
            const recipe: Recipe = new Recipe(
                data["meals"][key]["strMeal"],
                data["meals"][key]["strMealThumb"],
                data["meals"][key]["idMeal"],
                data["meals"][key]["strDrinkAlternate"],
                data["meals"][key]["strCategory"],
                data["meals"][key]["strArea"],
                data["meals"][key]["strInstructions"],
                data["meals"][key]["strTags"],
                data["meals"][key]["strYoutube"],
                ingredientArray
            );
            return recipe;
          }
        })
      );
  }

  loadRecipeByIngredient(ingredient: String): Observable<SimpleRecipe[]> {
      const recipeArray: SimpleRecipe[] = [];

      return this.http.get('https://www.themealdb.com/api/json/v1/1/filter.php?i=' + ingredient).pipe(
        map(data => {

          for (const key of Object.keys(data["meals"])) {
              const recipe: SimpleRecipe = new SimpleRecipe(
                  data["meals"][key]["strMeal"],
                  data["meals"][key]["strMealThumb"],
                  data["meals"][key]["idMeal"]
              );
              recipeArray.push(recipe);
          }
          return recipeArray;
        })
      );
  }

}
