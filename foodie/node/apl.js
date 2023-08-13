document.getElementById('foodForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const food = document.getElementById('food').value;
    const quantity = document.getElementById('quantity').value;

    const output = document.getElementById('output');
    output.innerHTML = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Food:</strong> ${food}</p>
        <p><strong>Quantity:</strong> ${quantity}</p>
    `;
});
