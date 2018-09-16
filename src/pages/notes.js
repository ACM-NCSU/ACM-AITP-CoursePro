'use strict';
/**
    This file will hold the JavaScript for creating/updating the notes page

    The Element IDs are VERY IMPORTANT.  They pertain to naming conventions
    required to link the html/pug view pages to this JavaScript code.

**/

const path = require("path");
var common = require(path.resolve('src/common'));

function createNotesPage(page) {
    // Create Side bar menu
    createNotesMenu(page);

    // Create Welcome Message (if main content gets too complicated,
    // move to separate fucntion)
    var main_div = document.getElementById(page + '-main');
    var welcome_div = common.createElement('div', [['align', 'center']]);
    var welcome_h3 = common.createElement('h3', []);
    var welcome_txt = document.createTextNode('Types notes in text area and save!');
        welcome_h3.appendChild(welcome_txt);
    var notes_in = common.createElement('textarea', []);

    welcome_div.appendChild(welcome_h3);
    welcome_div.appendChild(notes_in);
    main_div.appendChild(welcome_div);

}

function createNotesMenu(page) {
    // Set CoursePro title
    common.addSidebarTitle(page);

    // Can uncomment when there is something to put

    // let link_list = [['Notes', 'javascript:openNotes()']];
    //                   // ['Calendar', 'link'],
    //                   // ['Backup/Restore', 'link3']];
    //
    // for (let link of link_list) {
    //     var next = common.createElement('a', [['href', link[1]],
    //                                   ['class', 'item-sidenav sidenav-btn button']]);
    //     var next_txt = document.createTextNode(link[0]);
    //         next.appendChild(next_txt);
    //
    //     sidebar_top.appendChild(next);
    // }


    common.addSidebarSelectWS(page);
}

module.exports.createNotesPage = createNotesPage;
