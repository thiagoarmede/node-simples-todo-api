var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => { 
        res.send(doc);
    }, (error) => {
        res.status(400).send(error);
    });

    console.log(req.body);
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (error) => {
        res.status(400).send(e);
    })
})





app.listen(3000, () => {
    console.log('Started on port 3000');
});

// var usuario = new User({
//     email: '  thiagoarmede@gmail.com'
// });

// usuario.save().then((doc) => {
//     console.log('Saved user: ', doc);
// }, (error) => {
//     console.log('Error: ', error);
// });

