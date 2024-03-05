let hr = min = sec = ms = "00";

let startTimer;

const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");

startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);

function start() {
    startBtn.classList.add("active");
    stopBtn.classList.remove("stopActive");

    startTimer = setInterval(() => {    // Update time every 0.01 seconds
        ms++;
        ms = ms < 10 ? "0" + ms : ms; // 10 milliseconds = 0.01 seconds

        // When milliseconds reach 100, reset and increase seconds
        if (ms == 100) {
            sec++;
            sec = sec < 10 ? "0" + sec : sec;
            ms = "00";
        }
        
        if (sec == 60) {
            min++;
            min = min < 10 ? "0" + min : min; //it adds a leading "0" to the front of ms to make it a two-digit number.
            sec = "00";
        }
        
        if (min == 60) {
            hr++;
            hr = hr < 10 ? "0" + hr : hr;
            min = "00";
        }

        // Update what's shown on the screen
        putValue();
    }, 10); // 10 milliseconds = 0.01 seconds
}

// Function to stop the stopwatch paused
function stop() {

    startBtn.classList.remove("active");
    stopBtn.classList.add("stopActive");

    // Stop the timer
    clearInterval(startTimer);
}

// Function to reset the stopwatch
function reset() {
    startBtn.classList.remove("active");
    stopBtn.classList.remove("stopActive");

    // Stop the timer and reset time variables
    clearInterval(startTimer);
    hr = min = sec = ms = "00";

    // Update what's shown on the screen
    putValue();
}

// Function to update the displayed time
function putValue() {
    // Display the time values on the screen
    document.querySelector(".millisecond").innerText = ms;
    document.querySelector(".second").innerText = sec;
    document.querySelector(".minute").innerText = min;
    document.querySelector(".hour").innerText = hr;
}
