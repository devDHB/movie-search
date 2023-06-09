function load() {
    //로컬스토리지의 데이터를 받을 배열//
    let list = []
    //상세페이지의 아이디와 같은 데이터만 뽑음//
    for (var i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i).indexOf(arr) != -1) {
            list.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        };
    }
    //map 붙힐 곳//
    const listBox = document.querySelector("#visitBook")
    listBox.innerHTML = list.map(
        (list) => `<div class="labalId">${list.userid}</div>
                 <div id="${list.index}" class="listBox">
                 <div class="labalComment">${list.comment}</div>
                 <button onclick="Update(${list.index})">수정</button>  
                 <button onclick="Delete(${list.index})">삭제</button>
                 </div>`
    )
} 