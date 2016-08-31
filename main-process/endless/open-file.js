const ipc = require('electron').ipcMain;
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
ipc.on('open-file-item', function(event) {
    dialog.showOpenDialog(options, function(files) {
        if (files) {
            event.sender.send('endless-selected-item', files[0]);
            itemStore.setItemsPath(files[0]);
        }
    })
});

ipc.on('open-file-people', function(event) {
    dialog.showOpenDialog(options, function(files) {
        if (files) {
            event.sender.send('endless-selected-people', files[0]);
            peopleStore.setPeoplePath(files[0]);
        }
    })
});
