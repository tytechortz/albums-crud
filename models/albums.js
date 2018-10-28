const mongoose = require('mongoose');

const albumSchema = mongoose.Schema({
    name: {type: String, required: true},
    artist: {type: String, required: true},
    year: Number,
});

module.exports = mongoose.model('Album', albumSchema);