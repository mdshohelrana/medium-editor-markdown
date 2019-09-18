"use strict";

const express = require('express');
const app = express();

app.use(express.static(__dirname + ''));

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(process.env.PORT || 4000, function () {
    console.log("Express app listening");
});