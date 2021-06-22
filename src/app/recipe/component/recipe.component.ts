import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Recipe } from "../recipe";

import { RecipeService } from "../service/recipe.service";

@Component({
  selector: "app-recipe",
  templateUrl: "./recipe.component.html",
  styleUrls: ["./recipe.component.less"],
})
export class RecipeComponent implements OnInit {
  dataSource: Recipe;
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
}
