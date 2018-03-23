const express = require('express');

const PORT = 8080;

const app = express();

app.get('/', (req, res) => {
    res.send('Hello Fred and Docker!');
});

app.listen(3000, () => {
    console.log('Server up!');
});
