const PhotosDao = require('./Private/dao');

class PhotosService {

    insertPhotos(photos) {
        return new Promise((resolve, reject) => {
           return PhotosDao.insertData(photos).then(data => {
                resolve(data);
            }).catch(err => {
                reject(err);
            })
        })
    }
}


module.exports =  new PhotosService();