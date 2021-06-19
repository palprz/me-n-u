import { AppPage } from "./app.po";

describe("Front page check", () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it("should display name of the app", () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual("Me'N'U");
  });
});
