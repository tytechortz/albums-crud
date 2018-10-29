const express = require('express');
const router =  express.Router();
const methodOverride = require('method-override');
const mongoose = require('mongoose');

const Albums = require('../models/albums');

router.get('/', (req, res) => {
   Albums.find({}, (err, allAlbums) => {
       if(err){
           console.log(err);
       } else {
           console.log(allAlbums)
           res.render('./albums/index.ejs', {albums: allAlbums});
       }
   });
});

router.post('/', (req, res) => {
    Albums.create(req.body, (err, createdAlbum) => {
        if(err){
            console.log(err)
        } else {
            console.log(createdAlbum);
            res.redirect('/albums')
        }
    });
});
    // const album = new Albums({
    //     name: req.body.name,
    //     artist: req.body.artist,
    //     year: req.body.year
    // });
//     album.save().then(result => {
//         console.log(result);
//     });
//     res.status(201).json({
//         message: 'Handling post requests',
//         createdAlbum: albums
//     });
// });

router.get('/new', (req, res) => {
    res.render('albums/new.ejs');
});

router.get('/:albumId', (req, res) => {
    Albums.findById(req.params.albumId, (err, foundAlbum) => {
        res.render('albums/show.ejs', {
            album: foundAlbum
        });
    });
});

router.put('/:albumId', (req, res) => {
    res.send('updated album');
});

router.delete('/:albumId', (req, res) => {
    res.send('deleted album');
});

// router.post('/', (req, res) => {
//     const album = new Albums({
//         _id: new mongoose.Types.ObjectId(),
//         name: req.body.name,
//         artist: req.body.artist,
//         year: req.body.year,
//     });
//     album.save()
// });

module.exports = router;