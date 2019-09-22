import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent {
    @ViewChild('recipeInput') recipeInput: ElementRef;
    redirectUrl;

    constructor(private router: Router) { }

    checkRecipes() {
      this.redirectUrl = "/recipes?ingredient=" + this.recipeInput.nativeElement.value;
    }
    
}
