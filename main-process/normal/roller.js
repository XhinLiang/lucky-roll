let itemStore = require('./item-store');
let peopleStore = require('./people-store');
const ipc = require('electron').ipcMain;
const dialog = require('electron').dialog;

let roll = function() {
    // 从奖品中抽取一个作为奖品
    let item = itemStore.popItem();
    // 从抽奖人员中抽取一个作为中奖的幸运儿
    let people = peopleStore.popPeople();
    if (!item) {
        showDialogNoItem();
        return null;
    }
    if (!people) {
        showDialogNoPeople();
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

const optionsNoPeople = {
    type: 'info',
    title: '不能再抽啦',
    message: "没有参与抽奖的人呀",
    buttons: ['好的', '泥煤']
};

function showDialogNoPeople() {
    dialog.showMessageBox(optionsNoPeople, function(index) {
        //pass
    });
}

function showDialogNoItem() {
    dialog.showMessageBox(optionsNoItem, function(index) {
        //pass
    });
}

ipc.on('roll', function(event) {
    let result = roll();
    event.sender.send('roll-result', result);
});
