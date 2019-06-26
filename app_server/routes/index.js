var express = require('express');
var router = express.Router();
const locationsController = require('../controllers/locations');
const othersController = require('../controllers/others');

/* Locations pages */
router.get('/', locationsController.homelist);
router.get('/locations', locationsController.locationInfo);
router.get('/locations/review/new', locationsController.addReview);

/* Other Pages. */
router.get('/about', othersController.about);

module.exports = router;
