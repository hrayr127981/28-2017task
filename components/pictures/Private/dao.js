const mongoose = require('mongoose');
require('./photoScheme');
const BaseDao = require('./../../core/base-dao');
const Conn = require('./../../core/dbConnect');

class PhotosDao extends BaseDao {
    constructor() {
        super(Conn.model('photos'));
    }
}

module.exports = new PhotosDao();