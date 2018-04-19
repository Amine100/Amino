var compDAO = require('./companyDAO.js');


compDAO.delete('76', function(result){
    compDAO.insert({Comp_ID:'11',Comp_Name:'MIA',Comp_Tel:'019545121', Comp_Address: 'Limerick'},function(result){
        console.log("done?");
       // compDAO.changeEmail({username:'joe',password:'123',email:'hi dad'});

    })
})

compDAO.getAll(function(result){
    console.log(JSON.stringify(result));
})

compDAO.findByComp_ID('12',function(result){
    console.log(JSON.stringify(result));
})