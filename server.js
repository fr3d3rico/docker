const express = require('express');
const mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});
const Cat = mongoose.model('Cat', { name: String });

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback() {
  console.log("h");
});

const PORT = 8080;

const app = express();

app.get('/', (req, res) => {
    res.send('Hello Docker!');
});

app.get('/save', (req, res) => {
    
    const kitty = new Cat({ name: 'Zildjian' });
    kitty.save().then(() => console.log('meow'));

    res.send('Cat saved!');
});

app.get('/list', (req, res) => {

    Cat.find(function (err, kittens) {
        if (err) return res.send(err);
        res.send(kittens);
    })
    
});

app.listen(PORT, () => {
    console.log('Server up!');
});
