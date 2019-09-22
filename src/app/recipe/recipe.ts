import { Ingredient } from './ingredient';

export class Recipe {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  ingredients: Ingredient[]

  constructor(strMeal, strMealThumb, idMeal, strCategory,
    strArea, strInstructions, ingredients) {
    this.strMeal = strMeal;
    this.strMealThumb = strMealThumb;
    this.idMeal = idMeal;
    this.strCategory = strCategory;
    this.strArea = strArea;
    this.strInstructions = strInstructions;
    this.ingredients = ingredients;
  }

}
