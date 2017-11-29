const mongoose = require('mongoose');
require('./model');
const BaseDao = require('./../../core/base-dao.js');
class Usersdao extends BaseDao{
    constructor(){
        let usersCollection = mongoose.model('users');
        super(usersCollection);
    }
}
module.exports = new Usersdao();