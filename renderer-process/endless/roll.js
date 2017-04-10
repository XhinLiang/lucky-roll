const ipc = require('electron').ipcRenderer;
const btnRoll = document.getElementById('btn_endless_roll');
const domContent = document.getElementById('div_endless_content');

btnRoll.addEventListener('click', function () {
    ipc.send('endless-roll');
})

ipc.on('endless-roll-result', function (event, result) {
    if (!result) {
        return;
    }
    let newLine = `<p>${result}</p>`;
    domContent.innerHTML += newLine;
});
