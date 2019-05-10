import quests from './quest-data.js';

const api = {
    // Sets storage of where we will be putting the object
    storage: localStorage,

    //Converts object to stringified JSON and stores it
    signUp(user) {
        const json = JSON.stringify(user);
        api.storage.setItem('user', json);
    },

    //Returns the object after it is parsed
    getUser() {
        const json = api.storage.getItem('user');
        const user = JSON.parse(json);
        return user;
    },

    //get all the quests
    getQuests() {
        return quests;
    }
};

export default api;