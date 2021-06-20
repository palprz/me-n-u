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
    expect(pageText.getTitleText()).toEqual("Me'N'U");
  });

  it("display properly search button", () => {
    expect(pageText.getSearchButtonText()).toEqual("Search recipes, quick!");
  });

  it("display search filters", () => {
    expect(pageText.getSearchFiltersText()).toEqual(
      "Search by ingredient category"
    );
  });
});
