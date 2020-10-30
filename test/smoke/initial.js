const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');
describe('My Little Hero', function () { //define suite title by passing a string

    describe('Getting to the page', function () { //define sub-suite title by passing a string

        it('TC-001 Title is correct ', function () { //define test title by passing a string
            browser.url('https://qa-apps.netlify.app/app_my_hero'); //open baseUrl
            let title = browser.getTitle(); //get page title and assign it to the "title" variable
            expect(title).toEqual('MLH trial'); //compare {title} (actual) and "MLH trial" (expected)
        });


    });

    describe('Elements exist', function () {

        it('TC-002 Label for name', function () {
            const label = $$(sel.label)[0].isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-003 Label for gender', function () {
            const label = $$(sel.label)[1].isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-004 Label for age', function () {
            const label = $$(sel.label)[2].isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-005 Label for story ', function () {
            const label =$$(sel.label)[3].isDisplayed();
            expect(label).toEqual(true);
        });

    });

    describe('Labels are correct', function () {

        it('TC-006 Label for name = 1. What is your HERO\'s name?' , function () {
            const text = $$(sel.label)[0].getAttribute('title');
            expect(text).toEqual(exp.labelName);
        });
/*
        it('TC-007 Label for gender = 2. Please choose a gender', function () {
            const text = $$(sel.label)[1].getAttribute('title');
            expect(text).toEqual(exp.labelGender);
        });
*/
        it('TC-008 Label for age = 3. How old is your hero?', function () {
            const text = $$(sel.label)[2].getAttribute('title');
            expect(text).toEqual(exp.labelAge);
        });

        it('TC-009 Label for  story = 4. What type of story would you like to read? ', function () {
            const text = $$(sel.label)[3].getAttribute('title');
            expect(text).toEqual(exp.labelStory);
        });

      it('TC-010 Label for image = 5. Upload an image (optional) ', function () {
            const text = $(sel.image).getAttribute('title'); // new selector
            expect(text).toEqual(exp.labelImage);
        });
/*
                it('TC-011 Page Header Text 1 = My Little Hero' , function () {
                      const text = $('//body//h3').getAttribute('title');
                      expect(text).toEqual(exp.header);
                  });

                  it('TC-012 Page Header Text 2 = Let\'s create your own HERO! It\'s super easy with our application!', function () {
                      const text = $(sel.header2).getAttribute('title');
                      expect(text).toEqual(exp.header2);
                  });
*/
        });

        describe('Web - Elements exists', function () {

            it('TC-013 Name input field is displayed', function () {
                const inputf = $(sel.name).isDisplayed();
                expect(inputf).toEqual(true);
            });

            it('TC-014 Gender radio buttons are displayed', function () {
                const inputf = $$(sel.gender)[0].isDisplayed();
                expect(inputf).toEqual(true);
            });

            it('TC-015 Gender radio buttons are displayed', function () {
                const inputf = $$(sel.gender)[1].isDisplayed();
                expect(inputf).toEqual(true);
            });

            it('TC-016 Gender radio buttons are displayed', function () {
                const inputf = $$(sel.gender)[2].isDisplayed();
                expect(inputf).toEqual(true);
            });
/*
            it('TC-017 Radio button text = he', function () {
                const inputf = $$(sel.).getAttribute('title');
                expect(inputf).toEqual(exp.elemGender1);
            });

            it('TC-018 Radio button text = she', function () {
                const inputf = $$(sel.).getAttribute('title');
                expect(inputf).toEqual(exp.elemGender1);
            });

            it('TC-019 Radio button text = it', function () {
                const inputf = $$(sel.).getAttribute('title');
                expect(inputf).toEqual(exp.elemGender1);
            });
 */
            it('TC-020 Input field age is displayed', function () {
                const inputf = $(sel.age).isDisplayed();
                expect(inputf).toEqual(true);
            });

            it('TC-021 Dropdown story box is displayed', function () {
                const inputf = $(sel.story).isDisplayed();
                expect(inputf).toEqual(true);
            });

            it('TC-022 Drag&Drop container is displayed', function () {
                const inputf = $$(sel.imgUpload)[1].isDisplayed();
                expect(inputf).toEqual(true);
            });

            it('TC-023 Create button is displayed', function () {
                const inputf = $$(sel.createBtn)[5].isDisplayed();
                expect(inputf).toEqual(true);
            });
/*
            it('TC-024 Drag&drop container = +', function () {
                const inputf = $$(sel.createBtn).getAttribute();
                expect(inputf).toEqual(true);
            });

            it('TC-025 Drag&drop container = Click or drag and drop ', function () {
                const inputf = $$(sel.createBtn)[5].isDisplayed();
                expect(inputf).toEqual(true);
            });

            it('TC-025 Create button = Create!', function () {
                const inputf = $(sel.btnTxt).getAttribute();
                expect(inputf).toEqual(exp.btnName);
            });
*/
        });

    describe('Web elements are clickable', function () {

        it('TC-026 name input field is clickable', function () {
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