const mongoose = require('mongoose');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({

    username:{
        type: String,
        required: [true, 'Username is required'],
        validate:{
            validator: (username) => username.length > 4,
            message: 'Must be longer 4 characters'
        }
    },

    email:{
        type: String,
        unique: true,
        required: [true, 'Email is required']
    },

    hash:String,
    salt:String
});

userSchema.methods.setPwd = function(password) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto
        .pbkdf2Sync(password, this.salt, 1000, 64, 'sha512')
        .toString('hex');
    };

userSchema.methods.validatePwd = function(password) {
    const hash = crypto
        .pbkdf2Sync(password, this.salt, 1000, 64, 'sha512')
        .toString('hex');
    return this.hash == hash;
};

userSchema.methods.genJWT = function() {
    const exp = new Date();
    exp.setDate(exp.getDate() + 7);
    return jwt.sign({
        _id: this._id,
        email: this.email,
        username:this.username,
        exp: parseInt(exp.getTime() / 1000, 10),
    }, 'thisIsSecret');
    };

mongoose.model('User', userSchema); 