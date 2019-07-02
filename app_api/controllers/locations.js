const mongoose = require('mongoose');
const mod = mongoose.model('Locations');
mongoose.set('useFindAndModify', false);


// Location Controllers ...
const AllLoctions = (req, res) =>{
    mod.find({}, (err, location) =>{
            if (err) {
                res.status(400).json(err)
            }
            res.json(location);
        }) 

}
const CreateLocation = (req, res) =>{

    mod
        .create({
            name:req.body.name,
            address:req.body.address,
            facilities:req.body.facilities,
            // review:req.body.review
        }, (err, location) => {
                if (err) {
                    res
                        .status(400)
                        .json(err);
                } else {
                    res
                        .status(201)
                        .json(location);
                }

            })    
}
// Controller function {OneLocation} Find location By Id ...
const OneLocation = (req, res) =>{
    mod
        .findById(req.params.locationid)
        .exec((err, location) =>{
            if (!location) {
                return res
                    .status(404)
                    .json({"Output":"this location was not found"});
            }
            else if (err) {
                return res  
                    .status(404)
                    .json(err);
            }
            res
                .status(200)
                .json(location);
        });

}
const UpdateLocation = (req, res) =>{

    if (!req.params.locationid){
        return res
            .status(404)
            .json({"message": "Not found, locationid is required"});
    }
    mod
        .findById(req.params.locationid)
        .exec((err, location) =>{
            location.name = req.body.name;
            location.address = req.body.address;
            location.facilities = req.body.facilities;
            // location.review = req.body.review;
            location.save((err, mod) => {
                if (err) {
                    res
                        .status(404)
                        .json(err);
                } else {
                    res
                        .status(200)
                        .json(mod);
                }
            })
        });
       
}
const RemoveLoation = (req, res) =>{
    const {locationid} = req.params;
    if (locationid) {
        mod
            .findByIdAndRemove(locationid)
            .exec((err, location) => {
                if (err) {
                    return res 
                        .status(404)
                        .json(err);
                }  
                res
                    .status(204)
                    .json(null);
                
            });

} else {
    res
    .status(404)
    .json({"Output":"Location not found"});
}
}

module.exports = {
    AllLoctions,
    CreateLocation,
    OneLocation,
    UpdateLocation,
    RemoveLoation
}