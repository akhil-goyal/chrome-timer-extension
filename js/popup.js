const timeElement = document.getElementById("time");
const nameElement = document.getElementById("name");
const timerElement = document.getElementById("timer");
const buttonStart = document.getElementById('start');
const buttonStop = document.getElementById('stop');
const buttonReset = document.getElementById('reset');

const updateTime = () => {
  chrome.storage.local.get(["timer"], (res) => {
    const time = res.timer ?? 0;
    timerElement.textContent = `Timer is at ${time} seconds.`;
  });

  const currentTime = new Date().toLocaleTimeString();
  timeElement.textContent = `The time is : ${currentTime}`;
};

updateTime();
setInterval(updateTime, 1000);

chrome.storage.sync.get(["name"], (res) => {
  const name = res.name ?? "User";
  nameElement.textContent = `Hello, ${name}`;
});

buttonStart.addEventListener('click', () => {
  chrome.storage.local.set({
    isRunning: true
  });
});

buttonStop.addEventListener('click', () => {
  chrome.storage.local.set({
    isRunning: false
  });
});

buttonReset.addEventListener('click', () => {
  chrome.storage.local.set({
    timer: 0,
    isRunning: false
  });
});