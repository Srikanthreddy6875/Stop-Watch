
    const timeshow = document.getElementById("timeshow");
    const startButton = document.getElementById("start");
    const pauseButton = document.getElementById("pause");
    const resetButton = document.getElementById("reset");
  
    let startTime;
    let elapsedTime = 0;
    let timerInterval;
  
    const updateDisplay = () => {
      const milliseconds = elapsedTime % 1000;
      const seconds = Math.floor((elapsedTime / 1000) % 60);
      const minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
      const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
  
      timeshow.textContent = `${String(hours).padStart(2, "0")} : ${String(minutes).padStart(2, "0")}
       : ${String(seconds).padStart(2, "0")} : ${String(milliseconds).padStart(3, "0")}`;
    };
  
    const startTimer = () => {
      startTime = Date.now() - elapsedTime;
  
      timerInterval = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        updateDisplay();
      }, 10);
    };
  
    const pauseTimer = () => {
      clearInterval(timerInterval);
    };
  
    const resetTimer = () => {
      clearInterval(timerInterval);
      elapsedTime = 0;
      updateDisplay();
    };
  
    startButton.addEventListener("click", startTimer);
    pauseButton.addEventListener("click", pauseTimer);
    resetButton.addEventListener("click", resetTimer);
  