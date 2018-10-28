const express = require('express');
const router =  express.Router();
const methodOverride = require('method-override');
const mongoose = require('mongoose');

const Artists = require('../models/artists');

router.get('/', (req, res) => {
    Artists.find({}, (err, allArtists) => {
        if(err){
            console.log(err);
        } else {
            console.log(allArtists)
            res.render('./artists/index.ejs', {artists: allArtists});
        }
    });
 });


module.exports = router;