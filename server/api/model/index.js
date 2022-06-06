const mongoose = require('mongoose');
const listData = mongoose.Schema({
    name: String,
    img: Array 
})
module.exports = mongoose.model('listData',listData)