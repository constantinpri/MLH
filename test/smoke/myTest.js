const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');

describe('My Little Hero', function () { //define suite title by passing a string

    describe('MLH generate a story', function () { //define sub-suite title by passing a string

        it('TC-001 MLH generate a story ', function () { //define test title by passing a string
            browser.url('https://qa-apps.netlify.app/app_my_hero'); //open baseUrl
        });

        it('TC-002 ', function () {
            const name = $(sel.name).setValue('Eric');
            $$(sel.gender)[0].click();
            $(sel.age).addValue(345);
            $(sel.story).click();
            $$(sel.type)[3].click();
            //browser.pause(9000);
            $(sel.creatBtn2).click();
            //browser.pause(9000);
            const end = $(sel.endStory).isDisplayed();
            expect(end).toEqual(true);
            //const strory = $(sel.finalStory).getText();
            //expect(strory).toHaveTextContaining("345");
            //const def = $(sel.defaultp).isDisplayed();
            //expect(def).toEqual(true);
        });



    });

});