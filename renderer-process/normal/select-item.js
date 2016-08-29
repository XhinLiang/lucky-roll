const ipc = require('electron').ipcRenderer;
const btnChooseItem = document.getElementById('btn_choose_item');
const parseContent = document.getElementById('code-item');

btnChooseItem.addEventListener('click', function(event) {
    ipc.send('open-file-item');
});

ipc.on('selected-item', function(event, path) {
    let jsonArray = require(path);
    let result = '';
    for (item of jsonArray) {
        result += '<p>' + item['title'] + " " + item['name'] + " " + item['amount'] + '</p>';
    }
    parseContent.innerHTML = result;
});
