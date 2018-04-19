var DAOHelper = require('./DAOHelper.js');

var locationDAO={
    sqlGetAll: "select * from location;",
    sqlFindByLoc_ID: "select * from location where Loc_ID = ?;",
    sqlInsert: "insert into location ( Bus_ID, lat, longi) values (?,?,?);",
    sqlUpdate: "update location set ? where Bus_ID = ?;",
    sqlDelete: "delete from location where Loc_ID =?;",
    sqlFindByBus_ID: "select * from location where location.Bus_ID=? ORDER BY time DESC LIMIT 1; ",



    getAll:function(callback) {
        DAOHelper.callSQL(this.sqlGetAll,[],"GetAll",callback);
    },
    findByLoc_ID:function(Loc_ID,callback){
        DAOHelper.callSQL(this.sqlFindByLoc_ID,[Loc_ID],"FindByLoc_ID",callback);
    },
    insert:function(location,callback){
        DAOHelper.callSQL(this.sqlInsert,[location.Bus_ID, location.lat, location.longi],"insert",callback);
    },
    update: function(location, callback){
        DAOHelper.callSQL(this.sqlUpdate, [location, location.Bus_ID], 'update', callback);
    },

    delete:function(Loc_ID,callback){
        DAOHelper.callSQL(this.sqlDelete,[Loc_ID],"delete",callback);
    },
    findByBus_ID:function(Bus_ID,callback) {
        DAOHelper.callSQL(this.sqlFindByBus_ID, [Bus_ID], "FindByBus_ID", callback);
    }


};

module.exports= locationDAO;