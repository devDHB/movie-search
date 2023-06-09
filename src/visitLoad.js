function load() {
    let list = []
    for (var i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i).indexOf(arr) != -1) {
            list.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        };
    }
    const listBox = document.querySelector("#visitBook")
    listBox.innerHTML = list.map(
        (list) => `<div class="labalId">${list.userid}</div>
                 <div id="${list.index}" class="listBox">
                 <div class="labalComment">${list.comment}</div>
                 <button id="btn-modal" type="button">수정</button>  
                 <button onclick="Delete(${list.index})">삭제</button>
                 </div>
                 `
    )
    let a = document.querySelectorAll("#btn-modal");
    for (let i=0; i<a.length; i++) {
        a[i].addEventListener("click", e => {
            modal.style.display = "flex"
            })
    }

            const modal = document.getElementById("modal")
            
            //모달창의 x버튼을 누르면 모달창이 꺼지게 하기
            const closeBtn = modal.querySelector(".close-area")
            closeBtn.addEventListener("click", e => {
            modal.style.display = "none"});
            //빈곳을 누르면 모달창 꺼지게 하기
            modal.addEventListener("click", e => {
                const evTarget = e.target
                if(evTarget.classList.contains("modal-overlay")) {
                    modal.style.display = "none"
                }
            })
}
