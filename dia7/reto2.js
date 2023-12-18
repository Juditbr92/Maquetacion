const cart = []

function addToCart(clothesNameId, priceId){
    const productName = document.getElementById(clothesNameId).innerText;
    const productPrice = document.getElementById(priceId).innerText;

    const product = {
        name: productName,
        price: productPrice,
    };
    
    cart.push(product);
    console.log(cart)  
}

function processCart(item) {
    const listItem = document.createElement('li');
    listItem.innerText = item.name + ' ' + item.price;
    cartList.appendChild(listItem);
}

function clearList() {
    cartList.innerHTML = '';
}

function cartUpdate(){
    const cartList = document.getElementById("cartList");
    const totalPrice = document.getElementById("sumaCompra");
    
    clearList();

    cart.forEach(processCart)
    const total = cart.reduce(function(acc, item){
        return acc + parseFloat(item.price);
    }, 0)

    sumaCompra.innerText = 'TOTAL COMPRA: ' + total + '€';
}



