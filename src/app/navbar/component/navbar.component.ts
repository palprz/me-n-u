import { Component, ViewChild, ElementRef } from "@angular/core";
import { CategoryName } from "../../recipe/category-names";
import { Router } from "@angular/router";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.less"],
})
export class NavbarComponent {
  @ViewChild("valueInput", { static: true }) valueInput: ElementRef;
  @ViewChild("ingredientFlag", { static: true })
  ingredientFlagInput: ElementRef;
  @ViewChild("categoryFlag", { static: true }) categoryFlagInput: ElementRef;
  redirectUrl: string;

  constructor(private router: Router) {}

  tryCheckRecipes(e) {
    this.checkRecipes();
  }

  checkRecipes() {
    var ingredientFlag = this.ingredientFlagInput.nativeElement.checked;
    var categoryFlag = this.categoryFlagInput.nativeElement.checked;

    var filter: string;
    var value: string = this.valueInput.nativeElement.value;

    if (ingredientFlag) {
      filter = CategoryName.INGREDIENT;
    } else if (categoryFlag) {
      filter = CategoryName.CATEGORY;
    }

    this.router.navigate(["recipes", filter, value]);
  }
}
