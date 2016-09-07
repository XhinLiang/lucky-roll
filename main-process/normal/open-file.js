// 主进程的ipc
const ipc = require('electron').ipcMain;
// 要使用对话框首先需要使用 electron 封装好的对象
const dialog = require('electron').dialog;

const itemStore = require('./item-store');
const peopleStore = require('./people-store');

// 在本项目中通用的配置
const options = {
    properties: ['openFile'],
    filters: [{
        name: 'JSON',
        extensions: ['json']
    }]
};

// 接收到渲染进程的对话框请求，生成一个对话框并显示
ipc.on('open-file-item', function(event) {
    dialog.showOpenDialog(options, function(files) {
        // 拿到了文件，取出第一个，其实叶只有第一个
        if (files) {
            // 给渲染进程发送事件，告知文件的绝对路径
            event.sender.send('selected-item', files[0]);
            itemStore.setItemsPath(files[0]);
        }
    })
});

ipc.on('open-file-people', function(event) {
    dialog.showOpenDialog(options, function(files) {
        if (files) {
            event.sender.send('selected-people', files[0]);
            peopleStore.setPeoplePath(files[0]);
        }
    })
});
