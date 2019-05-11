import api from '../src/services/api.js';
import createChoiceHtml from '../src/quests/create-choice.js';

const test = QUnit.test;

test('create the html for the radio button choices', (assert) => {
    //arrange
    const quests = api.getQuests();
    const quest = quests[0];
    const choice = quest.choices[0];

    const expected = `<div><label for="help">wash the cup in the sink</label><input type="radio" class="choice" name="choice" id="help" value="help"></div>`;

    //act

    const result = createChoiceHtml(choice);

    //assert
    assert.equal(result.outerHTML, expected);
});