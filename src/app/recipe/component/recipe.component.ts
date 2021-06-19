import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Recipe } from "../recipe";

import { RecipeService } from "../service/recipe.service";
import { SimpleRef } from "../simple-recipe";

@Component({
  selector: "app-recipe",
  templateUrl: "./recipe.component.html",
  styleUrls: ["./recipe.component.less"],
})
export class RecipeComponent implements OnInit {
  dataSource: SimpleRef[] | Recipe;
  loadedRecipe = false;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  ngOnInit() {
    var id: string = this.route.snapshot.queryParamMap.get("recipeId");

    this.recipeService.loadRecipeById(id).subscribe((recipe) => {
      this.dataSource = recipe;
      this.loadedRecipe = true;
    });
  }

  checkRecipesByCategory(event: any) {
    this.recipeService
      .loadRecipesByCategory(event.target.attributes.id.value)
      .subscribe((recipes) => {
        this.dataSource = recipes;
      });
  }
}
