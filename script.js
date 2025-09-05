let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Function to add items to cart
function addToCart(item, price) {
  cart.push({ item, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

// Function to remove an item by index
function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

// Function to clear the cart
function clearCart() {
  cart = [];
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

// Function to render cart
function renderCart() {
  const cartList = document.getElementById("cart");
  const totalElement = document.getElementById("total");
  const clearButton = document.getElementById("clearCart");

  if (!cartList || !totalElement || !clearButton) return;

  cartList.innerHTML = "";
  let total = 0;

  cart.forEach((c, index) => {
    const newItem = document.createElement("li");
    newItem.innerHTML = `
      ${c.item} - $${c.price} 
      <button class="remove-btn" onclick="removeFromCart(${index})">❌ Remove</button>
    `;
    cartList.appendChild(newItem);
    total += c.price;
  });

  totalElement.textContent = "Total: $" + total;

  // Show or hide the clear cart button
  clearButton.style.display = cart.length > 0 ? "inline-block" : "none";
}

// Render cart on page load
window.onload = renderCart;
