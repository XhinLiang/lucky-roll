const ipc = require('electron').ipcRenderer;
const btnRoll = document.getElementById('btn_roll');
const domContent = document.getElementById('div_content');

btnRoll.addEventListener('click', function() {
    ipc.send('wefewfwf');
})

ipc.on('wefwefewf', function(event, result) {
    if (!result) {
        return;
    }
    let newLine = `<p>${result}</p>`;
    domContent.innerHTML += newLine;
});
