const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');

describe('My Little Hero', function () { //define suite title by passing a string

    describe('MLH generate a story', function () { //define sub-suite title by passing a string

        it('TC-001 MLH generate a story ', function () { //define test title by passing a string
            browser.url('https://qa-apps.netlify.app/app_my_hero'); //open baseUrl
        });

        it('TC- 002 Hero\'s Name is entered', function () {
            const input = $$(sel.name).addValue('Eric');
            const value = input.getValue();
            //expect(value).toEqual('Eric');
        });

        it('TC- 001 MHL gender is selected', function () {
            const gender = $$(sel.gender)[0].click();
            expect().toEqual(true);
        });

    });


});