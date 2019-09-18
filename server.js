const express = require('express');
const server = express();
server.use(express.static(__dirname + ''));

server.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

const port = 4000;
server.listen(port, () => {
    console.log(`Server listening at ${port}`);
});