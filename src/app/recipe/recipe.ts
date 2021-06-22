import { Ingredient } from "./ingredient";

export class Recipe {
  mealName: string;
  mealThumb: string;
  idMeal: string;
  category: string;
  area: string;
  ingredients: Ingredient[];
  instructions: string[];

  constructor(
    mealName: string,
    mealThumb: string,
    idMeal: string,
    category: string,
    area: string,
    instructions: string[],
    ingredients: Ingredient[]
  ) {
    this.mealName = mealName;
    this.mealThumb = mealThumb;
    this.idMeal = idMeal;
    this.category = category;
    this.area = area;
    this.instructions = instructions;
    this.ingredients = ingredients;
  }
}
