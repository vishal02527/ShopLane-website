let cartItem = [];
let cartCount;
if(localStorage.getItem("cart-count") === null)
    localStorage.setItem("cart-count","0");
if(localStorage.getItem("cart-item") === null)
    localStorage.setItem("cart-item",JSON.stringify(cartItem));
cartCount = Number(localStorage.getItem("cart-count"));
let setCartCount = document.getElementById("cart-count");
setCartCount.innerHTML = cartCount;