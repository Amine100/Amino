var express = require('express');
var router = express.Router();
var compDAO = require('../../DAO/companyDAO');


router.get('/getAll', function(req, res) {
        compDAO.getAll(function(result){

            
        res.send(result);
    })

});

router.get('/findByComp_ID/:Comp_ID',function(req,res) {
    res.send('to be done 5');

});

router.delete('/:Comp_ID',function(req,res){
    console.log("in delete");
    var comp_id = req.param("Comp_ID");
    compDAO.delete(comp_id, function(result){
        res.send({success:true});
    })

});

router.post('/create', function(req,res){
    var company = req.body;
    compDAO.insert(company, function(result){
        res.redirect('GetComp.html');
    })
});

router.get('/editForm/:Comp_ID',function(req,res) {
    var comp_id = req.param("Comp_ID");

    var company = compDAO.findByComp_ID(comp_id, function(result){
        var company = result[0];
        console.log(JSON.stringify(company));
        res.render("editform", {company: company});

    });



});
router.post('/update', function(req,res){
    var company = req.body;
    console.log(JSON.stringify(company))
    compDAO.edit(company, function(result){
       // res.send("done");
        res.redirect('/GetComp.html');
    })
})

module.exports = router;