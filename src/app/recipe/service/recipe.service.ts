import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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

          if(data["meals"] === null) {
            // Found no result
            return null;
          }

          for (var key of Object.keys(data["meals"])) {
            var ingredientArray: Ingredient[] = [];
            for (var i=1; i <= 20; i++) {
              var strIngredient = data["meals"][key]["strIngredient" + i];
              var strMeasure = data["meals"][key]["strMeasure" + i];
              console.log(strIngredient);
              if((strIngredient === null || strIngredient.length != 0)
                  && (strMeasure === null || strMeasure.length != 0)) {
                    var ingredient: Ingredient = new Ingredient(
                    strIngredient,
                    strMeasure
                  );

                ingredientArray.push(ingredient);
              }
            }

            var recipe: Recipe = new Recipe(
                data["meals"][key]["strMeal"],
                data["meals"][key]["strMealThumb"],
                data["meals"][key]["idMeal"],
                data["meals"][key]["strCategory"],
                data["meals"][key]["strArea"],
                data["meals"][key]["strInstructions"],
                ingredientArray
            );

            return recipe;
          }
        })
      );
  }

  loadRecipesByIngredient(ingredient: String): Observable<SimpleRecipe[]> {
    var recipeArray: SimpleRecipe[] = [];

      return this.http.get('https://www.themealdb.com/api/json/v1/1/filter.php?i=' + ingredient).pipe(
        map(data => {

          if(data["meals"] === null) {
            // Found no results
            return recipeArray;
          }

          for (var key of Object.keys(data["meals"])) {
            var recipe: SimpleRecipe = new SimpleRecipe(
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

  loadRecipesByCategory(category: String): Observable<SimpleRecipe[]> {
    var recipeArray: SimpleRecipe[] = [];

      return this.http.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=' + category).pipe(
        map(data => {

          if(data["meals"] === null) {
            // Found no results
            return recipeArray;
          }

          for (var key of Object.keys(data["meals"])) {
            var recipe: SimpleRecipe = new SimpleRecipe(
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
