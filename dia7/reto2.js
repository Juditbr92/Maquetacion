const cart = [];

const container = document.getElementById("clothesContainer");

class Product {
    constructor(id, name, img, price){
        this.id = id,
        this.name = name, 
        this.img = img, 
        this.price = price
    }
}

const dataBase = [
    new Product(1, "Pantalón suelto gris", "./imagenes/pantalonLargo.webp", 20),
    new Product(2, "Vestido túnico", "./imagenes/vestido.webp", 18),
    new Product(3, "Falda mid print", "./imagenes/falda.jpeg", 12),
    new Product(4, "Cardigan Largo Rayas", "./imagenes/cardiganLargo.jpeg", 22),
    new Product(5, "Falda cebra", "./imagenes/faldacebra.jpeg", 20),
    new Product(6,"Abrigo de piel", "./imagenes/abriogPiel.jpeg", 54),
    new Product(7, "Pantalón alto", "./imagenes/pantalonAlto.jpeg", 26),
    new Product(8, "Traje chaqueta", "./imagenes/traje.jpeg", 50)
]

function createCards(){
    let htmlCards = '';
    dataBase.forEach(product => {
        const card = `
        <div class="card" style="width: 18rem;">
                <img src=${product.img} class="cardImage">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <p class="cardPrice">${product.price}€</p>
                    <a class="btn btn-dark" onclick="addToCart(${product.id})">Añadir al carrito </a>
                </div>
            </div>`
            htmlCards += card;
    })  
        container.innerHTML = htmlCards;
    }

    function addToCart(id){
        cart.push(dataBase.find(item => item.id == id));

        console.log(cart)
    }
    
    function cartUpdate(){
        let cartElements = document.getElementById("cartList");
        cartElements.innerHTML = '';

        cart.forEach(product =>{
            let productElement = document.createElement('li');
            productElement.innerText = `${product.name} - ${product.price}€`;
            cartElements.appendChild(productElement);
        })

        const priceCalculation = document.querySelector("#sumaCompra");
        priceCalculation.textContent = `Precio total: ${totalPrice()} €`;
    }

    function totalPrice(){
        let totalPrice = 0;

        cart.forEach(product => {
            totalPrice += product.price;
        })
        return totalPrice
    }