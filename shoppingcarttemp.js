// Retrieve cart data from local storage
const cart = JSON.parse(localStorage.getItem('cart')) || [];
let total = 0;

// Function to display products
function displayProducts() {
  // Retrieve products and display them in the 'products' div
  // You can fetch products from a server or define them here
}

// Function to add an item to the cart
function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    total += price;
    updateCartDisplay();
    saveCartToLocalStorage();
  }

// Function to update cart display
// function updateCartDisplay() {
//   const cartItemsContainer = document.getElementById('cart-items');
//   cartItemsContainer.innerHTML = '';

//   cart.forEach(item => {
//     const li = document.createElement('li');
//     li.textContent = item.name; // You can display other item info too
//     cartItemsContainer.appendChild(li);
//   });
// }


function updateCartDisplay() {
    const cartElement = document.getElementById('cart-items');
    const totalElement = document.getElementById('cart-total');
    cartElement.innerHTML = '';
  
    cart.forEach((item, index) => {
      const itemElement = document.createElement('div');
      itemElement.innerHTML = `${item.name} - $${item.price} <button onclick="removeFromCart(${index})" >Remove</button>`;
      cartElement.appendChild(itemElement);
    });
  
    totalElement.innerText = total;
  }
// Function to save cart data to local storage
function saveCartToLocalStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Initial setup
displayProducts();
updateCartDisplay();

// Example usage: Add items to the cart
document.addEventListener('DOMContentLoaded', () => {
  const addToCartButtons = document.querySelectorAll('.add-to-cart-button');
  addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
      const productName = button.getAttribute('data-product-name');
      addToCart({ name: productName });
    });
  });
});
