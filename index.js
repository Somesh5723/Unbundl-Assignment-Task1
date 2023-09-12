const quantityInput = document.getElementById('quantity');
const totalSpan = document.getElementById('total');

quantityInput.addEventListener('input', updateTotal);

function updateTotal() {
    const quantity = parseInt(quantityInput.value) || 1;
    const price = 30.00; // Adjust the price as needed
    const total = (quantity > 8) ? 8 * price : quantity * price;

    totalSpan.textContent = total.toFixed(2);
}

// Initialize total on page load
updateTotal();
