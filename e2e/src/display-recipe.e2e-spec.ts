import { AppPage, PageVisibility, PageClick } from "./app.po";

describe("Display recipe", () => {
  let page: AppPage;
  let pageVisibility: PageVisibility;
  let pageClick: PageClick;

  beforeEach(() => {
    page = new AppPage();
    pageClick = new PageClick();
    pageVisibility = new PageVisibility();
    page.navigateTo();
  });

  it("see full recipe", () => {
    pageClick.searchByIngredient();
    pageClick.provideSearchValue();
    pageClick.clickSearchButton();
    pageClick.clickRecipeLink();
    expect(pageVisibility.isRecipeNamePresent()).toEqual(true);
    expect(pageVisibility.isIngredientColumnPresent()).toEqual(true);
    expect(pageVisibility.isMeasureColumnPresent()).toEqual(true);
  });
});
