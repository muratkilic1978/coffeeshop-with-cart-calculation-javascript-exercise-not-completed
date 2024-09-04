// Function to add one item to the cart for a specific product and update the input field
function addToCart(product) {
    let quantity = document.getElementById(product).value;
    document.getElementById(product).value = parseInt(quantity) + 1;

    updateTotalPrice(product); // opdater totalsum

}

// Function to remove one item from the cart for a specific product and update the input field
function removeFromCart(product) {
    let quantity = document.getElementById(product).value;
    if (quantity > 0) {
        document.getElementById(product).value = parseInt(quantity) - 1;

        updateTotalPrice(product); // opdater totalsum
    }
}

// Function to increase the cart quantity by a specified amount for a specific product
function increaseQuantity(product, amount) {
    let quantity = document.getElementById(product).value;
    document.getElementById(product).value = parseInt(quantity) + amount;

    updateTotalPrice(product); // opdater totalsum
}

// Function to reset the cart quantity to 0 for a specific product and update the input field
function resetCart(product) {
    document.getElementById(product).value = 0;

    updateTotalPrice(product); // opdater totalsum
}

function updateTotalPrice(product) 
{
    const quantityElement = document.getElementById(product);
    const priceElement = document.getElementById(product + '-price');
    const totalElement = document.getElementById(product+ '-total');

    if ( quantityElement && priceElement && totalElement ) {
        const quantity = parseInt(quantityElement.value);
        const price = parseInt(priceElement.value);
        const total = quantity * price;

        totalElement.value = total;
        checkoutTotalPrice('coffee', 'espresso', 'latte');
    }
}

function checkoutTotalPrice(productA, productB, productC)
{
    const totalPriceProductA = document.getElementById(productA + '-total');
    const totalPriceProductB = document.getElementById(productB + '-total');
    const totalPriceProductC = document.getElementById(productC + '-total');

    const totalPriceA = parseInt(totalPriceProductA.value); // henter total prisen til ProductA
    const totalPriceB = parseInt(totalPriceProductB.value); // henter total prisen til ProductB
    const totalPriceC = parseInt(totalPriceProductC.value); // henter total prisen til ProductC

    const totalSum = totalPriceA + totalPriceB + totalPriceC;
    //console.log(totalSum);
    //alert(totalSum);  
    document.getElementById('totalSum').value = totalSum;                                    
}


