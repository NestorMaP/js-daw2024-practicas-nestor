// Cart logic

let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Add product to cart
function addProductToCart(id, nombre, precio) {
  let existingProduct = cart.find((product) => product.id === id);

  if (existingProduct) existingProduct.cantidad++;
  else cart.push({ id: id, nombre: nombre, precio: precio, cantidad: 1 });
  saveCart();
}

// Delete product from cart
function removeProductFromCart(id) {
  cart = cart.filter((p) => p.id !== id);
  saveCart();
}

// Save in localStorage
function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartUI();
}

// Empty cart
function emptyCart() {
  cart = [];
  localStorage.removeItem('cart');
  updateCartUI();
}
