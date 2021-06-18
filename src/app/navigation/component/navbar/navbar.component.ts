import { Component, ViewChild, ElementRef } from "@angular/core";
import { CategoryName } from "../../../recipe/category-names";

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

    this.redirectUrl = "/recipes?filter=" + filter + "&value=" + value;
  }
}
