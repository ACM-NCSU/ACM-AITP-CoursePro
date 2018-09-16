'use strict';
// This file hold functions run by the 'renderer' process
// All of the Node.js APIs are available in this process.
var ipcRenderer = require('electron').ipcRenderer;
const path = require("path");
var pages = require(path.resolve('src/pages/pages'));
var common = require(path.resolve('src/common'));
var db_utils = require(path.resolve('src/db/sqlite_utils'));
var db = db_utils.getDB();


function createPage(page, workspace=null) {
    if (page == 'Home') {
        pages.home.createHomePage(page, workspace);
    }
    else if (page == 'Notes') {
        pages.notes.createNotesPage(page);
    }
}

function setWorkspace(event) {
    event.preventDefault();

    let workspace = document.getElementById('workspace').value;
    db_utils.updateWorkspace(db, workspace);
    openHome();
}

function openHome() {
    ipcRenderer.send('show-home');
}

function openNotes() {
    ipcRenderer.send('show-notes');
}

function selectWS() {
    ipcRenderer.send('select-workspace');
}
