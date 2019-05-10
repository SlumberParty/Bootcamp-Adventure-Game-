function createCompletedQuest(quests) {
    const span = document.createElement('span');
    span.classList.add('quest');
    span.classList.add('completed');
    span.textContent = quests.title;

    return span;
}

export default createCompletedQuest;
