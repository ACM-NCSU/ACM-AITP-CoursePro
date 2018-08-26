'use strict';
/**
    This file will hold the JavaScript for creating/updating the sidebar (or whatever)
    menu is needed for varous pages in the application.

    The Element IDs are VERY IMPORTANT.  They pertain to naming conventions
    required to link the html/pug view pages to this JavaScript code.

    As of now there is only the Home Menu, but could be for accessing Notes
    and other features based on the page. Or based on what is clicked in the
    menu (e.g. a nest file tree type of sidebar)
**/

const path = require("path");
var common = require(path.resolve('src/common'));

function createHomeMenu(page) {
    var sidebar_div = document.getElementById(page + '-sidenav');
    var title = common.createElement('a', [['href', ''],
                                    ['class', 'title-sidenav sidenav-btn button']]);
    var title_txt = document.createTextNode('CoursePro');
        title.appendChild(title_txt);

    sidebar_div.appendChild(title);
    sidebar_div.appendChild(document.createElement('br'));

    let list_items = [['Calendar', 'link'],
                      ['Notes', 'javascript:openNotes()'],
                      ['Backup/Restore', 'link3']];

    for (let item of list_items) {
        var next = common.createElement('a', [['href', item[1]],
                                      ['class', 'item-sidenav sidenav-btn button']]);
        var next_txt = document.createTextNode(item[0]);
            next.appendChild(next_txt);

        sidebar_div.appendChild(next);
    }

    var selectWS = common.createElement('input', [['type', 'button'],
                                        ['Value', 'Select Workspace'],
                                        ['class', 'selectWS-btn']]);
    sidebar_div.appendChild(selectWS);
    // As a reference, the JavaScript above is...
    // Essentially creating the following html
    //- <a class="title-sidenav sidenav-btn button", href='none'>CoursePro</a>
    //- </br>
    //- <a class="item-sidenav sidenav-btn button", href='none'>Calendar</a>
    //  :  :
    //  :  :
}

function createNotesMenu(page) {

}

module.exports.createHomeMenu = createHomeMenu;
module.exports.createNotesMenu = createNotesMenu;
