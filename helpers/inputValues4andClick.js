const sel = require('../data/selectors.json');


function inputValues4andClick (name, gender, age, storyType){
    $(sel.name).setValue(name);
    $$(sel.gender)[gender].click();
    $(sel.age).setValue(age);
    $(sel.story).click();
    $$(sel.type)[storyType].click();
    $(sel.create).click();

}

module.exports = inputValues4andClick;
