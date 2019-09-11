import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Recipe } from '../Recipe';

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
                  // data["meals"][key]["strType"]
              );
              recipeArray.push(recipe);
          }
          return recipeArray;
        })
      );
  }

  loadRecipeByIngredient(ingredient: String): Observable<Recipe[]> {
      const recipeArray: Recipe[] = [];

      return this.http.get('https://www.themealdb.com/api/json/v1/1/filter.php?i=' + ingredient).pipe(
        map(data => {

          for (const key of Object.keys(data["meals"])) {

              const recipe: Recipe = new Recipe(
                  data["meals"][key]["strMeal"],
                  data["meals"][key]["strMealThumb"],
                  data["meals"][key]["idMeal"],
                  // data["meals"][key]["strType"]
              );
              recipeArray.push(recipe);
          }
          return recipeArray;
        })
      );
  }

}
