var time = document.getElementById('time');
var startButton = document.getElementById('startStop');
var resetButton = document.getElementById('reset');

let start = false;
let interval = null;


let miliseconds = 0;
let seconds = 0;

let displayMili = 0;
let displaySec = 0;





startButton.addEventListener('click', startfunc);
resetButton.addEventListener('click', clear);


function stopWatch(e){
    miliseconds ++;

    if (miliseconds / 100 === 1){
        miliseconds = 0;
        seconds ++;
    }

    if (miliseconds < 10){
        displayMili = '0' + miliseconds.toString();
    } else {
        displayMili = miliseconds;
    }

    if (seconds < 10){
        displaySec = '0' + seconds.toString();  
    } else {
        displaySec = seconds;
    }

    time.innerHTML = displaySec + ':' + displayMili;

}


function startfunc(){
    if (start === false){
        interval = window.setInterval(stopWatch, 10);
        startButton.innerText = 'Stop';
        start = true;
    
    }else{
        window.clearInterval(interval);
        startButton.innerText = 'Start';
        start = false;

    }
}


function clear(){
    time.innerHTML = '00:00';
    seconds = 0;
    miliseconds = 0;
}