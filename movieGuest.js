
//게스트 name,pwd,comment 값 저장 후 localStorage에 값 넣기 함수.
function guestedit() {
    //guest-name, guest-pwd, guest-comment, Gidkey(난수 발생시키고 저장.)
    let GId = document.getElementById("guest-name").value;
    let GPwd = document.getElementById("guest-pwd").value;
    let GComment = document.getElementById("guest-comment").value;
    let GIdkey = Math.floor(Math.random() * 100) + 1;

    //localStorage에 넣기위해 선언
    let arr = [];
    let comment = {GComment : GComment, GId : GId, GPwd : GPwd, GIdkey : GIdkey}
    let guests = [];

    if (localStorage.getItem('guests') != null) {
        //localStorage 값이 있다면 -> localStorage에 추가로 넣기.
        let arr2 = JSON.parse(localStorage.getItem('guests'));
        arr2.push(comment);
        window.localStorage.setItem('guests', JSON.stringify(arr2));

    } else if (localStorage.getItem('guests') == null) {
        //localStorage 값이 없으면 -> comment에 넣은 값 푸시
        arr.push(comment);
        guests = arr;
        console.log(guests);
        window.localStorage.setItem('guests', JSON.stringify(guests));
    }
    
}

let guestbook = JSON.parse(localStorage.getItem('guests'));
console.log("2222"+guestbook);
let guestbook1 = guestbook.sort();
// console.log(guestbook1);


// const rows = guestbook1["results"];
// rows.forEach((a)=>{
//     let name = a["GId"];
//     let pwd = a["GPwd"];
//     let comment = a["GComment"];
//     let idkey = a["GIdkey"];
//     let temp_html =`<div>${name}</div>
//                     <div>${comment}</div> `;
//                     document.querySelector("#guest-box")
//                     .insertAdjacentHTML("beforeend", temp_html);
// });







