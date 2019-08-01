function createQuestLink(quest) {
    const anchor = document.createElement('a');
    anchor.classList.add('quest');
    anchor.textContent = quest.title;
    
    const searchParams = new URLSearchParams();
    searchParams.set('id', quest.id);
    anchor.href = 'quest.html?id=' + quest.id;

    return anchor;
}

export default createQuestLink;