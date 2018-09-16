'use strict';

/**
    This file holds functions and code related to working with the database.
**/
var path = require('path');
var sqlite3 = require('sqlite3');
var schema = require(path.resolve('./src/db/schema'));

const DB_URL = path.resolve(__dirname, ".data/coursepro.db");


/**
    Return an instance of the sqlite DB connection
**/
function getDB() {
      return new sqlite3.Database(DB_URL,
                                    sqlite3.OPEN_CREATE | sqlite3.OPEN_READWRITE,
        (err) => {
            if (err) {
              console.log('Failed to connect to the CoursePro database.');
              console.log(err);
            } else {
              console.log('Connected to the CoursePro database.');
            }
        }
      );
}


/**
    Determine if the Database has been initialized (do so if not).

    Check if a particular workspace was last used, if so use it.
    Otherwise return null to indicated the workspace must be specified.
**/
async function initialCheck(db) {

    // Check if table exists
    let table_chk = "SELECT name FROM sqlite_master WHERE type='table' AND name=?";
    let params = [schema.TABLE_NAMES.WORKSPACES];
    let result = null;
    try {
        result = await run_get(db, table_chk, params);
    } catch(error) {
        console.log(error);
        return null;
    }

    // If table exists
    if (typeof result != 'undefined' && result &&
       result.name == schema.TABLE_NAMES.WORKSPACES) {
        // Table defined, check for last workspace
        let ws_chk = "SELECT name FROM " + schema.TABLE_NAMES.WORKSPACES +
                     " WHERE last_used=true"
        let ws_result = null;
        try {
            ws_result = await run_get(db, ws_chk);
        } catch(error) {
            console.log(error);
            throw error;
        }

        console.log('last check result');
        console.log(ws_result);

        // If active workspace found, return it
        if (typeof ws_result != 'undefined' && ws_result && ws_result.name) {
            return ws_result.name;
        }
    } else {
        // No WORKSPACES table - Initialize DB
        loadSchema(db);
    }
    // No previous workspace set
    return null;
}


/**
    Add or update a workspace.
      Name of workspace, added if not already exists
      Active, and last_used state are updated to true
**/
async function updateWorkspace(db, name) {
    // First deactivate all workspaces
    deactivate_workspace(db);

    let table = schema.TABLE_NAMES.WORKSPACES;
    // Insert new workspace if doesn't exist, otherwise update fields
    let stmt = `INSERT OR REPLACE INTO ${table} (name, active, last_used) ` +
               `VALUES ( COALESCE(` +
                           `(SELECT name FROM ${table} WHERE name=\'${name}\'), ` +
                           ` \'${name}\'), ` +
                         `true, true);`;
    try {
        await run_cmd(db, stmt);
    } catch(error) {
        console.log(error);
        throw error;
    }
}


async function get_active_workspace(db) {
    // Table defined, check for last workspace
    let ws_chk = "SELECT name FROM " + schema.TABLE_NAMES.WORKSPACES +
                 " WHERE active=true"
    let ws_result = null;
    try {
        ws_result = await run_get(db, ws_chk);
    } catch(error) {
        console.log(error);
        throw error;
    }

    console.log('last check result');
    console.log(ws_result);

    // If active workspace found, return it
    if (typeof ws_result != 'undefined' && ws_result && ws_result.name) {
        return ws_result.name;
    }
}

/**
    Set the all active workspaces to false upon exit.

    Used for more than just app close
**/
async function deactivate_workspace(db) {
    let table = schema.TABLE_NAMES.WORKSPACES;
    // Set active workspace to false for all
    let stmt = `UPDATE ${table} SET active=false`;
    try {
        await run_cmd(db, stmt);
    } catch(error) {
        console.log(error);
        throw error;
    }
}

/**
    Set the all active workspaces to false upon exit.
    Then close DB
**/
function deactivate(db) {
    try {
        deactivate_workspace(db);
        db.close();
    } catch(error) {
        console.log(error);
        throw error;
    }
}


/**
    Wrapper around the sqlite.Database.get() function
    For the purpose of being able to 'await' the returned promise
**/
function run_get(db, query, query_params=null) {
    return new Promise(function(resolve, reject) {
          // With query params
          if (query_params) {
              db.get(query, query_params, (err, row) => {
                  if (err) {
                    reject(err);
                  } else {
                    resolve(row);
                  }
              });
          }
          else {
              db.get(query, (err, row) => {
                  if (err) {
                    reject(err);
                  } else {
                    resolve(row);
                  }
              });
          }
    });
}


/**
    Wrapper around the sqlite.Database.run() function
    For the purpose of being able to 'await' the returned promise
**/
function run_cmd(db, cmd) {
    return new Promise(function(resolve, reject) {
          db.run(cmd, (err) => {
              if (err) {
                reject(err);
              } else {
                resolve();
              }
          });
    });
}

/**
    Initialize the database (tables, etc)
**/
async function loadSchema(db) {
    await run_cmd(db, schema.TABLE_DEFS.WORKSPACES);
    await run_cmd(db, schema.TABLE_DEFS.NOTES);
}

// Export function needed by external files
module.exports.getDB = getDB;
module.exports.loadSchema = loadSchema;
module.exports.initialCheck = initialCheck;
module.exports.updateWorkspace = updateWorkspace;
module.exports.deactivate = deactivate;
