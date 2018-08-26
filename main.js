const electron = require('electron')
const ipcMain = electron.ipcMain;
// Module to control application life.
const app = electron.app
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow

const path = require('path')
const url = require('url')
const setupPug = require('electron-pug')
const db_utils = require(path.resolve('./src/db/sqlite_utils'))
var db = db_utils.getDB();

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow
const locals = { homePage: 'Home',
                 notesPage: 'Notes'};


/*******************************************************************
    APP FUNCTIONS SECTION
    Here the MainWindow is accessible and can be manipulated.
    Below are functions which load pug files and kick off
    renderer processes.
********************************************************************/

async function createWindow () {

    // Setup app to use pug view engine
    try {
      let pug = await setupPug({pretty: true}, locals)
      pug.on('error', err => console.error('electron-pug error', err))
    } catch (err) {
      // Could not initiate 'electron-pug'
    }
    // Create the browser window.
    mainWindow = new BrowserWindow({width: 800, height: 600})

    // Check DB for existing workspace/initialize database
    let last_workspace = null;
    try {
        last_workspace = await db_utils.initialCheck(db);
    } catch (error) {
        console.log('error in main');
        console.log(error);
        throw error;
    }

    console.log('last');
    console.log(last_workspace);

    if (last_workspace != null) {
        loadHome(last_workspace);
        await db_utils.updateWorkspace(db, last_workspace);
    }
    else {
        loadSelectWS();
    }

    mainWindow.show();

    // Open the DevTools.
    // mainWindow.webContents.openDevTools()

    // Emitted when the window is closed.
    mainWindow.on('closed', function () {
      // Dereference the window object, usually you would store windows
      // in an array if your app supports multi windows, this is the time
      // when you should delete the corresponding element.
      mainWindow = null
    })
}

// load 'select workspace' page
function loadSelectWS() {
    mainWindow.loadURL(url.format({
      pathname: path.join(__dirname, 'views/login.pug'),
      protocol: 'file:',
      slashes: true
    }))
}

function loadHome(workspace) {
    mainWindow.loadURL(url.format({
      pathname: path.join(__dirname, 'views/home.pug'),
      protocol: 'file:',
      slashes: true
    }))

    mainWindow.webContents.executeJavaScript(`createHomePage(\'Home\', \'${workspace}\')`);
}

function loadNotes() {
    mainWindow.loadURL(url.format({
      pathname: path.join(__dirname, 'views/notes.pug'),
      protocol: 'file:',
      slashes: true
    }))

    mainWindow.webContents.executeJavaScript(`createNotesPage(\'Notes\')`);
}


/*******************************************************************
    IPC MAIN SECTION
    Functions called when renderer process emits appropriate event
    Here is where communication between the main and renderer process
    is handled
********************************************************************/

/**
    Called when "next" button is clicked after selecting workspace
**/
ipcMain.on('show-home', function(event, workspace) {
    loadHome(workspace);
});

/**
    Called when "notes" button is clicked on home sidebar
**/
ipcMain.on('show-notes', function(event) {
    loadNotes();
});




/*******************************************************************
    APP SETTINGS SECTION
    Set what happends when certain global App events are emitted
********************************************************************/

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {

  db_utils.deactivate(db);

  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})
