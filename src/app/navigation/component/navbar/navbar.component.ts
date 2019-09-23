import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent {
    @ViewChild('valueInput', {static: true}) valueInput: ElementRef;
    @ViewChild('ingredientFlag', {static: true}) ingredientFlagInput: ElementRef;
    @ViewChild('categoryFlag', {static: true}) categoryFlagInput: ElementRef;
    redirectUrl;

    constructor(private router: Router) { }

    checkRecipes() {
      var ingredientFlag = this.ingredientFlagInput.nativeElement.checked;
      var categoryFlag = this.categoryFlagInput.nativeElement.checked;

      if(ingredientFlag) {
        this.redirectUrl = "/recipes?ingredient=" + this.valueInput.nativeElement.value;
      } else if(categoryFlag) {
        this.redirectUrl = "/recipes?category=" + this.valueInput.nativeElement.value;
      }
    }

}
