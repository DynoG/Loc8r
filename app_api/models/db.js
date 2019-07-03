const mongoose = require('mongoose');
const dbURI = 'mongodb://localhost/db_one';

mongoose.connect(dbURI, {useNewUrlParser: true});

// Monitor Connection State ...
mongoose.connection.on('connected', () =>{

    console.log('Successfully Connected to', dbURI);
});

mongoose.connection.on('error', err => {
    
    console.log('DB Connection error:', err);
});

mongoose.connection.on('disconnected', () => {
    
    console.log('Mongoose disconnected');
});

require('./locations');
require('./users');