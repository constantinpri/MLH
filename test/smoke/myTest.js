const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');
const data = require('../../data/testdata.json');

describe('My Little Hero', function () { //define suite title by passing a string

    describe('MLH generate a story', function () { //define sub-suite title by passing a string

        it('TC-001 MLH generate a story ', function () { //define test title by passing a string
            browser.url('https://qa-apps.netlify.app/app_my_hero'); //open baseUrl
        });

        it('TC-002 ', function () {
            const name = $(sel.name).setValue(data.name);
            const inputGender = $$(sel.gender)[data.gender.he].click();
            const inputAge = $(sel.age).addValue(data.age);
            const story = $(sel.story).click();
            browser.pause(2000);
            const type = $$(sel.type)[data.storyType].click();
            const create = $(sel.creatBtn2).isEnabled();
            const click = $(sel.creatBtn2).click();
            const end = $(sel.endStory).isDisplayed();
            expect(end).toEqual(true);


        });

        //const strory = $(sel.finalStory).getText();
        //expect(strory).toHaveTextContaining("345");
        //const def = $(sel.defaultp).isDisplayed();
        //expect(def).toEqual(true);


    });

});