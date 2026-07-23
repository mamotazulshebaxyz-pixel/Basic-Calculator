const { app, BrowserWindow } = require('electron');

function createWindow () {
  const win = new BrowserWindow({
    width: 360,
    height: 560,
    resizable: true,
    autoHideMenuBar: true,
    show: false, // প্রথমে হাইড থাকবে যেন অ্যাপ লোড হতে সময় নিলে খালি ফ্রেম না দেখায়
    webPreferences: {
      nodeIntegration: true
    }
  });

  win.loadFile('index.html');

  // কন্টেন্ট সম্পূর্ণ লোড হওয়ার পর অ্যাপ ওপেন হবে (স্মুথ স্টার্টআপের জন্য)
  win.once('ready-to-show', () => {
    win.show();
  });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
