const path = require('path');
const glob = require('glob');
const electron = require('electron');
const BrowserWindow = electron.BrowserWindow;
const app = electron.app;

const debug = /--debug/.test(process.argv[2]);

if (process.mas) {
    app.setName('Lucky Roll');
}

let mainWindow = null;

function initialize() {
    let shouldQuit = makeSingleInstance();
    if (shouldQuit) {
        return app.quit();
    }
    // load files
    var files = glob.sync(path.join(__dirname, 'main-process/**/*.js'));
    files.forEach(function(file) {
        require(file);
    })

    function createWindow() {
        let windowOptions = {
            width: 1080,
            minWidth: 680,
            height: 840,
            title: app.getName()
        };

        if (process.platform === 'linux') {
            windowOptions.icon = path.join(__dirname, '/assets/app-icon/png/512.png');
        }

        mainWindow = new BrowserWindow(windowOptions);
        mainWindow.loadURL(path.join('file://', __dirname, '/index.html'));

        // Launch fullscreen with DevTools open, usage: npm run debug
        if (debug) {
            mainWindow.webContents.openDevTools();
            mainWindow.maximize();
        }

        mainWindow.on('closed', function() {
            mainWindow = null;
        })
    }

    app.on('ready', function() {
        createWindow();
    })

    app.on('window-all-closed', function() {
        if (process.platform !== 'darwin') {
            app.quit();
        }
    });

    app.on('window-all-closed', function() {
        console.log('hehe');
    });

    app.on('activate', function() {
        if (mainWindow === null) {
            createWindow();
        }
    });
}

// Make this app a single instance app.
//
// The main window will be restored and focused instead of a second window
// opened when a person attempts to launch a second instance.
//
// Returns true if the current version of the app should quit instead of
// launching.
function makeSingleInstance() {
    if (process.mas) {
        return false;
    }

    return app.makeSingleInstance(function() {
        if (mainWindow) {
            if (mainWindow.isMinimized()) mainWindow.restore()
            mainWindow.focus();
        }
    });
}

// 在这里添加一些运行的参数
switch (process.argv[1]) {
    case '--prod':
    case '--test':
        break;
    default:
        initialize();
}
