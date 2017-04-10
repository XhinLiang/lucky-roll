const ipc = require('electron').ipcRenderer;
const btnChoosePeople = document.getElementById('btn_endless_choose_people');
const parseContent = document.getElementById('code_endless_people');

btnChoosePeople.addEventListener('click', function (event) {
    ipc.send('endless-select-people');
});

ipc.on('endless-select-people-result', function (event, path) {
    let jsonArray = require(path);
    let result = '';
    for (item of jsonArray) {
        result += '<p>' + item['name'] + '</p>';
    }
    parseContent.innerHTML = result;
});
