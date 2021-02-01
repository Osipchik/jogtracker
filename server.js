const path = require('path');
const express = require('express');
const port = process.env.PORT || 8080;


const app = express();


app.use(express.static(path.join(__dirname, 'dist')));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port);