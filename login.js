

// Function to handle the login process
function login(username , password) {


  
  // Check if the entered credentials are valid
  if (username === "aaa" && password === "123") {
   // showLoginMessage('Login successful!', 'green');
   console.log("check");
  } else {
    showLoginMessage('Invalid username or password.', 'red');
  }

  console.log("check");
}

// Function to display the login result message
function showLoginMessage(message, color) {
  const messageElement = document.getElementById('loginMessage');
  messageElement.textContent = message;
  messageElement.style.color = color;
}

// Attach the login form submit event to the handleLogin function
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', handleLogin);
