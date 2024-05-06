const { app, BrowserWindow } = require('electron/main')
const {writeFile, readFile} = require("fs");
const path = "user-data.json";

const createWindow = () => {
    const win = new BrowserWindow({
    width: 800,
    height: 600
    })

    win.loadFile('nameInput.html')
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    })
})

app.on('close-app', function () {
    app.quit();
});