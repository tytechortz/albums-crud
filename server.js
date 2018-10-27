const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Albums Catalog')
});

app.listen(3000, () => {
    console.log('server on 3000')
});