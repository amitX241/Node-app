const app = require('express')();

const PORT = 3000;

app.get('/', (req, res) => {
    console.log('HOME');
})

app.listen(PORT, () => {
    console.log('listening on port', PORT);
});