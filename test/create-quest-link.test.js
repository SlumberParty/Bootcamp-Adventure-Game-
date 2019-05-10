import api from '../src/services/api.js';
import createQuestLink from '../src/quests/create-quest-link.js';

const test = QUnit.test;

QUnit.module('create quest link html');

api.storage = sessionStorage;

test('creates correct link html', (assert) => {
    // arrange
    const quests = {
        id: 'kitchen',
        title: 'You enter the kitchen'
    };

    // use your static html example
    const expected = '<a class="quest" href="quest.html?id=kitchen">You enter the kitchen</a>';

    // act
    const dom = createQuestLink(quests);

    // assert
    assert.equal(dom.outerHTML, expected);
});