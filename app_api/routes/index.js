const express = require('express');
const router = express.Router();
const jwt = require('express-jwt');

const controlLocation = require('../controllers/locations');
// const controlReview = require('../controllers/reviews');
const ctrlAuth = require('../controllers/authentication');

const auth = jwt({
    secret: 'secretword',
    userProperty: 'payload'
    });


// Defining Locations Routes ... 
router
    .route('/locations')
    .get(controlLocation.AllLoctions)
    .post(auth, controlLocation.CreateLocation);

router
    .route('/locations/:locationid')
    .get(controlLocation.OneLocation)
    .put(controlLocation.UpdateLocation)
    .delete(controlLocation.RemoveLoation)
// // Reviews Routes ...
// router
//     .route('/locations/:locationid/reviews')
//     .post(controlReview.CreateReview);

// router  
//     .route('/locations/:locationid/reviews/:reviewid')
//     .get(controlReview.AllReviews)
//     .put(controlReview.UpdateReiew)
//     .delete(controlReview.RemoveReview);

//  Auth routes 
router  
    .post('/register', ctrlAuth.register)
    .post('/login', ctrlAuth.login)
module.exports = router;