// Initialize the cart as an empty array
let cart = [];
let total = 0;

// Function to add items to the cart
function addToCart(productName, price) {
  cart.push({ name: productName, price: price });
  total += price;
  updateCartDisplay();
}


// Function to remove items from the cart
function removeFromCart(index) {
    total -= cart[index].price;
    cart.splice(index, 1);
    updateCartDisplay();
  }


  // Function to clear the entire cart
function clearCart() {
    cart = [];
    total = 0;
    updateCartDisplay();
  }
  
// Function to update the cart display in the HTML
function updateCartDisplay() {
    const cartElement = document.getElementById('cart-items');
    const totalElement = document.getElementById('cart-total');
    cartElement.innerHTML = '';
  
    cart.forEach((item, index) => {
      const itemElement = document.createElement('div');
      itemElement.innerHTML = `${item.name} - $${item.price} <button onclick="removeFromCart(${index})">Remove</button>`;
      cartElement.appendChild(itemElement);
    });
  
    totalElement.innerText = total;
  }