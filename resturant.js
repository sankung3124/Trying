let cart= [];
let totalPrice= 0;
 
function addToCart(itemName, itemPrice){
    cart.push({
        name:itemName,
        price:itemPrice
    });
    totalPrice+=itemPrice
    displayCart();


}
function displayCart(){
    const cartItem= document.getElementById('cart-items');
    const totalPriceElement= document.getElementById('total-price');
    cartItem.innerHTML ="";
    cart.forEach((item, index )=>{
        const li = document.createElement('li');
        li.textContent= `${item.name } - D ${item.price}`
        cartItem.appendChild(li);
        totalPriceElement.textContent=totalPrice
    })
}
document.getElementById('checkout-btn').addEventListener('click', ()=>{
    alert("proceeding to checkout!")
})