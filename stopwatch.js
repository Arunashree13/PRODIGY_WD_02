let timer;
let milliseconds = 0, seconds = 0, minutes = 0;
let running = false;

function updateDisplay() {
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "0" + milliseconds : milliseconds;
    document.getElementById("display").innerText = `${m}:${s}:${ms}`;
}

function startStopwatch() {
    if (!running) {
        running = true;
        timer = setInterval(function () {
            milliseconds++;
            if (milliseconds === 100) {
                milliseconds = 0;
                seconds++;
            }
            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }
            updateDisplay();
        }, 10);
    }
}

function stopStopwatch() {
    running = false;
    clearInterval(timer);
}

function resetStopwatch() {
    running = false;
    clearInterval(timer);
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    updateDisplay();
}
