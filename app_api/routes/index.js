const express = require('express');
const router = express.Router();

const controlLocation = require('../controllers/locations');

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

module.exports = router;