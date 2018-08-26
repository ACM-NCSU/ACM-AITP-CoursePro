'use strict';

// Table Names
var TABLE_NAMES = {WORKSPACES: 'WORKSPACES'};

// Table Definitions (command used to create table)
var WORKSPACES_DEF = "CREATE TABLE IF NOT EXISTS " + TABLE_NAMES.WORKSPACES +
                     " ( name        text         PRIMARY KEY, " +
                     "   active      boolean      DEFAULT false," +
                     "   last_used   boolean      DEFAULT false);";


var TABLE_DEFS = {WORKSPACES: WORKSPACES_DEF};


module.exports.TABLE_NAMES = TABLE_NAMES;
module.exports.TABLE_DEFS = TABLE_DEFS;
