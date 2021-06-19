import { AppPage } from "./app.po";

describe("Front page check", () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it("should display name of the app", () => {
    expect(page.getTitleText()).toEqual("Me'N'U");
  });

  it("should display properly search button", () => {
    expect(page.getSearchButtonText()).toEqual("Search recipes, quick!");
  });

  it("should display search filters", () => {
    expect(page.getSearchFiltersText()).toEqual(
      "Search by ingredient category"
    );
  });
});
