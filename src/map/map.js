import api from '../services/api.js';

const name = document.getElementById('name');
const patience = document.getElementById('patience');
const madSkillz = document.getElementById('mad-skillz');

const player = api.getUser();

name.textContent = player.name;
patience.textContent = 'Patience Level: ' + player.patience;
madSkillz.textContent = 'Mad Skillz: ' + player.madSkillz;
