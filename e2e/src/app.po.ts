import { browser, by, element } from "protractor";

const NAV_BAR = "app-root app-navbar ";
const CONTAINER = "app-root .container ";

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
    return element(by.css(CONTAINER + "#found-no-recipe")).getText();
  }

  getFoundRecipeMessage() {
    return element(by.css(CONTAINER + "#found-recipe")).getText();
  }

  getRecipeName() {
    return element(by.css(CONTAINER + ".recipe-name")).getText();
  }
}

export class PageVisibility {
  isFoundNoRecipeMessagePresent() {
    return element(by.css(CONTAINER + "#found-no-recipe")).isPresent();
  }

  isFoundRecipeMessagePresent() {
    return element(by.css(CONTAINER + "#found-recipe")).isPresent();
  }

  isIngredientColumnPresent() {
    return element(by.css(CONTAINER + ".ingredient-column")).isPresent();
  }

  isMeasureColumnPresent() {
    return element(by.css(CONTAINER + ".measure-column")).isPresent();
  }

  isRecipeNamePresent() {
    return element(by.css(CONTAINER + ".recipe-name")).isPresent();
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
    element(by.css(CONTAINER + ".recipe-link")).click();
  }
}
