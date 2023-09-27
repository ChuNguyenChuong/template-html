import { ID_EDIT, PRODUCTS, authen, getItemInLocalStorage, setLocalStorage } from "../helper.js";

authen()

window.addEventListener("load", () => {
  const idEdit = getItemInLocalStorage(ID_EDIT);
  const products = getItemInLocalStorage(PRODUCTS);

  const productNeedEdit = products.find(item => item.id === idEdit)

  // lay o input
  const productName = document.getElementById("basic-icon-default-productName")
  const nsx = document.getElementById("basic-icon-default-nsx")
  const status = document.getElementById("basic-icon-default-status")
  const price = document.getElementById("basic-icon-default-price")

  // ste gia tri mac dinh cho o input
  price.value = productNeedEdit.price
  productName.value = productNeedEdit.productName
  status.value = productNeedEdit.status
  nsx.value = productNeedEdit.nsx
})


const btnUpdate = document.getElementById("btnUpdate");


btnUpdate.addEventListener("click", ()=> {
  // lay du lieu tu cac o input
  const productName = document.getElementById("basic-icon-default-productName").value
  const nsx = document.getElementById("basic-icon-default-nsx").value
  const status = document.getElementById("basic-icon-default-status").value
  const price = document.getElementById("basic-icon-default-price").value

  // lay list product ra tu local storage
  const products = getItemInLocalStorage(PRODUCTS)
  // lay ra id can update 
  const idEdit = getItemInLocalStorage(ID_EDIT);

  // sua du lieu 
  const newData = products.map(item=> {
    if (item.id === idEdit) {
      item.productName = productName;
      item.nsx = nsx;
      item.status = status;
      item.price = price;
    }
    return item
  })
  // cap nhat no vao local
  setLocalStorage(PRODUCTS, newData)


  window.location.href = "/my-product/home/index.html"

})