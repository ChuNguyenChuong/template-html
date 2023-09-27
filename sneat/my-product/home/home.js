import { ID_EDIT, PRODUCTS, getItemInLocalStorage, setLocalStorage, authen } from "../helper.js";

authen()


window.addEventListener("load", ()=> {
  const products = getItemInLocalStorage(PRODUCTS)
  
  const tBody = document.getElementById("table-item")

  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const tr = document.createElement("tr")

    // tao va xu ly the td so 1 cua tr
    const tdNo1 = document.createElement("td")
    const iNo1 = document.createElement("i")
    iNo1.classList.add("fab", "fa-angular", "fa-lg", "text-danger","me-3")
    const strongNo1 = document.createElement("strong")
    strongNo1.innerText = product.productName
    tdNo1.appendChild(iNo1)
    tdNo1.appendChild(strongNo1)
    tr.appendChild(tdNo1)

    // tao va xu ly the td so 2
    const tdNo2 = document.createElement("td")
    tdNo2.innerText = product.nsx
    tr.appendChild(tdNo2)

    // tao va xu ly the td so 3
    const tdNo3 = document.createElement("td")
    const spanNo3 = document.createElement("span")
    spanNo3.innerText = product.status;
    spanNo3.classList.add("badge", 'me-1')
    if (product.status === "con hang") {
      spanNo3.classList.add("bg-label-success")
    }else{
      spanNo3.classList.add("bg-label-danger")
    }
    tdNo3.appendChild(spanNo3);
    tr.appendChild(tdNo3)


    // tao va xu ly the td for Price
    const tdForPrice = document.createElement("td")
    tdForPrice.innerText = product.price ?? 0
    tr.appendChild(tdForPrice)

    // tao va xu ly the td so 5
    const tdNo4 = document.createElement("td")
    const divNo4 = document.createElement("div")
    divNo4.classList.add("dropdown")


    const btnNo4 = document.createElement("button")
    btnNo4.classList.add("btn", "p-0", "dropdown-toggle", "hide-arrow")
    btnNo4.setAttribute("data-bs-toggle", "dropdown")

    const iNo4InsideDropdown = document.createElement("i")
    iNo4InsideDropdown.classList.add("bx", "bx-dots-vertical-rounded")
    btnNo4.appendChild(iNo4InsideDropdown)
    divNo4.appendChild(btnNo4)

    const divDropdownMenu = document.createElement("div")
    divDropdownMenu.classList.add("dropdown-menu")
    const aEdit = document.createElement("a")
    aEdit.addEventListener("click", ()=> {
      setLocalStorage(ID_EDIT, product.id)
      window.location.href = "/my-product/edit/index.html";
    })

    aEdit.classList.add("dropdown-item")
    const iEdit = document.createElement("i")
    iEdit.classList.add("bx", "me-1", "bx-edit-alt")
    const spanAEdit = document.createElement("span")
    spanAEdit.innerText = "Edit"
    aEdit.appendChild(iEdit)
    aEdit.appendChild(spanAEdit)
    divDropdownMenu.appendChild(aEdit)
    
    const aDelete = document.createElement("a")
    
    aDelete.addEventListener("click", (e)=> {
      // lay ID can xoa ra
      console.log(product.id);
      // get products from local
      const products = getItemInLocalStorage(PRODUCTS)
      // thuc hien xoa du lieu tren local
      const newProducts = products.filter(item => item.id != product.id)
      setLocalStorage(PRODUCTS, newProducts)
      window.location.reload()
    })

    aDelete.classList.add("dropdown-item") 
    const iDelete = document.createElement("i")
    iDelete.classList.add("bx", "me-1", "bx-trash")
    const spanADelete = document.createElement("span")
    spanADelete.innerText = "Delete"
    aDelete.appendChild(iDelete)
    aDelete.appendChild(spanADelete)
    divDropdownMenu.appendChild(aDelete)

    tdNo4.appendChild(btnNo4)
    tdNo4.appendChild(divDropdownMenu)
    tr.appendChild(tdNo4)
    tBody.appendChild(tr)
  }

  console.log("loaded");
})