const express = require('express');
const app = express();
const notes = [{
    noteInput: 1,
    noteText: "Input text here",
}];

app.get("/", (req, res) => {
    res.send("test", {
        data: notes
    });
});

app.get('/', (req, res) => {
    res.sendFile('./public/notes.html');
});

app.get('/', (req, res) => {
    res.sendFile('./public/index.html');
});

app.listen(3001, () => {
    console.log('server test');
})


