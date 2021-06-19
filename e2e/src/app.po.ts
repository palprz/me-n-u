import { browser, by, element } from "protractor";

export class AppPage {
  navigateTo() {
    return browser.get("/");
  }

  getTitleText() {
    return element(by.css("app-root app-navbar #title")).getText();
  }

  getSearchButtonText() {
    return element(by.css("app-root app-navbar #searchBtn")).getText();
  }

  getSearchFiltersText() {
    return element(by.css("app-root app-navbar #searchFilters")).getText();
  }
}
