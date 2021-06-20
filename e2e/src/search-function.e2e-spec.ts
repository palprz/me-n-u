import { AppPage, PageText, PageVisibility, PageClick } from "./app.po";

describe("Search function", () => {
  let page: AppPage;
  let pageVisibility: PageVisibility;
  let pageText: PageText;
  let pageClick: PageClick;

  beforeEach(() => {
    page = new AppPage();
    pageClick = new PageClick();
    pageText = new PageText();
    pageVisibility = new PageVisibility();
    page.navigateTo();
  });

  it("search by ingredient", () => {
    pageClick.searchByIngredient();
    pageClick.provideSearchValue();
    pageClick.clickSearchButton();
  });

  it("search by category", () => {
    pageClick.searchByCategory();
    pageClick.provideSearchValue();
    pageClick.clickSearchButton();
  });

  it("find no recipe", () => {
    pageClick.searchByIngredient();
    pageClick.provideInvalidSearchValue();
    pageClick.clickSearchButton();
    expect(pageVisibility.isFoundRecipeMessagePresent()).toEqual(false);
    expect(pageVisibility.isFoundNoRecipeMessagePresent()).toEqual(true);
    expect(pageText.getNoFoundRecipeMessage()).toEqual(
      "Sorry, found no recipe for invalid-search-value ingredient 😔"
    );
  });

  it("find some recipes with provided ingredient", () => {
    pageClick.searchByIngredient();
    pageClick.provideSearchValue();
    pageClick.clickSearchButton();
    expect(pageVisibility.isFoundRecipeMessagePresent()).toEqual(true);
    expect(pageVisibility.isFoundNoRecipeMessagePresent()).toEqual(false);
    expect(pageText.getFoundRecipeMessage()).toEqual("Found recipes with for chicken ingredient 👌");
  });
});
