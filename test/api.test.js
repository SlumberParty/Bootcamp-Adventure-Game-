import api from '../src/services/api.js';
const test = QUnit.test;

QUnit.module('apitest');
api.storage = sessionStorage;

test('signUP saves the object and getUser returns the object', assert => {
    //arrange
    const expected = {
        name: 'Claire',
        position: 'student',
        patience: '100',
        madSkillz: '50'
    };
    //act
    api.signUp(expected);
    const result = api.getUser();
    //assert
    assert.deepEqual(result, expected);
});
