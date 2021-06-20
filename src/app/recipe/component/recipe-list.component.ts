import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { RecipeService } from "../service/recipe.service";
import { SimpleRef } from "../simple-recipe";
import { CategoryName, getCategory } from "../category-names";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.less"],
})
export class RecipeListComponent implements OnInit {
  dataSource: string | any[];
  responseMessage: string;
  filter: string;
  value: string;
  isEmptyList = true;
  isSearching = true;

  ngOnInit() {
    var paramMap = this.route.snapshot.queryParamMap;
    this.value = paramMap.get("value");
    this.filter = paramMap.get("filter");

    this.fetchRecipesByFilter(getCategory(this.filter), this.value);
  }

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  fetchRecipesByFilter(filter: String, value: String) {
    switch (filter) {
      case CategoryName.INGREDIENT:
        this.recipeService
          .loadRecipesByIngredient(value)
          .subscribe((recipes) => {
            this.provideResponse(recipes);
          });
        break;
      case CategoryName.CATEGORY:
        this.recipeService.loadRecipesByCategory(value).subscribe((recipes) => {
          this.provideResponse(recipes);
        });
        break;
      default:
        this.isSearching = false;
        break;
    }
  }

  provideResponse(recipes: SimpleRef[]) {
    this.dataSource = recipes;
    this.isEmptyList = this.dataSource.length === 0;
  }
}
