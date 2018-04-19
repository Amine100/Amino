var express = require('express');
var router = express.Router();
var locDAO = require('../../DAO/locationDAO');


router.get('/getAll', function(req, res) {
    locDAO.getAll(function(result){

        res.send(result);
    })

});

router.get('/findByBus_ID/:Bus_ID',function(req,res) {

    var bus_id = req.param("Bus_ID");
    var bus = locDAO.findByBus_ID(bus_id, function(result) {
        var location = result[0];
        if (location == undefined){
            res.render("noLocation");
        }
        console.log(JSON.stringify(location));
        res.render("editLocForm", {location: location});


    });
   // res.send('to be done 5');

});





router.get('/editLocForm/:Bus_ID',function(req,res) {
    var bus_id = req.param("Bus_ID");

    var location = locDAO.findByBus_ID(bus_id, function(result){
        var location = result[0];
        console.log(JSON.stringify(location));
        res.render("editLocForm", {location: location});

    });



});
router.post('/create', function(req,res){
    var location = req.body;
    locDAO.insert(location, function(result){
        res.redirect('/GetBus.html');
    })
});

router.get('/editUpdateLoc/:Bus_ID',function(req,res) {
    var bus_ID = req.param("Bus_ID");

    var location = locDAO.findByBus_ID(bus_ID, function(result){
        var location = result[0];
        if (location == undefined){
            res.render("noLocation");
        }
        console.log(JSON.stringify(location));
        res.render("editUpdateLoc", {location: location});

    });

});
router.post('/update', function(req,res){
    var location = req.body;

    console.log(JSON.stringify(location))
    locDAO.update(location, function(result){
        // res.send("done");
        res.redirect('/GetLoc.html');
    })
});


module.exports = router;