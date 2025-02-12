// AJAX fetc HANDLING

// Get products from the DataBase using PHP
async function getProducts() {
    try{
        let response = await fetch("../php/todos_productos.php");
        let json = await response.json();
        return json;
    } catch (error) {
        console.error(`Error obtaining the products: ${error}`);
    }
}

// Send cart to the DataBase
async function processOrder(cart) {
    try {
        let response = await fetch("../php/tramito_carrito", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(carrito)
        });

        let result = await response.text();
        return result.trim() === "ok";
    } catch (error) {
        console.error(`Error processing the cart: ${error}`);
    }
}
