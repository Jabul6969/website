// Example of fetching IP (using an API)
fetch("https://api.ipify.org?format=json")
  .then(response => response.json())
  .then(data => {
    document.getElementById("ip").textContent = data.ip;
  })
  .catch(() => {
    document.getElementById("ip").textContent = "Unavailable";
  });

// Displaying browser information
document.getElementById("browser").textContent = navigator.userAgent;

// Displaying screen resolution
document.getElementById("screenResolution").textContent = `${window.screen.width} x ${window.screen.height}`;

// Displaying operating system information
document.getElementById("os").textContent = navigator.platform;

// Placeholder for CPU info (JavaScript alone can't get full CPU details without additional libraries)
document.getElementById("cpu").textContent = "Unavailable in Browser";
