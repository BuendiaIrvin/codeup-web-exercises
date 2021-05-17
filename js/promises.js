fetch('https://api.github.com/users', {headers: {'Authorization': 'GITHUB_ACCESS_TOKEN'}})


fetch('https://api.github.com/users').then( response => {
    response.json().then(users => {


        // do something with the username login
        console.log(users);
    })

        .then(() => fetch('https://api.github.com/users/mojombo/events{/privacy}')).then(response => {
        response.json().then(repos => {

                console.log(repos)
        })
    })
})



var test = fetch("https://api.github.com/users/joshua-williams8/events", {
    headers: {'Authorization': GH_TOKEN}

}).then(function(data){
    console.log(data)
    return data.json()
}).then(function(data){
    console.log(data)
})