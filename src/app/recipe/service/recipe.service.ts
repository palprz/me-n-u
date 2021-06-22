import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { SimpleRef } from "../simple-recipe";
import { Recipe } from "../recipe";
import { Ingredient } from "../ingredient";

const THE_MEAL_DB: string = "https://www.themealdb.com";
const LOOKUP_PATH: string = "/api/json/v1/1/lookup.php";
const FILTER_PATH: string = "/api/json/v1/1/filter.php";

@Injectable({
  providedIn: "root",
})
export class RecipeService {
  constructor(private http: HttpClient) {}

  loadRecipeById(id: String): Observable<Recipe> {
    return this.http.get(THE_MEAL_DB + LOOKUP_PATH + "?i=" + id).pipe(
      map((data) => {
        if (data["meals"] === null) {
          // Found no result
          return null;
        }
        var ingredients: Ingredient[] = this.convertIngredients(data);
        return this.convertRecipe(data, ingredients);
      })
    );
  }

  loadRecipesByIngredient(ingredient: String): Observable<SimpleRef[]> {
    return this.http.get(THE_MEAL_DB + FILTER_PATH + "?i=" + ingredient).pipe(
      map((data) => {
        if (data["meals"] === null) {
          // Found no results
          return [];
        }
        return this.convertSimpleRefs(data);
      })
    );
  }

  loadRecipesByCategory(category: String): Observable<SimpleRef[]> {
    return this.http.get(THE_MEAL_DB + FILTER_PATH + "?c=" + category).pipe(
      map((data) => {
        if (data["meals"] === null) {
          // Found no results
          return [];
        }
        return this.convertSimpleRefs(data);
      })
    );
  }

  private convertRecipe(data: Object, ingredients: Ingredient[]): Recipe {
    var meal = data["meals"][0];
    return new Recipe(
      meal["strMeal"],
      meal["strMealThumb"],
      meal["idMeal"],
      meal["strCategory"],
      meal["strArea"],
      // the response contains long string with no spaces or proper format - we need to fix on our side
      // it's a silly assumption with a dot but it's working (so far...)
      meal["strInstructions"].split("."),
      ingredients
    );
  }

  private convertSimpleRefs(data: Object): SimpleRef[] {
    var recipes: SimpleRef[] = [];

    for (var key of Object.keys(data["meals"])) {
      var meal = data["meals"][key];
      var recipe: SimpleRef = new SimpleRef(
        meal["strMeal"],
        meal["strMealThumb"],
        meal["idMeal"]
      );
      recipes.push(recipe);
    }
    return recipes;
  }

  private convertIngredients(data: Object): Ingredient[] {
    var ingredients: Ingredient[] = [];
    var meal = data["meals"][0];
    for (var i = 1; i <= 20; i++) {
      var strIngredient = meal["strIngredient" + i];
      var strMeasure = meal["strMeasure" + i];
      console.log(strIngredient);
      if (
        (strIngredient === null || strIngredient.length != 0) &&
        (strMeasure === null || strMeasure.length != 0)
      ) {
        var ingredient: Ingredient = new Ingredient(strIngredient, strMeasure);

        ingredients.push(ingredient);
      }
    }

    return ingredients;
  }
}
