const { app, BrowserWindow } = require('electron');

function createWindow () {
  const win = new BrowserWindow({
    width: 360,
    height: 560,
    resizable: false,
    autoHideMenuBar: true
  });

  win.loadFile('index.html');
}

app.whenReady().then(createWindow);
