import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RecipeService } from '../service/recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.less']
})
export class RecipeComponent implements OnInit {
  dataSource;
  loadedRecipe = false;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit() {
    const id: string = this.route.snapshot.queryParamMap.get('recipeId');

    this.recipeService.loadRecipeById(id).subscribe( recipe => {
      this.dataSource = recipe;
      this.loadedRecipe = true;
    });
  }

  checkRecipesByCategory(event: any) {
    this.recipeService.loadRecipeByCategory(event.target.attributes.id.value).subscribe( recipes => {
      this.dataSource = recipes;
    });
  }

}