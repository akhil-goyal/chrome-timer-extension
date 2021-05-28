const timeElement = document.getElementById('time');
const currentTime = new Date().toLocaleTimeString();
const nameElement = document.getElementById('name');

timeElement.textContent = `The time is : ${currentTime}`;

chrome.action.setBadgeText({
    text: 'TIME'
}, () => {
    console.log('Finished setting badge text.');
});

chrome.storage.sync.get(['name'], (res) => {
    const name = res.name ?? "User";
    nameElement.textContent = `Hello, ${name}`;
});
