var DAOHelper = require('./DAOHelper.js');

var compDAO={
    sqlGetAll: "select * from company;",
    sqlFindByComp_ID: "select * from company where Comp_ID = ?;",
    sqlInsert: "insert into company (Comp_ID, Comp_Name, Comp_Tel, Comp_Address) values (?,?,?,?);",
    sqlEdit: "update company set ? where Comp_ID = ?;",
    sqlDelete: "delete from company where Comp_ID =?;",


    getAll:function(callback) {
        DAOHelper.callSQL(this.sqlGetAll,[],"GetAll",callback);
    },
    findByComp_ID:function(Comp_ID,callback){
        DAOHelper.callSQL(this.sqlFindByComp_ID,[Comp_ID],"FindByComp_ID",callback);
    },
    insert:function(company,callback){
        DAOHelper.callSQL(this.sqlInsert,[company.Comp_ID, company.Comp_Name, company.Comp_Tel, company.Comp_Address],"insert",callback);
    },
    edit: function(company, callback){
        DAOHelper.callSQL(this.sqlEdit, [company, company.Comp_ID], 'update', callback);
    },
    delete:function(Comp_ID,callback){
        DAOHelper.callSQL(this.sqlDelete,[Comp_ID],"delete",callback);
    }


};

module.exports= compDAO;