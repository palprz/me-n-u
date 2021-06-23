import { browser, by, element } from "protractor";

const NAV_BAR = "app-root app-navbar ";
const MAIN_CONTENT = "app-root .main-content ";

export class AppPage {
  navigateTo() {
    return browser.get("/");
  }
}

export class PageText {
  getTitleText() {
    return element(by.css(NAV_BAR + "#app-title")).getText();
  }

  getSearchButtonText() {
    return element(by.css(NAV_BAR + "#search-btn")).getText();
  }

  getSearchFiltersText() {
    return element(by.css(NAV_BAR + "#search-filters")).getText();
  }

  getNoFoundRecipeMessage() {
    return element(by.css(MAIN_CONTENT + "#found-no-recipe")).getText();
  }

  getFoundRecipeMessage() {
    return element(by.css(MAIN_CONTENT + "#found-recipe")).getText();
  }

  getRecipeName() {
    return element(by.css(MAIN_CONTENT + ".recipe-name")).getText();
  }

  getFrontPageMainText() {
    return element(by.css(MAIN_CONTENT + ".main-text")).getText();
  }

  getIngredientsSection() {
    return element(by.css(MAIN_CONTENT + ".ingredients")).getText();
  }

  getFullContainer() {
    return element(by.css(MAIN_CONTENT)).getText();
  }
}

export class PageVisibility {
  isFoundNoRecipeMessagePresent() {
    return element(by.css(MAIN_CONTENT + "#found-no-recipe")).isPresent();
  }

  isFoundRecipeMessagePresent() {
    return element(by.css(MAIN_CONTENT + "#found-recipe")).isPresent();
  }

  isIngredientColumnPresent() {
    return element(by.css(MAIN_CONTENT + ".ingredient-column")).isPresent();
  }

  isMeasureColumnPresent() {
    return element(by.css(MAIN_CONTENT + ".measure-column")).isPresent();
  }

  isRecipeNamePresent() {
    return element(by.css(MAIN_CONTENT + ".recipe-name")).isPresent();
  }
}

export class PageClick {
  searchByIngredient() {
    element(by.css(NAV_BAR + "#ingredient-filter")).click();
  }

  searchByCategory() {
    element(by.css(NAV_BAR + "#category-filter")).click();
  }

  provideInvalidSearchValue() {
    element(by.css(NAV_BAR + "#search-value")).sendKeys("invalid-search-value");
  }

  provideSearchValue() {
    element(by.css(NAV_BAR + "#search-value")).sendKeys("chicken");
  }

  clickSearchButton() {
    element(by.css(NAV_BAR + "#search-btn")).click();
  }

  clickRecipeLink() {
    element(by.css(MAIN_CONTENT + ".recipe-link")).click();
  }
}
