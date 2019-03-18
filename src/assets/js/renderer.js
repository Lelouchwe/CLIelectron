// import { remote, ipcRenderer } from "electron";

const {remote} = require('electron')

document.getElementById('minimize-button').addEventListener('click', () => {
    remote.getCurrentWindow().minimize()
})
document.getElementById('minmax-button').addEventListener('click', () => {
    const CurrentWindow = remote.getCurrentWindow()
    if (CurrentWindow.isMaximized()) {
        CurrentWindow.unmaximize()
    } else {
        CurrentWindow.maximize()
    }
})
document.getElementById('close-button').addEventListener('click', () => {
    remote.app.quit()
})