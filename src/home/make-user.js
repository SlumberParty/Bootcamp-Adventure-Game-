function makeUser(formData) {
    const user = {
        name: formData.get('name'),
        position: formData.get('user'),
        patience: '100',
        madSkillz: '50'
    };
    return user;
}

export default makeUser;