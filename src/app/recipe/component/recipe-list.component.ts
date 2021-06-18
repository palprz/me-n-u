import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RecipeService } from '../service/recipe.service';
import { SimpleRecipe } from '../simple-recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.less']
})
export class RecipeListComponent implements OnInit {
    dataSource: string | any[];
    responseMessage: string;
    // At the beginning, we don't want to show "no results found" message
    isEmptyList = false;

    ngOnInit() {
      const category: string = this.route.snapshot.queryParamMap.get('category');
      const ingredient: string = this.route.snapshot.queryParamMap.get('ingredient');

      if(category !== null) {
        this.checkRecipesByCategory(category);
        this.responseMessage = "Found recipes for '" + category + "' category 👌";
      }

      if(ingredient !== null) {
        this.checkRecipesByIngredient(ingredient);
        this.responseMessage = "Found recipes for '" + ingredient + "' ingredient 👌";
      }
    }

    constructor(private route: ActivatedRoute, private recipeService: RecipeService) {
    }

    checkRecipesByIngredient(ingredient: String) {
      this.recipeService.loadRecipeByIngredient(ingredient).subscribe( recipes => {
        this.provideResponse(recipes);
      });
    }

    checkRecipesByCategory(category: String) {
      this.recipeService.loadRecipeByCategory(category).subscribe( recipes => {
        this.provideResponse(recipes);
      });
    }

    provideResponse(recipes: SimpleRecipe[]) {
      this.dataSource = recipes;
      this.isEmptyList = this.dataSource.length === 0;
      if(this.isEmptyList) {
        this.responseMessage = "";
      }
    }

}
