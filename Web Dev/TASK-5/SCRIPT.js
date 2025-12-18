let cart=JSON.parse(localStorage.getItem("cart"))||[];

function addToCart(name,price){
cart.push({name,price});
localStorage.setItem("cart",JSON.stringify(cart));
alert("Added to cart");
}

function loadCart(){
let list=document.getElementById("cartList");
if(!list)return;
let total=0;
list.innerHTML="";
cart.forEach(p=>{
total+=p.price;
list.innerHTML+=`<li>${p.name} - ₹${p.price}</li>`;
});
document.getElementById("total").innerText="Total: ₹"+total;
}
loadCart();

function resetCart(){
    if(confirm("Are you sure you want to clear the cart?")){
        cart.length = 0;
        localStorage.setItem("cart", JSON.stringify(cart));
        loadCart();
    }
}
