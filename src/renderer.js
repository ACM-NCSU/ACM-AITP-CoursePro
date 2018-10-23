'use strict';
// This file hold functions run by the 'renderer' process
// All of the Node.js APIs are available in this process.
var ipcRenderer = require('electron').ipcRenderer;
const path = require("path");
var pages = require(path.resolve('src/pages/pages'));
var common = require(path.resolve('src/common'));
var db_utils = require(path.resolve('src/db/sqlite_utils'));
var db = db_utils.getDB();


function createPage(page, workspace) {
    if (page == 'Home') {
        pages.home.createHomePage(page, workspace);
    }
    else if (page == 'Notes') {
        pages.notes.createNotesPage(page, workspace);
    }
}

function setWorkspace(event) {
    event.preventDefault();

    let workspace = document.getElementById('workspace').value;
    db_utils.updateWorkspace(db, workspace);
    openHome(workspace);
}

function openHome(workspace) {
    ipcRenderer.send('show-home', workspace);
}

function openNotes(workspace) {
    ipcRenderer.send('show-notes', workspace);
}

function selectWS() {
    ipcRenderer.send('select-workspace');
}
