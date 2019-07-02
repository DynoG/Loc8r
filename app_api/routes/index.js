const express = require('express');
const router = express.Router();

const controlLocation = require('../controllers/locations');
// const controlReview = require('../controllers/reviews');

// Defining Locations Routes ... 
router
    .route('/locations')
    .get(controlLocation.AllLoctions)
    .post(controlLocation.CreateLocation);

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
module.exports = router;