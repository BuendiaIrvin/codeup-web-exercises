function gitHubUsername (userName) {
    fetch(`https://api.github.com/users/${userName}/events`, {headers: {'Authorization': 'GITHUB_ACCESS_TOKEN'}})
        .then(resp => resp.json())
        .then(data => {
            console.log(data);
            let lastPush;
            for (let event of data) {
                if (event.type === "PushEvent") {
                    lastPush = new Date(event.created_at);
                    break;
                }
            }
            console.log(lastPush);
        });
}

//         .then(response => response.json()
//         .then(data => {
//             console.log(data);
//             let latestPush = data[0].created_at
//             let date = new Date(latestPush);
//             console.log(date.toString())
//
//         }))
// }
gitHubUsername('BuendiaIrvin')



// function wait(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }
// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));


// const wait = ms => {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }
// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

const wait = ms => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`You'll see this after ${ms/1000} seconds`);
        }, ms);
    })
}
wait(1000).then(message => console.log(message));
wait(3000).then((message) => console.log(message));
wait(5000).then((message) => console.log(message));
