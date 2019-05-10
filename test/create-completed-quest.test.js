import api from '../src/services/api.js';
import createCompletedQuest from '../src/quests/create-completed-quest.js';
const test = QUnit.test;

QUnit.module('create completed quest html');

api.storage = sessionStorage;

test('creates completed link html', (assert) => {
    // arrange

    const quests = {
        title: 'You enter the kitchen'
    };

    // use your static html example
    const expected = '<span class="quest completed">You enter the kitchen</span>';

    // act
    const dom = createCompletedQuest(quests);

    // assert
    assert.equal(dom.outerHTML, expected);
});

