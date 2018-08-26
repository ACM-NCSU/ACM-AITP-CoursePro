'use strict';


/**
    Helper function to assist with creating DOM elements
**/
function createElement(e, attrs) {
    var element = document.createElement(e);

    for (let item of attrs) {
        element.setAttribute(item[0], item[1]);
    }
    return element;
}

module.exports.createElement = createElement;
