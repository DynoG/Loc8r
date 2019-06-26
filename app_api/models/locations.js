const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true); // ensureIndex is deprecated ...

const locationSchema = new mongoose.Schema({

    name:{
        type:String,
        required: true,
        unique: true,
    },
    address:String,
    facilities:[String]

 });

module.exports = mongoose.model('Location', locationSchema);