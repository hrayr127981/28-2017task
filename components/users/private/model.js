/**
 * Created by hrayr on 11/23/2017.
 */
const mongoose = require('mongoose');
const Shema = mongoose.Schema;

let UsersShema = new Shema({
    username: {type:String},
    fullName:{type:String}
});
module.exports = mongoose.model('users',UsersShema);