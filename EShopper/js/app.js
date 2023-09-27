console.log(localStorage.getItem("token"));


const userFromLocal = localStorage.getItem("user")

console.log(userFromLocal);

console.log(JSON.parse(userFromLocal));



console.log(JSON.parse(sessionStorage.getItem("user")).age);

