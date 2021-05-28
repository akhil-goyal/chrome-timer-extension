chrome.alarms.create({
  periodInMinutes: 1 / 60,
});

chrome.alarms.onAlarm.addListener((alarm) => {
  console.log(alarm);
  chrome.storage.local.get(["timer"], (res) => {
    const time = res.timer ?? 0;
    chrome.storage.local.set({
      timer: time + 1,
    });
    chrome.action.setBadgeText({
      text: `${time + 1}`,
    });
    if (time % 1000 === 0) {
      this.registration.showNotification("Chrome Timer Extension", {
        body: "1000 seconds have passed..",
        icon: "assets/clock.png",
      });
    }
  });
});
