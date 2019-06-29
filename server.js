const express = require('express');


const PORT = 8080;

const app = express();

app.get('/', (req, res) => {
    res.send('Hello Docker!');
});



app.listen(PORT, () => {
    console.log('Server up!');
});
