const express = require('express');

const app = express()

app.use((req, res, next) => {
    console.log('hiiiii');
    next();
})

app.get('/test', (req, res) => {
    res.send('testing');
})

app.listen(3000);
