const kitchen = {
    id: 'kitchen',
    title: 'You enter the communal kitchen',
    image: 'kitchen.jpg',
    description: `
        Not quite ready to face people or the day you enter the small kitchen area 
        hoping for a soothing morning beverage, but you can't find a cup. You see a cup sitting in the sink, 
        a large fridge proabably full of stuff and a few cupboards. What do you go for first?
        `,
    choices: [{
        id: 'help',
        description: 'wash the cup in the sink',
        result: `
            You start washing the cup in the sink and a large line immediately forms behind you, 
            waiting for you to finish. As you start to feel the pressure of all those eyes you get clumsy,
            splash water all over the counter and floor and somehow squirt soap in your eye. 
            You avoid the sink for a week. Your patience drops and you go about your work.
            `,
        patience: -5,
        madskillz: 0
    }, {
        id: 'search',
        description: 'search the cupboards',
        result: `
            You start opening cupboards and rummaging around. Hidden deep in the dusty recesses of an under counter 
            cupboard you find an ancient bottle of sunny-D, your favorite childhood beverage that is now impossible 
            to find! This stuff never goes bad! A light dust-off and your day is made. You take a deep breath and
            after one swig even feel smarter?
            `,
        patience: 3,
        madskillz: 5
    }, {
        id: 'loot',
        description: 'loot the fridge',
        result: `
            A full fridge? You don't mind if you do, despite that taking someone elses goods makes you a tash
            person! Your eyes quickly go over the bountiful options and you choose a delicious, hella expensive 
            bottle of green juice. And hour later you can't leave the bathroom and can't even see straight from 
            your well deserved food poisioning.
            `,
        patience: 0,
        madskillz: -5
    }]
};

const classroom = {
    id: 'classroom',
    title: 'You enter the classroom',
    image: 'classroom.jpg',
    description: `
        You are feeling ready to work, so you head straight to the large, bright open-layout classroom. You 
        are hoping to get some coding in before the first class starts. where do you head for maximum productivity? 
        `,
    choices: [{
        id: 'table',
        description: 'one of the many small islands of tables',
        result: `
            You head for the obvious choice, one of the pods of tables that students sit at during lectures and
            group work. There are a few people already sitting there. As you settle in you reach to plug your laptop
            in to the communal power strip on the table, and there is a bright flash of light. You have somehow 
            overloaded the power strip and it catches on fire. You spend a few hours dealing with the fire department
            and learn nothing. 
        `,
        patience: -5,
        madskillz: -3
    }, {
        id: 'window',
        description: 'the standing counter set against the windows',
        result: `
            You are attracted to the large, bright windows like a moth to light. You are able to stand while working
            and feel the ergonomic design bring you health and vitality. You complete your work early and go 
            get a massage. 
        `,
        patience: 8,
        madskillz: 5
    }, {
        id: 'couch',
        description: 'one of the couches set around the room',
        result: `
            You like the look of the plush couches and manage to nab a comfy seat. You feel smug about your choice
            of career and the work life balance it brings you. Unfortunately, after an hour or so your back hurts
            and you are freezing because you are sitting under the air conditioning. You get your work done but 
            you aren't happy about it. 
        `,
        patience: -3,
        madskillz: 3
    }]
};

const office = {
    id: 'office',
    title: 'You enter the office',
    image: 'office.jpg',
    description: `
        You wouldn't mind a chat with the director, so you head to one of the hip little glass lined offices to 
        see if anyone is around. They aren't, but there are a few interesting things in sight. What are you 
        interested in?
    `,
    choices: [{
        id: 'dog',
        description: 'the pair of sleeping cavalier king charles cocker spainels',
        result: `
            You know these dogs are not for you, but you CANNOT HELP YOURSELF. You watch in horror as you crouch down,
            reach out and stroke one silky ear. It is like heaven. Your heart tingles. You feel soothed. As one of
            the pups sleepily opens an eye you bolt upright and run, knowing you just used up all of your good 
            karma and it was so worth it. 
            `,
        patience: 8,
        madskillz: 3
    }, {
        id: 'chair',
        description: 'the empty chair behind the desk',
        result: `
            You glance around for bystanders and then lower yourself into the chair. You feel a warm rush of megalomaina 
            for about two seconds before the director walks in. You recive a long, shameful, firm but fair talking 
            to for being where you shouldn't be. You feel deflated and have lost several hours of your day. 
            `,
        patience: -3,
        madskillz: -5
    }, {
        id: 'cry',
        description: 'the floor',
        result: `
         Here in this dim, quiet space you can finally be alone and something snaps. The pressure you didn't
         you had been holding on to releases and you sink to the floor, crying cathartically to yourself. 
         After a few minutes you dry your eyes and return to work, a bit emotional but renewed and determined.
        `,
        patience: 3,
        madskillz: 0
    }]
};

const quests = [kitchen, classroom, office];

export default quests;