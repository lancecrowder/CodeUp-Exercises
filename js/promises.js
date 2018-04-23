"use strict";

function wait(num){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, num);
    });
}
wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

// const gitHubToken = 8f006029edb310e5b5d402ce12c66526671acb3f;

function getLastCommit () {
    fetch('https://api.github.com/users/lancecrowder/events/public', {headers: {'Authorization': 'token'}})
        .then(response => response.json())
        // .then((users) => console.log(users.map(user => user.created_at)))
        .then((users) => console.log(users[0].created_at));
}

getLastCommit();