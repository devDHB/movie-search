const nickName = document.getElementById('nickName');
const password = document.getElementById('password');

function save(){
 let saveObj={'userid':nickName.value,'userpw':password.value }
 window.localStorage.setItem(arr+nickName.value+password.value,JSON.stringify(saveObj))
}

