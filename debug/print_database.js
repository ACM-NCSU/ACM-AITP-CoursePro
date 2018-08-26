'use strict';


const path = require("path");
var db_utils = require(path.resolve('src/db/sqlite_utils'));
var db = db_utils.getDB();



let table = 'WORKSPACES';

let stmt = `UPDATE ${table} SET active=false`;
// db.run(stmt, function(error) {
//     console.log(error);
// });



db.get("select name from sqlite_master where type='table'", function (err, table) {
        console.log('---- begin tables ----');
        console.log(table);
        console.log('---- end tables ----');
});



db.get("select * from WORKSPACES", function (err, table) {
        console.log('---- begin workspaces ----');
        console.log(table);
        console.log('---- end workspaces ----');
});
