const nameInput = document.getElementById("name-input");
const saveButton = document.getElementById("save-btn");

saveButton.addEventListener("click", () => {
  console.log(nameInput.value);
});
