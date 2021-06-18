export enum CategoryName {
  INGREDIENT = "ingredient",
  CATEGORY = "category"
}

export function getCategory(name: string): CategoryName {
  if(name === "ingredient") {
    return CategoryName.INGREDIENT;
  } else if(name === "category") {
    return CategoryName.CATEGORY;
  } else {
    return null;
  }
}