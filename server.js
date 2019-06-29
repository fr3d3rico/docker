const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://silly_einstein:27017/test', {useNewUrlParser: true});

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback() {
  console.log("h");
});

var catSchema = new mongoose.Schema({
    name: String
});

const Cat = mongoose.model('Cat', catSchema);

const PORT = 8080;

const app = express();

app.get('/', (req, res) => {
    res.send('Hello Docker!(silly_einstein)');
});

app.get('/save', (req, res) => {
    
    const kitty = new Cat({ name: 'Zildjian' });
    kitty.save((err, cat) => {
      if(err) return res.send(err);
      res.send(cat);
    });

    
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
