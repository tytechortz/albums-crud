const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
    name: {type: String, required: true},
    artist: {type: String, required: true},
    year: Number,
    have: Boolean
});

module.exports = mongoose.model('Album', albumSchema);