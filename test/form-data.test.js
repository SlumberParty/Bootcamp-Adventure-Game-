const test = QUnit.test;
QUnit.module('formData test'); 

function makeUser(formData) {
    const user = {
        name: formData.get('name'),
        position: formData.get('user'),
        patience: '100',
        madSkillz: '50'
    };
    return user;
}

test('return an object based off of formData', (assert) => {
    //Arrange
    // Set up your parameters and expectations
    const formData = new FormData();
    formData.set('name', 'Claire');
    formData.set('user', 'student');

    const expected = {
        name: 'Claire',
        position: 'student',
        patience: '100',
        madSkillz: '50'
    };

    // Act
    // Call the function you're testing and set the result to a const
    const user = makeUser(formData);

    //Assert
    assert.deepEqual(user, expected);
});