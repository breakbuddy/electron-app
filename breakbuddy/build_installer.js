const { MSICreator } = require('electron-wix-msi');
const path = require('path');

const APP_DIR = path.resolve(__dirname, './breakbuddy-win32-x64');
const OUT_DIR = path.resolve(__dirname, './windows_installer');

const msiCreator = new MSICreator({
    appDirectory: APP_DIR,
    outputDirectory: OUT_DIR,

    description: 'This is the BreakBuddy desktop application',
    exe: 'BreakBuddy',
    name: 'BreakBuddy Desktop App',
    manufacturer: 'Hursit Tarcan',
    version: '1.0.0',
    appIconPath: path.resolve(__dirname,'./logo.ico'),
    ui: { chooseDirectory: true }
});

msiCreator.create().then(function(){
    msiCreator.compile();
});