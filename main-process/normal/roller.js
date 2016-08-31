let itemStore = require('./item-store');
let peopleStore = require('./people-store');
const ipc = require('electron').ipcMain;
const dialog = require('electron').dialog;

let roll = function() {
    let item = itemStore.popItem();
    let people = peopleStore.popPeople();
    if (!item) {
        showDialogNoItem();
        return null;
    }
    return item['name'] + ' : ' + people['name'];
};

const optionsNoItem = {
    type: 'info',
    title: '不能再抽啦',
    message: "奖品已经抽完了",
    buttons: ['好的', '泥煤']
};

function showDialogNoItem() {
    dialog.showMessageBox(optionsNoItem, function(index) {
        //pass
    });
}

ipc.on('roll', function(event) {
    let result = roll();
    event.sender.send('roll-result', result);
});
