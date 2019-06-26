
/* GET 'home' page */
const homelist = (req, res) => {
    res.render('locations-view', { 
        
        title: 'Loc8r - find a place to work with wifi',
        pageHeader: {
            title: 'Loc8r',
            strapline:'Find places to work with wifi near you!'
        },
        locations : [{
            name: 'Starcups',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 3,
            facilities: ['Hot drinks', 'Food', 'Premium wifi'],
            distance: '100m'
          },{
            name: 'Cafe Hero',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 4,
            facilities: ['Hot drinks', 'Food', 'Premium wifi'],
            distance: '200m'
          },{
            name: 'Burger Queen',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 2,
            facilities: ['Food', 'Premium wifi'],
            distance:' 250'
          }]
        
    });
    };
    /* GET 'Location info' page */
    const locationInfo = (req, res) => {
    res.render('location-info', { 
        title: 'Location Info' });
    };
    /* GET 'Add review' page */
    const addReview = (req, res) => {
    res.render('review', { title: 'Add Review' });
    };

    module.exports = {
        homelist,
        locationInfo,
        addReview
        };