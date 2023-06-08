function load() {
    let list=[]
    for (var i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i).indexOf(arr) != -1) {
             list.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        };
    }
    const listBox = document.querySelector("#visitBook")
    listBox.innerHTML=list.map(
        (list)=>`<div>${list.userid}</div>`
    )
} 