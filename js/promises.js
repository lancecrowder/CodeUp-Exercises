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

function getLastCommit () {
    fetch('https://api.github.com/users/lancecrowder/events', {headers: {'Authorization': 'token YOUR_TOKEN_HERE'}})
        .then(response => response.json())
        // .then((users) => console.log(users.map(user => user.created_at)))
        .then((users) => console.log(users[0].created_at))
        .catch(error => console.log(error))
}
getLastCommit();