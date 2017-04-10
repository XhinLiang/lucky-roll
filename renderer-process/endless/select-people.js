const ipc = require('electron').ipcRenderer;
const btnChoosePeople = document.getElementById('btn_choose_people');
const parseContent = document.getElementById('code-people');

btnChoosePeople.addEventListener('click', function(event) {
    ipc.send('wefewfwef');
});

ipc.on('wefxcvsd', function(event, path) {
    let jsonArray = require(path);
    let result = '';
    for (item of jsonArray) {
        result += '<p>' + item['name'] + '</p>';
    }
    parseContent.innerHTML = result;
});
