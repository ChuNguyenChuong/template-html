import { getItemInLocalStorage, PRODUCTS, setLocalStorage, CART, USERS } from "./../helper.js"

window.addEventListener("load", ()=> {


  setCartHtml()






  // thuc hien hien thi ra san pham
  // lay ra list san pham 
  const products = getItemInLocalStorage(PRODUCTS)

  const productsHtml = document.getElementById("products")
  // su dung vong lap for de tao ra nhung the can thiet
  for (let i = 0; i < products.length; i++) {
    const product = products[i];

    const div = document.createElement("div");
    div.classList.add("col-12", 'col-md-4', "col-lg-3", "mb-5" )

    const a = document.createElement("a")
    a.classList.add("product-item")
    a.href = "#"

    const img = document.createElement("img");
    img.src =product.img
    img.classList.add('img-fluid', 'product-thumbnail')
    img.height =261
    img.width = 261


    const h3 = document.createElement("h3")
    h3.classList.add('product-title')
    h3.innerText = product.productName

    const strong = document.createElement("strong")
    strong.classList.add('product-price')
    strong.innerText = "$" + product.price

    const span = document.createElement("span")
    span.classList.add('icon-cross')
    span.addEventListener("click", ()=> {
      const cart = getItemInLocalStorage(CART)

      const productFind = cart.find(item=> item.id === product.id ) // undefined
      // kiem tra gio hang da co san pham chuan bi them vao chuaw
      // co roi
      if (productFind) {
        const newCart = cart.map(item=> {
          if (item.id === productFind.id) {
            item.counter += 1
          }
          return item
        })
        setLocalStorage(CART, newCart)
      }else{
        cart.push({...product, counter : 1})
        setLocalStorage(CART, cart)
      }
      // tang counter cua san pham do trong gio hang


      // khong co
      // them san pham vao gio hang voi counter = 1



      // cart.push(product)
      setCartHtml()
      // setLocalStorage(CART, cart)
    })

    const imgInSpan = document.createElement("img")
    imgInSpan.src = "images/cross.svg"
    imgInSpan.classList.add('img-fluid')

    span.appendChild(imgInSpan)
    a.appendChild(img)
    a.appendChild(h3)
    a.appendChild(strong)
    a.appendChild(span)
    div.appendChild(a)

    productsHtml.appendChild(div)
  }

})




function setCartHtml(){
  const productsCart = getItemInLocalStorage(CART)
  let sum = 0;
  for (let i = 0; i < productsCart.length; i++) {
    const product = productsCart[i];
    sum += product.counter
  }
  const cartCounter = document.getElementById("cart-counter")
  cartCounter.innerText = sum
}

export {
  setCartHtml
}