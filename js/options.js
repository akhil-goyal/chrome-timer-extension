const nameInput = document.getElementById("name-input");
const timeInput = document.getElementById("time-input");
const saveButton = document.getElementById("save-btn");

saveButton.addEventListener("click", () => {
  const name = nameInput.value;
  const notificationTime = timeInput.value;

  chrome.storage.sync.set({
    name,
    notificationTime,
  });
});

chrome.storage.sync.get(["name", "notificationTime"], (res) => {
  nameInput.value = res.name ?? "User";
  timeInput.value = res.notificationTime ?? 1000;
});
