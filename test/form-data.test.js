import makeUser from '../src/home/make-user.js';

const test = QUnit.test;
QUnit.module('formData test'); 

test('return an object based off of formData', (assert) => {
    //Arrange
    // Set up your parameters and expectations
    const formData = new FormData();
    formData.set('name', 'claire');
    formData.set('portlander', 'hiker');

    const expected = {
        name: 'claire',
        portlander: 'hiker',
        wellBeing: '100',
        localCred: '0'
    };

    // Act
    // Call the function you're testing and set the result to a const
    const portlander = makePortlander(formData);

    //Assert
    assert.deepEqual(portlander, expected);
});