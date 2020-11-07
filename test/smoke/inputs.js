const sel = require("../../data/selectors.json");
const exp = require("../../data/expected.json");
describe("Inputs", function () {
  //define suite title by passing a string

  describe("Inputs are displayed", function () {
    it("TC-013 Name input field is displayed", function () {
      browser.url("https://qa-apps.netlify.app/app_my_hero"); //open baseUrl
      const inputF = $(sel.name).isDisplayed();
      expect(inputF).toEqual(true);
    });

    it("TC-014 GenderHe radio button is displayed", function () {
      const inputF = $$(sel.gender)[0].isDisplayed();
      expect(inputF).toEqual(true);
    });

    it("TC-015 GenderShe radio button is displayed", function () {
      const inputF = $$(sel.gender)[1].isDisplayed();
      expect(inputF).toEqual(true);
    });

    it("TC-016 GenderIt radio button is displayed", function () {
      const inputF = $$(sel.gender)[2].isDisplayed();
      expect(inputF).toEqual(true);
    });

    it("TC-017 Radio button text = he", function () {
      const inputF = $$(sel.genderHe)[2].getText();
      expect(inputF).toEqual(exp.elemGenderHe);
    });

    it("TC-018 Radio button text = she", function () {
      const inputF = $$(sel.genderShe)[5].getText();
      expect(inputF).toEqual(exp.elemGenderShe);
    });

    it("TC-019 Radio button text = it", function () {
      const inputF = $$(sel.genderIt)[8].getText();
      expect(inputF).toEqual(exp.elemGenderIt);
    });

    it("TC-020 Input field age is displayed", function () {
      const inputF = $(sel.age).isDisplayed();
      expect(inputF).toEqual(true);
    });

    it("TC-021 Dropdown story box is displayed", function () {
      const inputF = $(sel.story).isDisplayed();
      expect(inputF).toEqual(true);
    });

    it("TC-022 Drag&Drop container is displayed", function () {
      const inputF = $$(sel.imgUpload)[1].isDisplayed();
      expect(inputF).toEqual(true);
    });

    it("TC-023 Create button is displayed", function () {
      const inputF = $$(sel.createBtn)[5].isDisplayed();
      expect(inputF).toEqual(true);
    });

    it("TC-024 Drag&drop container = +", function () {
      const inputF = $$(sel.plus)[3].isDisplayed();
      expect(inputF).toEqual(true);
    });

    it("TC-025 Drag&drop container = Click or drag and drop ", function () {
      const inputF = $$(sel.createBtn)[5].isDisplayed();
      expect(inputF).toEqual(true);
    });

    it("TC-026 Create button = Create!", function () {
      const inputF = $(sel.btnTxt).getText();
      expect(inputF).toEqual(exp.btnName);
    });
  });

  describe("Placeholders text are correct", function () {
    it("TC-031 Name Placeholder text = Hero's name", function () {
      const place = $(sel.name).getAttribute("placeholder");
      expect(place).toEqual(exp.placeName);
    });

    it("TC-032 Age Placeholder text = Hero's age", function () {
      const place = $(sel.age).getAttribute("placeholder");
      expect(place).toEqual(exp.placeAge);
    });

    it("TC-033 Story drop down box = Type of the story", function () {
      // how to find attribute element
      const place = $(sel.storyP).getText();
      expect(place).toEqual(exp.typeOfStory);
    });

    it("TC-034 Upload container = Click or drag and drop", function () {
      // how to find attribute element
      const place = $(sel.uploadTxt).getText();
      expect(place).toEqual(exp.uploadT);
    });
  });

  describe("Dropdown box contains 7 types of stories", function () {
    it("TC-035 Click on dropdown box = dropdown expands", function () {
      const button = $(sel.story).click();
      const len = $$(sel.type).length;
      expect(len).toEqual(7);
    });

    it("TC-036 Dropdown box contains = Overcoming the Monster", function () {
      const type = $$(sel.type)[0].getText();
      expect(type).toEqual(exp.type1);
    });

    it("TC-037 Dropdown box contains = Rebirth", function () {
      const type = $$(sel.type)[1].getText();
      expect(type).toEqual(exp.type2);
    });

    it("TC-038 Dropdown box contains = Quest", function () {
      const type = $$(sel.type)[2].getText();
      expect(type).toEqual(exp.type3);
    });

    it("TC-039 Dropdown box contains = Journey and Return", function () {
      const type = $$(sel.type)[3].getText();
      expect(type).toEqual(exp.type4);
    });

    it("TC-040 Dropdown box contains = Rags and Riches", function () {
      const type = $$(sel.type)[4].getText();
      expect(type).toEqual(exp.type5);
    });

    it("TC-041 Dropdown box contains = Tragedy", function () {
      const type = $$(sel.type)[5].getText();
      expect(type).toEqual(exp.type6);
    });

    it("TC-042 Dropdown box contains = Comedy", function () {
      const type = $$(sel.type)[6].getText();
      expect(type).toEqual(exp.type7);
    });
  });
});
