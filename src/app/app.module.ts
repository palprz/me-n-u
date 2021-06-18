import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { RecipeComponent } from "./recipe/component/recipe.component";
import { RecipeListComponent } from "./recipe/component/recipe-list.component";
import { NavbarComponent } from "./navigation/component/navbar/navbar.component";

@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    RecipeListComponent,
    NavbarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
