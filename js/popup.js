const timeElement = document.getElementById("time");
const nameElement = document.getElementById("name");
const timerElement = document.getElementById("timer");

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
