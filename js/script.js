// Function to add one item to the cart for a specific product and update the input field
function addToCart(product) {
    let quantity = document.getElementById(product).value;
    document.getElementById(product).value = parseInt(quantity) + 1;
}

// Function to remove one item from the cart for a specific product and update the input field
function removeFromCart(product) {
    let quantity = document.getElementById(product).value;
    if (quantity > 0) {
        document.getElementById(product).value = parseInt(quantity) - 1;
    }
}

// Function to increase the cart quantity by a specified amount for a specific product
function increaseQuantity(product, amount) {
    let quantity = document.getElementById(product).value;
    document.getElementById(product).value = parseInt(quantity) + amount;
}

// Function to reset the cart quantity to 0 for a specific product and update the input field
function resetCart(product) {
    document.getElementById(product).value = 0;
}

