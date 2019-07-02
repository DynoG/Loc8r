const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true); // ensureIndex is deprecated ...


const locationSchema = new mongoose.Schema({

    name:{
        type:String,
        required: [true, 'Name is required']
    },
    rating: {
        type: Number,
        'default': 0,
        min: 0,
        max: 5
      },
    address:String,
    facilities:[String],
    // review:[{
    //     author: String,
    //     rating: {
    //         type: Number,
    //         default:0,
    //         min: 0,
    //         max: 5
    //     },
    //     reviewText: String,
    //     createdOn: {
    //         type: Date,
    //         'default': Date.now
    //     }
    //     }]

 });
mongoose.model('Locations', locationSchema); 