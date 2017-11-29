/**
 * Created by hrayr on 11/28/2017.
 */
const express = require ('express');
const con = require('./../core/dbConnect');
const photoschema =  require('./Private/photoScheme');
const sizeof = require('image-size');
const base64image = require('base64-image');
const PicRouter = express.Router();
const multer  = require('multer');
const fs = require('fs');
const PhotoService = require('./Service');



let upload = multer({dest:'pics/'});
function base64(file) {
    let bitmap = fs.readFileSync(file);
    return new Buffer(bitmap).toString('base64');
}
PicRouter.post('/upload',upload.single('myfile'), function (req, res){

    let img = base64(req.file.path);
    let photos = {
        image: img,
    };

    PhotoService.insertPhotos(photos).then(data => {
        console.log(data);
        return res.send(data);
    });
    res.send('wow');

})
module.exports = PicRouter;

