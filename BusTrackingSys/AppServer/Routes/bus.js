var express = require('express');
var router = express.Router();
var busDAO = require('../../DAO/busDAO');


router.get('/getAll', function(req, res) {
    busDAO.getAll(function(result){


        res.send(result);
    })

});

router.get('/findByBus_ID/:Bus_ID',function(req,res) {

    var bus_id = req.param("Bus_ID");
    var bus = busDAO.findByBus_ID(bus_id, function(result) {
        var bus = result[0];
        console.log(JSON.stringify(bus));
        res.render("editBusForm", {bus: bus});


    });
});

router.delete('/:Bus_ID',function(req,res) {

    var bus_id = req.param("Bus_ID");
    busDAO.delete(bus_id, function (result) {
        res.send({success: true});

    });
});

router.post('/create', function(req,res){
    var bus = req.body;
    busDAO.insert(bus, function(result){
        res.redirect('GetBus.html');
    })
});

router.get('/editBusForm/:Bus_ID',function(req,res) {
    var bus_id = req.param("Bus_ID");

    var bus = busDAO.findByBus_ID(bus_id, function(result){
        var bus = result[0];
        console.log(JSON.stringify(bus));
        res.render("editBusForm", {bus: bus});

    });

});

router.post('/update', function(req,res){
    var bus = req.body;
    busDAO.update(bus, function(result){
        res.redirect('/GetBus.html');
    })
})

module.exports = router;