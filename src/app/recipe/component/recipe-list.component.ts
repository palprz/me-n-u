import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { RecipeService } from "../service/recipe.service";
import { SimpleRef } from "../simple-recipe";
import { CategoryName } from "../category-names";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.less"],
})
export class RecipeListComponent {
  recipes: string | any[];
  recipesNumber: number;
  filter: string;
  value: string;
  isEmptyList: boolean;
  /**
   * Because of the wait for the response from the API call,
   * end-user can see message for empty list with recipies
   * for a half second. We would like to hide it and display
   * a final message after the response.
   */
  stillSearching = true;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {
    this.route.params.subscribe((params) => {
      this.filter = params.filter;
      this.value = params.value;
      this.fetchRecipesByFilter(this.filter, this.value);
    });
  }

  fetchRecipesByFilter(filter: String, value: String) {
    switch (filter) {
      case CategoryName.INGREDIENT:
        this.recipeService
          .loadRecipesByIngredient(value)
          .subscribe((data) => {
            this.provideResponse(data);
          });
        break;
      case CategoryName.CATEGORY:
        this.recipeService.loadRecipesByCategory(value).subscribe((data) => {
          this.provideResponse(data);
        });
        break;
      default:
        break;
    }
  }

  provideResponse(recipes: SimpleRef[]) {
    this.recipes = recipes;
    this.recipesNumber = this.recipes.length;
    this.isEmptyList = this.recipes.length === 0;
    this.stillSearching = false;
  }
}
