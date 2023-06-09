function Update(a) {
    let list = [];
    let updateId = prompt("아이디를 입력하세요");
    let updatePw = prompt("비밀번호를 입력하세요");
    //반복문을 통해서 특정 데이터만 추출 JSON.parse로 객체화//
    for (var i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i).indexOf(arr) != -1) {
            list.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        };
    }; console.log(list)
    //map을 통해서 원하는 데이터만 뽑음//
    let idList = list.map((list) => list.userid)
    let pwList = list.map((list) => list.userpw)
    if (!updateId && !updatePw) {
        alert("아이디 또는 비밀번호를 확인해주세요")
        return false
    } else if (idList.indexOf(updateId) == -1) {
        alert("아이디를 확인해주세요")
        return false
    } else if (pwList.indexOf(updatePw) == -1) {
        alert("비밀번호를 확인해주세요")
    } else {
        //수정될 내용//
        let pixComment=prompt("내용을 입력해주세요")
        alert("수정이 완료되었습니다.")
        //로컬스토리지 값에 들어갈 수정된 객체//
        let saveObj={'userid':updateId,'userpw':updatePw,'comment':pixComment,'index':a}
        //수정된 데이터를 저장//
        window.localStorage.setItem(arr+updateId+updatePw+a,JSON.stringify(saveObj))
        location.reload()
    }
}
