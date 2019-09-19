import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { RecipeService } from '../service/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.less']
})
export class RecipeListComponent implements OnInit {
    @ViewChild('recipeInput') recipeInput: ElementRef;
    dataSource;

    ngOnInit() {
    }

    constructor(private recipeService: RecipeService) {
    }

    checkRecipes() {
      this.recipeService.loadRecipeByIngredient(this.recipeInput.nativeElement.value).subscribe( recipes => {
        this.dataSource = recipes;
      });
    }

}
