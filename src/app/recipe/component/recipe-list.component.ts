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
    isEmptyList = false;

    ngOnInit() {
      var paramMap = this.route.snapshot.queryParamMap;
      var category: string = paramMap.get('category');
      var ingredient: string = paramMap.get('ingredient');

      if(category !== null) {
        this.checkRecipesByCategory(category);
        this.responseMessage = category + " category ";
      } else if(ingredient !== null) {
        this.checkRecipesByIngredient(ingredient);
        this.responseMessage = ingredient + " ingredient ";
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
    }

}
