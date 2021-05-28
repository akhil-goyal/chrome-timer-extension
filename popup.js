const timeElement = document.getElementById('time');
const currentTime = new Date().toLocaleTimeString();

timeElement.textContent = `The time is : ${currentTime}`;

chrome.action.setBadge({
    text: 'TIME'
}, () => {
    console.log('Finished setting badge text.');
});