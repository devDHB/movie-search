function Delete(a) {
    let list = [];
    let visitId = prompt("아이디를 입력하세요");
    let visitPw = prompt("비밀번호를 입력하세요");
    for (var i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i).indexOf(arr) != -1) {
            list.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        };
    }; console.log(list)

    let idList = list.map((list) => list.userid)
    let pwList = list.map((list) => list.userpw)

    if (!visitId && !visitPw) {
        alert("아이디 또는 비밀번호를 확인해주세요")
        return false
    } else if (idList.indexOf(visitId) == -1) {
        alert("아이디를 확인해주세요")
        return false
    } else if (pwList.indexOf(visitPw) == -1) {
        alert("비밀번호를 확인해주세요")
    } else {
        alert("삭제되었습니다")
        window.localStorage.removeItem(arr + visitId + visitPw + a)
        location.reload()
    }
}