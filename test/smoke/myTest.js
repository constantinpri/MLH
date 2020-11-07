const sel = require("../../data/selectors.json");
const exp = require("../../data/expected.json");
const data = require("../../data/testdata.json");
const inputValues4 = require("../../helpers/inputValues4");
const inputValues4andClick = require("../../helpers/inputValues4andClick");

describe("My Little Hero", function () {
  //define suite title by passing a string

  describe("MLH generate a story", function () {
    //define sub-suite title by passing a string

    it("TC-001 MLH generate a story ", function () {
      //define test title by passing a string
      browser.url("https://qa-apps.netlify.app/app_my_hero"); //open baseUrl
      inputValues4(data.name, data.gender.he, data.age, data.storyType);
      const create = $(sel.create).isEnabled();
      expect(create).toEqual(true);
    });

    it("TC - 002 gender she is working", function () {
      browser.url("https://qa-apps.netlify.app/app_my_hero"); //open baseUrl
      inputValues4(data.name, data.gender.he, data.age, data.storyType);
      $(sel.create).click();
      const btn = $(sel.tryAgain).isDisplayed();
      expect(btn).toEqual(true);
    });

    it("TC - 003 verify that default page is displayed", function () {
      browser.url("https://qa-apps.netlify.app/app_my_hero");
      inputValues4(data.name, data.gender.he, data.age, data.storyType);
      $(sel.create).click();
      $(sel.finalStory).getText();
      const defaults = $(sel.defaultp).isDisplayed();
      expect(defaults).toEqual(true);
    });

    it("TC - 003 verify that default page is displayed", function () {
      browser.url("https://qa-apps.netlify.app/app_my_hero");
      inputValues4andClick(
        data.name,
        data.gender.he,
        data.age,
        data.storyType,
        tryAgain,
        defaultp
      );
      $(sel.tryAgain).click();
      $(sel.defaultp).getText();
      const defaults = $(sel.defaultp).isDisplayed();
      expect(defaults).toEqual(true);
    });
  });
});
