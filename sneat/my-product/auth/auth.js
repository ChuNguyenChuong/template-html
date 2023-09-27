import { REMEMBER_ME, USERS, getItemInLocalStorage, setLocalStorage, USER } from "../helper.js"

const btnLogin = document.getElementById('btn-login')

btnLogin.addEventListener("click", ()=> {

const btnLogin = document.getElementById('btn-login')
// lay value tu cac o input
  const email =  document.getElementById('email').value
  const password =  document.getElementById('password').value

  // lay list user tu local storage
  const users = getItemInLocalStorage(USERS)
  console.log("🚀 ~ file: auth.js:16 ~ btnLogin.addEventListener ~ users:", users)

  // thuc hien so sanh user input vs user list
  const userFoundByEmailPass = users.find(item => item.username === email && item.password === password)

  if (userFoundByEmailPass) {
    // 1. dung tai khoan
    
    // check xem o remember no co checked khong
    const rememberMe = document.getElementById("remember-me");
    if (rememberMe.checked) {
      // 1.1 - co
      // set vao local 1 gia tri remember : true
      setLocalStorage(REMEMBER_ME, true)
    }else{
      // 1.2 - khong
      // set 1 gia tri remember : true
      setLocalStorage(REMEMBER_ME, false)
    }
    setLocalStorage(USER, userFoundByEmailPass )
    window.location.href = "/my-product/home/index.html"
    // redirect sang home
  }else{
    // 2. sai tai khoan
    // alter message bao sai tai khoan
    alert("sai thong tin tai khoan hoac mat khau !!!")
  }

})

