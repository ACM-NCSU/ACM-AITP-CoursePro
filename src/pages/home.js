'use strict';
/**
    This file will hold the JavaScript for creating/updating the home page

    The Element IDs are VERY IMPORTANT.  They pertain to naming conventions
    required to link the html/pug view pages to this JavaScript code.

**/

const path = require("path");
var common = require(path.resolve('src/common'));


function createHomePage(page) {
    // Create Side bar menu
    createHomeMenu(page);

    // Create Welcome Message (if main content gets too complicated,
    // move to separate fucntion)
    var main_div = document.getElementById(page + '-main');
    var welcome_div = common.createElement('div', [['align', 'center']]);
    var welcome_h3 = common.createElement('h3', []);
    var welcome_txt = document.createTextNode('Welcome to CoursePro');
        welcome_h3.appendChild(welcome_txt);

    welcome_div.appendChild(welcome_h3);
    main_div.appendChild(welcome_div);

}

function createHomeMenu(page) {
    // Set CoursePro title
    common.addSidebarTitle(page);
    var sidebar_top = document.getElementById(page + '-sidenav-top');

    let link_list = [['Notes', 'javascript:openNotes()']];
                      // ['Calendar', 'link'],
                      // ['Backup/Restore', 'link3']];

    for (let link of link_list) {
        var next = common.createElement('a', [['href', link[1]],
                                      ['class', 'item-sidenav sidenav-btn button']]);
        var next_txt = document.createTextNode(link[0]);
            next.appendChild(next_txt);

        sidebar_top.appendChild(next);
    }

    common.addSidebarSelectWS(page);
}

module.exports.createHomePage = createHomePage;
