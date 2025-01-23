document.getElementById("startButton").addEventListener("click", startCountdown);

function startCountdown() {
  const countdownElement = document.getElementById("countdown");
  let time = 3600; // Set the countdown time in seconds (1 hour = 3600 seconds)

  const interval = setInterval(() => {
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor((time % 3600) / 60);
    let seconds = time % 60;

    countdownElement.innerHTML = 
      `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    if (time <= 0) {
      clearInterval(interval);
      countdownElement.innerHTML = "Time's up!";
    }

    time--;
  }, 1000);
}
