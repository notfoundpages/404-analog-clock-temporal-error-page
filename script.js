/*
© 2026 Not Found Pages · 404-analog-clock-temporal-error-page
Released under the MIT License

Repository → https://github.com/notfoundpages/404-analog-clock-temporal-error-page
Live Preview → https://notfoundpages.github.io/404-analog-clock-temporal-error-page

Discover the full collection → https://notfoundpages.github.io
*/

const hourHand = document.getElementById('hr');
const minuteHand = document.getElementById('min');
const secondHand = document.getElementById('sec');

function updateClock() {
  
  // Fetch local system time
  const now = new Date();

  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const milliseconds = now.getMilliseconds();

  // Calculate precise degrees
  // Adding milliseconds to the second calculation creates the smooth, continuous sweep
  const secDeg = ((seconds + (milliseconds / 1000)) / 60) * 360;

  // Minutes move fractionally based on the current second
  const minDeg = ((minutes + (seconds / 60)) / 60) * 360;

  // Hours move fractionally based on the current minute (Modulus 12 for 12hr clock face)
  const hrDeg = (((hours % 12) + (minutes / 60)) / 12) * 360;

  // Apply rotations using hardware-accelerated 3D transforms
  secondHand.style.transform = `rotateZ(${secDeg}deg)`;
  minuteHand.style.transform = `rotateZ(${minDeg}deg)`;
  hourHand.style.transform = `rotateZ(${hrDeg}deg)`;

  // Loop on the browser's optimal paint cycle
  requestAnimationFrame(updateClock);
}

// Initialize the temporal loop
requestAnimationFrame(updateClock);