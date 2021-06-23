import { AppPage, PageText } from "./app.po";

describe("Front page", () => {
  let page: AppPage;
  let pageText: PageText;

  beforeEach(() => {
    page = new AppPage();
    pageText = new PageText();
    page.navigateTo();
  });

  it("display name of the app", () => {
    expect(pageText.getTitleText()).toEqual("M e ' N ' U");
  });

  it("display properly search button", () => {
    expect(pageText.getSearchButtonText()).toEqual("Search recipes, quick!");
  });

  it("display search filters", () => {
    expect(pageText.getSearchFiltersText()).toEqual(
      "Search by ingredient category"
    );
  });

  it("display main content text", () => {
    expect(pageText.getFrontPageMainText()).toContain(
      "Me'N'U is an application to find recipes based on ingredients or category."
    );
    expect(pageText.getFrontPageMainText()).toContain(
      "Find something for yourself by just sticking a phrase above 👆"
    );
    expect(pageText.getFrontPageMainText()).toContain(
      "Recipes are coming from https://www.themealdb.com"
    );
  });
});
