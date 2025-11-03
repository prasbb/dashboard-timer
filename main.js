const {app, BrowserWindow} = require('electron');

function makeWindow() {
    const window = new BrowserWindow({
        width: 300, 
        height: 200, 
        backgroundColor: '#ffb7ce',
        alwaysOnTop: true,
        resizable: false,
        frame: false,
        transparent: true
    });
    window.loadFile('index.html');
}

app.whenReady().then(makeWindow);