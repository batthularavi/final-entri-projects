const express = require('express');
const app = express();

const questions = [
    {
        question: "how install python",
        votes: 2,
        slug: 'how  to install python ',
        views: 10,
        tag: "java,python,html"
    },
    {
        question: "how install java",
        votes: 2,
        slug: 'how  to install jav a ',
        views: 10,
        tag: "java,python,html"
    }
];
const users = [
    {
        name: "batthula ravi",
        flowers: 100000,
        location: "kamareddy"
    },
    {
        name: "batthula thulasi",
        flowers: 10000,
        location: "ongole"
    }
];
const companies = [
    {
        name: "Company A",
        employees: 100,
        location: "City X"
    },
    {
        name: "Company B",
        employees: 50,
        location: "City Y"
    }
];



app.get('/', (req, res) => {
    res.send("home");
});

app.get('/questions', (req, res) => {
    res.send(questions);
});

app.get('/questions/:slug', (req, res) => {
    const slug = req.params.slug;
    const question = questions.find((q) => q.question === slug);

    if (question) {
        res.send(question);
    } else {
        res.status(404).send("Question not found.");
    }
});

app.get('/users', (req, res) => {
    res.send(users);
});

app.get('/tags', (req, res) => {
    res.send("tags");
});

app.get('/job/companies', (req, res) => {
    res.send(companies);
});

app.listen(4546, () => {
    console.log('running');
});
