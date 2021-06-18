import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RecipeService } from '../service/recipe.service';
import { SimpleRecipe } from '../simple-recipe';
import { CategoryName, getCategory } from '../category-names';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.less']
})
export class RecipeListComponent implements OnInit {
    dataSource: string | any[];
    responseMessage: string;
    isEmptyList = true;
    isSearching = true;

    ngOnInit() {
      var paramMap = this.route.snapshot.queryParamMap;
      var filter: string = paramMap.get('filter');
      var value: string = paramMap.get('value');

      this.fetchRecipesByFilter(getCategory(filter), value);
    }

    constructor(private route: ActivatedRoute, private recipeService: RecipeService) {
    }

    fetchRecipesByFilter(filter: String, value: String) {
      switch(filter) {
        case CategoryName.INGREDIENT:
          this.recipeService.loadRecipesByIngredient(value).subscribe( recipes => {
            this.provideResponse(recipes);
          });
          break;
        case CategoryName.CATEGORY: 
        this.recipeService.loadRecipesByCategory(value).subscribe( recipes => {
          this.provideResponse(recipes);
        });
          break;
        default:
          this.isSearching = false;
          break;
      }

    }

    provideResponse(recipes: SimpleRecipe[]) {
      this.dataSource = recipes;
      this.isEmptyList = this.dataSource.length === 0;
    }

}
