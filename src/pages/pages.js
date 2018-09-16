'use strict';
/**
    This file will hold the JavaScript for requiring all of the modules needed
    for all pages.
**/

const path = require("path");

module.exports = {

    home: require(path.resolve('src/pages/home')),
    notes: require(path.resolve('src/pages/notes'))
};
