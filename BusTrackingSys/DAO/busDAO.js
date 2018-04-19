var DAOHelper = require('./DAOHelper.js');

var busDAO={
    sqlGetAll: "select * from bus;",
    sqlFindByBus_ID: "select * from bus where Bus_ID = ?;",
    sqlInsert: "insert into bus (Bus_ID, Comp_Name, Reg_no) values (?,?,?);",
    sqlEdit: "update bus set ? where Bus_ID = ?;",
    sqlDelete: "delete from bus where Bus_ID =?;",
    sqlFindByComp_Name: "select * from bus where bus.Comp_Name = ?;",


    getAll:function(callback) {
        DAOHelper.callSQL(this.sqlGetAll,[],"GetAll",callback);
    },
    findByBus_ID:function(Bus_ID,callback){
        DAOHelper.callSQL(this.sqlFindByBus_ID,[Bus_ID],"FindByBus_ID",callback);
    },
    insert:function(bus,callback){
        DAOHelper.callSQL(this.sqlInsert,[bus.Bus_ID, bus.Comp_Name, bus.Reg_no],"insert",callback);
    },
    edit: function(bus, callback){
        DAOHelper.callSQL(this.sqlEdit, [bus, bus.Bus_ID], 'update', callback);
    },

    delete:function(Bus_ID,callback){
        DAOHelper.callSQL(this.sqlDelete,[Bus_ID],"delete",callback);
    },
    findByComp_Name:function(Comp_Name,callback){
        DAOHelper.callSQL(this.sqlFindByComp_Name,[Comp_Name],"FindByComp_Name",callback);
    },


};

module.exports= busDAO;