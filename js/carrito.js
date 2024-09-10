// Renderizar el carrito
function renderCarrito() {
    const cartItemsContainer = document.getElementById('cart-items');
    const storedCart = JSON.parse(localStorage.getItem('cart'));
    
    if (storedCart && storedCart.length > 0) {
        storedCart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.innerHTML = `
                <h3>${item.partido}</h3>
                <p>Cantidad: ${item.cantidad} - Tipo: ${item.tipo} - Total: $${item.total}</p>
            `;
            cartItemsContainer.appendChild(cartItem);
        });
    } else {
        cartItemsContainer.innerHTML = "<p>Tu carrito está vacío</p>";
    }
}

// Función para vaciar el carrito
function vaciarCarrito() {
    localStorage.removeItem('cart');
    renderCarrito();
}

// Cargar el carrito cuando se abre la página
window.onload = renderCarrito;
