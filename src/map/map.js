import api from '../services/api.js';
import loadProfile from '../load-profile.js';
import createQuestLink from '../quests/create-quest-link.js';

const nav = document.getElementById('quests');

const quests = api.getQuests();

for(let i = 0; i < quest.length; i++) {
    const quest = quest[i];
    const link = createQuestLink(quest);
    nav.appendChild(link);
}


