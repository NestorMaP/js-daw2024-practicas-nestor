// DOM Handling

function showProducts(products) {
    let container = document.getElementById('items');
    container.innerHTML = ""; // Clean before show them

    products.forEach(product => {
        let div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            ${product.nombre}</br>
            <img src="../img/${product.foto}" class="card-image">
            ${product.precio} €
            <div class="unidades">
                <span id="cantidad-${product.id}">1</span>
                <button onclick="
                    addProductToCart(${product.id}, '${product.nombre}', ${product.precio})
                ">+</button>
            </div>       
        `;
        container.appendChild(div);
    });
}

function updateCartUI() {
    // DOM Elements
    let cartList = document.getElementById("lista-carrito");
    let productTotal = document.getElementById("total");
    cartList.innerHTML = "";
    let total = 0;

    cart.forEach((product) => {
        total += product.precio * product.cantidad;
        let li = document.createElement("li");

        li.innerHTML = `
            ${product.nombre} - ${product.cantidad} * ${product.precio}€
            <button onclick="removeProductFromCart(${product.id})">X</button>
            `;
        cartList.appendChild(li);
    });
    productTotal.textContent = `Total: ${total.toFixed(2)}`;
}