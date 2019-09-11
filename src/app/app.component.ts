import { Component } from '@angular/core';

import { RecipeService } from './recipe/service/recipe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  message;
  dataSource;
  ingredient;

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {

  }

  checkRecipes(event: any) {
    this.message = "Loading recipes...";
    this.recipeService.loadRecipeByIngredient(event.target.value).subscribe( recipes => {
      this.dataSource = recipes;
      this.message = "Recipes loaded!";
    });
  }

}
