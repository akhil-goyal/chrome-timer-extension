const timeElement = document.getElementById('time');
const currentTime = new Date().toLocaleTimeString();

timeElement.textContent = `The time is : ${currentTime}`;