const PRODUCTS = "products";
const ID_EDIT = "id-edit"
const USERS = "users"
const USER = "user"
const REMEMBER_ME = "remember_me"
const CART = "cart"

function randomId() {
  var S4 = function() {
     return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
  };
  return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}

function getItemInLocalStorage(key) {
  const itemInLocal = localStorage.getItem(key)
  const result = JSON.parse(itemInLocal)

  return result ?? []
}

function setLocalStorage(key, value){
  const stringData = JSON.stringify(value);
  localStorage.setItem(key, stringData)
}


function authen() {
  // check user dang nhap co chua
  const userLogin = getItemInLocalStorage(USER)
  console.log("🚀 ~ file: helper.js:30 ~ authen ~ userLogin:", userLogin.length)

  if (userLogin.length === undefined) {
    console.log("login");
    return;
  }else{
    console.log("chua dang nhap");
    window.location.href = "/my-product/auth/index.html"
  }
  // 1.1 - co
  // cho vao trang admin

  // 1.2 - khong
  // chuyen huong ve trang login


}

const totalCart = () => {
  // lat ra danh sach san pham co trong gio hang
  const cartList = getItemInLocalStorage(CART)
  let sumTotal = 0; // 180
  // dung for chay qua tung san pham co trong gio hang
  for (let i = 0; i < cartList.length; i++) {
    const product = cartList[i];

    const sumInProduct = Number(product.price) * product.counter
    sumTotal = sumTotal + sumInProduct
  }
  // thuc hien tinh tong gia tien
  // xacs dinh hien thi sumTotal o dau
  // id = totalCart
  // id = totalCart1
  // lay ra the can cap nhat
  const totalCart = document.getElementById("totalCart")
  const totalCart1 = document.getElementById("totalCart1")

  // thay doi gia tri content text
  totalCart.innerText = "$" + sumTotal
  totalCart1.innerText = "$" + sumTotal
}

const renderCounterCart = () => {
  // xacs dinh vi tri can hien thi so luong san pham trong gio hang
  // id = cart-counter
  const cartCounter = document.getElementById("cart-counter")

  // tinh tong so luong san pham trong gio hang
  // can lay ra danh sach san pham trong gio hang
  const cartList = getItemInLocalStorage(CART)

  let sum = 0
  for (let i = 0; i < cartList.length; i++) {
    const product = cartList[i];
    sum = sum + product.counter
  }
  cartCounter.innerText = sum
}




export {randomId, setLocalStorage, getItemInLocalStorage, PRODUCTS, ID_EDIT, USERS, REMEMBER_ME, USER, CART, authen, totalCart, renderCounterCart}