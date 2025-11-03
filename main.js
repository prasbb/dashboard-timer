const {app, BrowserWindow} = require('electron');

function makeWindow() {
    const window = new BrowserWindow({
        width: 200, 
        height: 200, 
        backgroundColor: '#ffb7ce',
        alwaysOnTop: true,
    });
    window.loadFile('index.html');
}

app.whenReady().then(createWindow);