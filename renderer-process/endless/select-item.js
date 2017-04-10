const ipc = require('electron').ipcRenderer;
const btnChooseItem = document.getElementById('btn_endless_choose_item');
const parseContent = document.getElementById('code_endless_item');

btnChooseItem.addEventListener('click', function (event) {
    ipc.send('endless-select-item');
});

ipc.on('endless-select-item-result', function (event, path) {
    let jsonArray = require(path);
    let result = '';
    for (item of jsonArray) {
        result += '<p>' + item['title'] + " " + item['name'] + " " + item['amount'] + '</p>';
    }
    parseContent.innerHTML = result;
});
