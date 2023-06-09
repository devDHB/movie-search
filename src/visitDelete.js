function Delete(a) {
    //로컬스토리지의 아이디와 비밀번호 데이터를 받을 배열을 만듬//
    let list = [];
    let visitId = prompt("아이디를 입력하세요");
    let visitPw = prompt("비밀번호를 입력하세요");
    //반복문과 push의 조합을 사용함. 로컬스토리지는 문자열만 들어가기 때문에 객체화JSON.parse룰 해줌//
    for (var i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i).indexOf(arr) != -1) {
            list.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        };
    }; console.log(list)
    //로컬스토리지의 데이터를 map을 사용해서 아이디, 비밀번호만 뽑음//
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
        //로컬스토리지 삭제//
        window.localStorage.removeItem(arr + visitId + visitPw + a)
        location.reload()
    }
}