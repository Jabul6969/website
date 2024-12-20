// Countdown logic
function updateCountdown() {
    const newYearDate = new Date('December 25, 2024 00:00:00').getTime();
    const now = new Date().getTime();
    const timeLeft = newYearDate - now;
  
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  
    updateElement('days', days);
    updateElement('hours', hours);
    updateElement('minutes', minutes);
    updateElement('seconds', seconds);
  }
  
  function updateElement(id, value) {
    const element = document.getElementById(id);
    const newValue = value < 10 ? '0' + value : value;
    if (element.innerText !== newValue) {
      element.setAttribute('data-value', newValue);
      element.innerText = newValue;
      element.classList.remove('animate');
      void element.offsetWidth; // trigger reflow
      element.classList.add('animate');
    }
  }
  
  setInterval(updateCountdown, 1000);
  
  // Device detection and style adjustment
  function adjustStylesForDevice() {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      document.querySelector('body').style.fontSize = '0.8rem';
    } else {
      document.querySelector('body').style.fontSize = '1rem';
    }
  }
  
  adjustStylesForDevice();
  window.addEventListener('resize', adjustStylesForDevice);