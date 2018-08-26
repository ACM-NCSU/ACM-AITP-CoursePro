'use strict';
// This file hold functions run by the 'renderer' process
// All of the Node.js APIs are available in this process.
var ipcRenderer = require('electron').ipcRenderer;
const path = require("path");
var menus = require(path.resolve('src/menus'));
var common = require(path.resolve('src/common'));
var db_utils = require(path.resolve('src/db/sqlite_utils'));
var db = db_utils.getDB();

function createHomePage(page, workspace) {
    // Create Side bar menu
    createMenu(page);

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

function createNotesPage(page) {
    // Create Side bar menu
    createMenu(page);

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

function createMenu(page) {

    if (page == 'Home') {
        menus.createHomeMenu(page);
    }
    else if (page == 'Notes') {
        menus.createNotesMenu(page);
    }
}


function setWorkspace(event) {
    event.preventDefault();

    let workspace = document.getElementById('workspace').value;
    db_utils.updateWorkspace(db, workspace);
    ipcRenderer.send('show-home', workspace);
}

function openNotes() {
    ipcRenderer.send('show-notes');
}
