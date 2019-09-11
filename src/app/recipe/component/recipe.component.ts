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

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit() {
    console.log("ngOnInit");
    const id: string = this.route.snapshot.queryParamMap.get('id');
    console.log("firstParam", id);

    this.recipeService.loadRecipeById(id).subscribe( recipes => {
      this.dataSource = recipes;
    });
  }

}
