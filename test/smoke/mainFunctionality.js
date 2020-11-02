const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');
describe('Inputs', function () { //define suite title by passing a string

    describe('Checking the main functionality', function () {

        it('TC-026 name input field is clickable', function () {
            browser.url('https://qa-apps.netlify.app/app_my_hero'); //open baseUrl
            const el = $(sel.name).isClickable();
            expect(el).toEqual(true);
        });

        it('TC-027 radio button he is clickable', function () {
            const el = $$(sel.gender)[0].isClickable();
            expect(el).toEqual(true);
        });

        it('TC-028 radio button she is clickable', function () {
            const el = $$(sel.gender)[1].isClickable();
            expect(el).toEqual(true);
        });

        it('TC-029 radio button it is clickable', function () {
            const el = $$(sel.gender)[2].isClickable();
            expect(el).toEqual(true);
        });

        it('TC-030 age input field it is clickable', function () {
            const el = $(sel.age).isClickable();
            expect(el).toEqual(true);
        });

        it('TC-029 story drop down box is clickable', function () {
            const el = $(sel.story).isClickable();
            expect(el).toEqual(true);
        });

        it('TC-030 upload container is clickable', function () {
            const el = $(sel.upload).isClickable();
            expect(el).toEqual(true);
        });
    });

});