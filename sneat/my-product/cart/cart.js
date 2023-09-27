import { CART, getItemInLocalStorage, setLocalStorage, totalCart, renderCounterCart } from "../helper.js"
import {setCartHtml} from "../shop/shop.js"

setCartHtml()

window.addEventListener("load", ()=>{
  totalCart()

  // get cart from local 
  const cartList = getItemInLocalStorage(CART)

  // dung vong for
  // tap ra nhunwgx the can thiet 
  const tbody = document.getElementById("tbody")
  for (let i = 0; i < cartList.length; i++) {
    const product = cartList[i];
    

    const tr = document.createElement("tr")

    // td01
    const td01 = document.createElement("td")
    td01.classList.add("product-thumbnail")
    const imgTd01 = document.createElement("img")
    imgTd01.src = product.img
    imgTd01.classList.add("img-fluid")
    td01.appendChild(imgTd01)

    // td02
    const td02 = document.createElement("td")
    td02.classList.add("product-name")
    const h2Td02 = document.createElement("h2")
    td02.classList.add("h5", "text-black")
    h2Td02.innerText = product.productName
    td02.appendChild(h2Td02)

    // td03
    const td03 = document.createElement("td")
    td03.innerText= "$" + product.price

    // td04
    const td04 = document.createElement("td")
    const divTd04  =  document.createElement("div")
    divTd04.classList.add("input-group", "mb-3", "d-flex", "align-items-center", "quantity-container")
    divTd04.style.maxWidth = 120;

    const divLayer02Td04 = document.createElement("div")
    divLayer02Td04.classList.add("input-group-prepend", "btn-decre")
    divLayer02Td04.textContent = '-'
    divLayer02Td04.addEventListener("click", ()=> {
      decrement(product)
      renderCounterCart()
      totalCart()
    } )

    const input = document.createElement("input");
    input.classList.add("form-control", "text-center", "quantity-amount")
    input.value = product.counter
    input.id = product.id
    input.type="number"
    input.addEventListener("change", (e)=> {
      inputChange(product, e)
      totalCart()
      renderCounterCart()
    })

    const divLayer03td04 = document.createElement("div");
    divLayer03td04.classList.add("input-group-append")
    divLayer03td04.classList.add("btn", "btn-outline-black", "increase")
    divLayer03td04.textContent = '+'

    divLayer03td04.addEventListener("click", ()=> {
      increment(product)
      totalCart()
      renderCounterCart()
    })

    divTd04.appendChild(divLayer02Td04)
    divTd04.appendChild(input)
    divTd04.appendChild(divLayer03td04)
    td04.appendChild(divTd04)

    // td05
    const td05 = document.createElement("td")
    td05.id=`td05-price-${product.id}`
    td05.innerText = Number(product.price) * Number(product.counter)

    // td06
    const td06 = document.createElement("td")
    const aTd06 = document.createElement("a")
    aTd06.href ="#";
    aTd06.classList.add("btn", "btn-black", "btn-sm")
    aTd06.innerText="X"
    td06.appendChild(aTd06)

    tr.appendChild(td01)
    tr.appendChild(td02)
    tr.appendChild(td03)
    tr.appendChild(td04)
    tr.appendChild(td05)
    tr.appendChild(td06)
    tbody.appendChild(tr)
  }

  // them vao dom
})



function renderTotalInProduct(id, counter, price) {
  // lay ra the con sua theo ID
  // tdo5-price-product.id
  const td = document.getElementById(`td05-price-${id}`)
  td.innerText = counter * price

  // thay doi gia tri
}

function decrement(product){
  const cart = getItemInLocalStorage(CART)
  const productFind = cart.find(item=> item.id === product.id ) 
  if (productFind) {
    const newCart = cart.map(item=> {
      if (item.id === productFind.id && item.counter > 1) {
        item.counter -= 1
      }
      return item
    })
    setLocalStorage(CART, newCart)
    const inputCurrent = document.getElementById(product.id)
    const productNew = newCart.find(item=> item.id === product.id)

    inputCurrent.value =  productNew. counter 

    renderTotalInProduct(product.id,Number(productNew.counter), Number(productNew.price) )
  }
}

function inputChange(product, e){
  const cart = getItemInLocalStorage(CART)
  const productFind = cart.find(item=> item.id === product.id ) 
  if (productFind) {
    const newCart = cart.map(item=> {
      if (item.id === productFind.id) {
        item.counter = Number(e.target.value)
      }
      return item
    })
    setLocalStorage(CART, newCart)

    const productNew = newCart.find(item=> item.id === product.id)

    renderTotalInProduct(product.id,Number(productNew.counter), Number(productNew.price) )
  }
}

function increment(product){
  const cart = getItemInLocalStorage(CART)
  const productFind = cart.find(item=> item.id === product.id ) 
  if (productFind) {
    const newCart = cart.map(item=> {
      if (item.id === productFind.id) {
        item.counter += 1
      }
      return item
    })
    setLocalStorage(CART, newCart)

    // xac dinh duoc dau la vi tri can render laij
    // id = product.id
    const inputCurrent = document.getElementById(product.id)
    const productNew = newCart.find(item=> item.id === product.id) 

    inputCurrent.value =  productNew.counter

    renderTotalInProduct(product.id,Number(productNew.counter), Number(productNew.price))
  }
}