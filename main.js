const inputText = document.getElementById('uname');
const submitBtnEl = document.getElementById('getInfo');
const outputEl = document.getElementById('displayMessage');
function getUserName() {
    outputEl.innerHTML = `Hi ${inputText.value}! Choose an option`;
}
submitBtnEl.addEventListener('click', getUserName);

