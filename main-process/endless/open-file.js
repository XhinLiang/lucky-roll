const ipc = require('electron').ipcMain;
// require the main-process dialog service
const dialog = require('electron').dialog;

const itemStore = require('./item-store');
const peopleStore = require('./people-store');

const options = {
    properties: ['openFile'],
    filters: [{
        name: 'JSON',
        extensions: ['json']
    }]
};

ipc.on('wwwwww', function(event) {
    dialog.showOpenDialog(options, function(files) {
        if (files) {
            event.sender.send('wsdvwsefw', files[0]);
            itemStore.setItemsPath(files[0]);
        }
    })
});

ipc.on('wwwwwwwww', function(event) {
    dialog.showOpenDialog(options, function(files) {
        if (files) {
            event.sender.send('wefewfewf', files[0]);
            peopleStore.setPeoplePath(files[0]);
        }
    })
});
