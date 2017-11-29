const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
const keygen = require('keygenerator');

function generateAPIKey() {
    return (keygen._({ length: 2 }) + '-' + keygen._({ length: 6 })
    + '-' + keygen.number()
    + '-' + keygen._({ length: 6 })
    + '-' + keygen._({ length: 8 })).replace(/&/g, '');
}

let photoScheme =  Schema ({
    Image: {
        type:Buffer,
    },
    key: {
        type: String,
        default: generateAPIKey
    },
    width: {
        type: Number,
    },
    height: {
        type: Number,
    }
});
module.exports = mongoose.model('photos',photoScheme);