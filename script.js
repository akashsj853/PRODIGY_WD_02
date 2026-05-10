let seconds = 0;
let minutes = 0;
let hours = 0;

let timer = null;

const display = document.getElementById("display");
const lapList = document.getElementById("lapList");

document.getElementById("startBtn").addEventListener("click", startTimer);
document.getElementById("pauseBtn").addEventListener("click", pauseTimer);
document.getElementById("resetBtn").addEventListener("click", resetTimer);
document.getElementById("lapBtn").addEventListener("click", recordLap);

function stopwatch() {

    seconds++;

    if(seconds == 60) {
        seconds = 0;
        minutes++;
    }

    if(minutes == 60) {
        minutes = 0;
        hours++;
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    display.innerHTML = `${h}:${m}:${s}`;
}

function startTimer() {

    if(timer !== null) {
        clearInterval(timer);
    }

    timer = setInterval(stopwatch, 1000);
}

function pauseTimer() {
    clearInterval(timer);
}

function resetTimer() {

    clearInterval(timer);

    seconds = 0;
    minutes = 0;
    hours = 0;

    display.innerHTML = "00:00:00";

    lapList.innerHTML = "";
}

function recordLap() {

    let lapTime = display.innerHTML;

    let li = document.createElement("li");

    li.innerText = lapTime;

    lapList.appendChild(li);
}