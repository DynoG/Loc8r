const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('User');

//  Register controller 
const register = (req, res) => {
    if( !req.body.name || !req.body.email || !req.body.password) {
        return res.status(400).json({"message": "All fields are required"});
    }

    const user = new User();
    user.name = req.body.name;
    user.email = req.body.email;
    user.setPwd(req.body.password);
    user.save((err) => {
        if (err) {
            res.status(404).json(err);
        } else {
            const token = user.genJWT();
            res.status(200).json({"token":token});
        }
    });
}

// Login Controller ...
const login = (req, res) => {
    if (!req.body.email || !req.body.password) {
        return res.status(400).json({"message": "All fields are required"});
    }

    passport.authenticate('local', (err, user, info) => {
        let token;
        if (err) {
            return res.status(404).json(err);
        }
        if (user) {
            token = user.genJWT();
            res.status(200).json({"token": token});
        } else {
            res.status(401).json(info);
        }

    })(req, res);
};

module.exports = {
    register,
    login
}