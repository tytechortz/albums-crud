const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const albumsController = require('./controllers/albums');

require('./db/db');

app.use(methodOverride('_method'));
app.use('/albums', albumsController);

app.get('/', (req, res) => {
    res.send('Albums Catalog')
});

app.listen(3000, () => {
    console.log('server on 3000')
});