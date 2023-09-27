import { PRODUCTS, authen, getItemInLocalStorage, randomId, setLocalStorage } from "./../helper.js"

authen()

const productName = document.getElementById("basic-icon-default-productName")
const nsx = document.getElementById("basic-icon-default-nsx")
const status = document.getElementById("basic-icon-default-status")
const price = document.getElementById("basic-icon-default-price")
const img = document.getElementById("basic-icon-default-img")

const btnSubmit = document.getElementById("btnSubmit")

btnSubmit.addEventListener("click", () => {
  const productNameValue = productName.value
  const nsxValue = nsx.value
  const statusValue = status.value
  const priceValue = price.value
  const imgValue = img.value

  const newProduct = {
    productName: productNameValue,
    nsx: nsxValue,
    status: statusValue,
    price: priceValue,
    img: imgValue,
    id: randomId()
  }

  const products = getItemInLocalStorage(PRODUCTS)
  // them san pham moi vao danh sach 
  products.push(newProduct)
  // luu vao local storage
  setLocalStorage(PRODUCTS, products)

  window.location.href = "/my-product/home/index.html"
})