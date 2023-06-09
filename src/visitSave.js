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
        //로컬스토리지에 저장될 고유한 값을 index로 만듬//
        let index = localStorage.length
        //로컬스토리지의 값이 될 부분을 객체화함//
        let saveObj = { 'userid': nickName.value, 'userpw': password.value, 'comment': comment.value, 'index': index }
        //로컬스토리지의 키와 값을 지정, JSON.stringify로 문자열화//
        window.localStorage.setItem(arr + nickName.value + password.value + index, JSON.stringify(saveObj))
        location.reload()
    }
}
//작성버튼을 누르면 방명록이 자동으로 보이게, 이 함수로 인해서 작성 버튼에 onclick 속성을 두개 부여함//
window.onload = function () {
    let a = document.getElementsByClassName("save");
    a.onclick = load();
}



