function Update(a) {
    let list = [];
    const newId = document.getElementById('newId')
    const newPassword = document.getElementById('newPassword');
    const newComment = document.getElementById('newComment');
    for (var i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i).indexOf(arr) != -1) {
            list.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        };
    };

    let idList = list.map((list) => list.userid)
    let pwList = list.map((list) => list.userpw)
    if (!newId && !newPassword) {
        alert("아이디 또는 비밀번호를 확인해주세요")
        return false
    } else if (idList.indexOf(newId) == -1) {
        alert("아이디를 확인해주세요")
        return false
    } else if (pwList.indexOf(newPassword) == -1) {
        alert("비밀번호를 확인해주세요")
    } else {
        alert("수정이 완료되었습니다.")
        let saveObj={'userid':newId,'userpw':newPassword,'comment':newComment,'index':a}
        window.localStorage.setItem(arr+newId+newPassword+a,JSON.stringify(saveObj))
        location.reload()
    }
}
