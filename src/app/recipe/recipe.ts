import { Ingredient } from './ingredient';

export class Recipe {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
  strDrinkAlternate: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strTags: string;
  strYoutube: string;
  ingredients: Ingredient[]

  constructor(strMeal, strMealThumb, idMeal, strDrinkAlternate, strCategory,
    strArea, strInstructions, strTags, strYoutube, ingredients) {
    this.strMeal = strMeal;
    this.strMealThumb = strMealThumb;
    this.idMeal = idMeal;
    this.strDrinkAlternate = strDrinkAlternate;
    this.strCategory = strCategory;
    this.strArea = strArea;
    this.strInstructions = strInstructions;
    this.strTags = strTags;
    this.strYoutube = strYoutube;
    this.ingredients = ingredients;
  }

}
