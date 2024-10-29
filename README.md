<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Christmas Countdown</title>
  <style>
    /* Background styling */
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');
    body {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
      overflow: hidden;
      background: linear-gradient(to bottom, #b1e4e2, #ffe8e8);
      font-family: 'Montserrat', sans-serif;
      color: #333;
    }

    /* Snowfall effect */
    .snowflake {
      position: fixed;
      top: -10px;
      color: white;
      font-size: 1.2rem;
      pointer-events: none;
      animation: fall linear infinite;
    }

    /* Countdown container */
    .countdown-container {
      text-align: center;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
      background-color: rgba(255, 255, 255, 0.85);
    }

    h1 {
      font-size: 3.5rem;
      color: #e63946;
      margin-bottom: 10px;
      text-shadow: 2px 2px #d8a5a5;
    }

    .greeting {
      font-size: 1.2rem;
      margin-bottom: 20px;
      color: #6c757d;
    }

    /* Countdown display */
    .countdown {
      display: flex;
      justify-content: center;
      gap: 20px;
    }

    .countdown div {
      font-size: 2.5rem;
      color: #ff5722;
      width: 80px;
      text-align: center;
      padding: 15px;
      background-color: #ffffff;
      border-radius: 8px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    }

    .label {
      font-size: 1rem;
      color: #888;
      margin-top: 5px;
    }

    /* Snowflake falling animation */
    @keyframes fall {
      to {
        transform: translateY(100vh) rotate(360deg);
      }
    }
  </style>
</head>
<body>

  <!-- Snowflakes -->
  <div class="snowflake">❄</div>
  <div class="snowflake">❅</div>
  <div class="snowflake">❆</div>
  
  <div class="countdown-container">
    <h1>Christmas Countdown</h1>
    <div class="greeting">Counting down to the most wonderful time of the year!</div>
    <div class="countdown" id="countdown">
      <div>
        <span id="days">00</span>
        <div class="label">Days</div>
      </div>
      <div>
        <span id="hours">00</span>
        <div class="label">Hours</div>
      </div>
      <div>
        <span id="minutes">00</span>
        <div class="label">Minutes</div>
      </div>
      <div>
        <span id="seconds">00</span>
        <div class="label">Seconds</div>
      </div>
    </div>
  </div>

  <script>
    // Snowfall effect
    function createSnowflake() {
      const snowflake = document.createElement("div");
      snowflake.classList.add("snowflake");
      snowflake.textContent = '❄';
      snowflake.style.left = Math.random() * window.innerWidth + "px";
      snowflake.style.animationDuration = Math.random() * 3 + 2 + "s";
      snowflake.style.fontSize = Math.random() * 10 + 10 + "px";
      document.body.appendChild(snowflake);

      setTimeout(() => {
        snowflake.remove();
      }, 5000);
    }
    setInterval(createSnowflake, 200);

    // Countdown logic
    function updateCountdown() {
      const christmasDate = new Date('December 25, 2024 00:00:00').getTime();
      const now = new Date().getTime();
      const timeLeft = christmasDate - now;

      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

      document.getElementById('days').innerText = days;
      document.getElementById('hours').innerText = hours;
      document.getElementById('minutes').innerText = minutes;
      document.getElementById('seconds').innerText = seconds;
    }
    
    setInterval(updateCountdown, 1000);
  </script>

</body>
</html>
