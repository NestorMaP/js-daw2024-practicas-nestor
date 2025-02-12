document.addEventListener("DOMContentLoaded", async function () {
    let products = await getProducts();
    showProducts(products);
    updateCartUI();

    // Process order button
    document.getElementById("tramitar").addEventListener("click", async function() {
        // cart defined and initialized in cart.js
        if (cart.length === 0) {
            alert("El carrito está vacío.");
            return;
        }

        let success = await processOrder(cart);
        if (success) {
            alert("Pedido tramitado con éxito.");
            emptyCart();
        } else {
            alert("Error al tramitar el pedido.");
        }
    });

    // Empty cart button
    document.getElementById("borrar").addEventListener("click", function() {
        if (confirm("¿Estás seguro de que quieres vaciar el carrito?")) {
            emptyCart();
        }
    });
});