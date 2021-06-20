import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { RecipeComponent } from "./recipe/component/recipe.component";
import { RecipeListComponent } from "./recipe/component/recipe-list.component";
import { HomepageComponent } from "./homepage/component/homepage.component";

const routes: Routes = [
  { path: "", component: HomepageComponent },
  { path: "recipe", component: RecipeComponent },
  { path: "recipes/:filter/:value", component: RecipeListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: "legacy" })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
