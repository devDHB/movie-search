const nickName = document.getElementById('nickName');
const password = document.getElementById('password');
const comment = document.getElementById('comment');


function save() {
    if (!nickName.value && !password.value) {
        alert("아이디 또는 비밀번호를 확인해주세요")
        return false
    } else if (!nickName.value) {
        alert("아이디를 확인해주세요")
        return false
    } else if (!password.value) {
        alert("비밀번호를 확인해주세요")
        return false
    } else {
        let index = localStorage.length
        let saveObj = { 'userid': nickName.value, 'userpw': password.value, 'comment': comment.value, 'index': index }
        window.localStorage.setItem(arr + nickName.value + password.value + index, JSON.stringify(saveObj))
        location.reload()
    }
}

window.onload = function () {
    let a = document.getElementsByClassName("save");
    a.onclick = load();
}