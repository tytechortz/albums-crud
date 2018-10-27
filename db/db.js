const mongoose = require('mongoose');
const connectionString = 'mongodb://localhost/albums';

mongoose.connect(connectionString, {useNewUrlParser: true});

mongoose.connection.on('conected', () => {
    console.log(`mongoose connected to ${connectionString}`);
});

mongoose.connection.on('disconnected', () => {
    console.log('mongoose disconected');
});

mongoose.connection.on('error', (err) => {
    console.log('mongoose error: ', err);
});
