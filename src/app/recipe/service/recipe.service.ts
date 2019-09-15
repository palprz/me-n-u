import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { SimpleRecipe } from '../simple-recipe';
import { Recipe } from '../recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) { }

  loadRecipeById(id: String): Observable<Recipe[]> {
      const recipeArray: Recipe[] = [];

      return this.http.get('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + id).pipe(
        map(data => {

          for (const key of Object.keys(data["meals"])) {
          
              const recipe: Recipe = new Recipe(
                  data["meals"][key]["strMeal"],
                  data["meals"][key]["strMealThumb"],
                  data["meals"][key]["idMeal"],
                  data["meals"][key]["strDrinkAlternate"],
                  data["meals"][key]["strCategory"],
                  data["meals"][key]["strArea"],
                  data["meals"][key]["strInstructions"],
                  data["meals"][key]["strTags"],
                  data["meals"][key]["strYoutube"]
                  // data["meals"][key]["strIngredient"],
                  // data["meals"][key]["strMeasure"],
              );
              recipeArray.push(recipe);
          }
          return recipeArray;
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
