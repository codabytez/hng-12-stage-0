// Update UTC time
function updateUTCTime() {
  const timeElement = document.querySelector('[data-testid="currentTimeUTC"]');
  const now = new Date();
  const utcString = now.toUTCString();
  timeElement.textContent = `UTC Time: ${utcString}`;
}

// Initial update
updateUTCTime();

// Update time every minute
setInterval(updateUTCTime, 60000);
