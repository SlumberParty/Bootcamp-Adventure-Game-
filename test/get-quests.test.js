import api from '../src/services/api.js';
import quests from '../src/services/quest-data.js';

const test = QUnit.test;

test('get the quest data from the API', assert => {
    //arrange
    const expected = quests;

    //act
    const result = api.getQuests();
    
    //assert

    assert.deepEqual(result, expected);
});
