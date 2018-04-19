var mysql = require('mysql');

var DAOHelper = {
    blah:'ee',
    getConnection: function() {
        return mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'amino',
        });
    },
    handleErrorandLog: function (err, name, result) {
        if (err) {
            console.log(err.sql);
            throw err;
        }
        console.log(name + ": " + JSON.stringify(result));
    },

    callSQL: function (sql, data, logInfo, callback) {
        var con = getConnection();
        con.connect(function (err) {
            if (err) throw err;
            con.query(sql, data, function (err, result) {
                handleErrorandLog(err, logInfo, result);
                if (callback) callback(result);
            });
        });
    }
}
function getConnection() {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'amino',
    });
}
function handleErrorandLog (err, name, result) {
    if (err) {
        console.log(err.sql);
        throw err;
    }
    console.log(name + ": " + JSON.stringify(result));
}

module.exports= DAOHelper;