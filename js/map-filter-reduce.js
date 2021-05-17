

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];


let moreLang = [];
for (let i = 0; i < users.length; i++) {
    if (users[i].languages.length >= 3) {
        moreLang.push(users[i]);
    }
}
console.log(moreLang);

let userEmails = [];
for (let i = 0; i < users.length; i++) {
    userEmails.push(users[i].email)
}
console.log(userEmails);



let totalYears = [];
for (let i = 0; i < users.length; i++) {
    totalYears.push(users[i].yearsOfExperience)
}
total = totalYears.reduce((a, b) => a + b, 0);
console.log(total);
avg = total/users.length
console.log(avg);


let emails = [];
for (let i = 0; i < users.length; i++) {
    emails.push(users[i].email)
}
    var longestWord = emails.reduce(function (longest, currentWord) {
        if (currentWord.length > longest.length)
            return currentWord;
        else
            return longest;
    }, "");
    console.log(longestWord)


let userNames = [];
for (let i = 0; i < users.length; i++) {
    userNames.push(users[i].name)
}
var result = userNames.reduce(function (name, val, index) {
    var comma = userNames.length ? ", " : "";
    return "The users are " + userNames + comma + val;
}, '');
console.log(result);