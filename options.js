const nameInput = document.getElementById("name-input");
const saveButton = document.getElementById("save-btn");

saveButton.addEventListener("click", () => {
  const name = nameInput.value;

  chrome.storage.sync.set(
    {
      name,
    },
    () => {
      console.log(`Name has been set to ${name}`);
    }
  );

  chrome.storage.sync.get(["name"], (res) => {
    nameInput.value = res.name ?? "User";
  });
});
