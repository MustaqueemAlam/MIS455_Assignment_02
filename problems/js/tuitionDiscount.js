function calculateDiscount() {
    const name = document.getElementById('name').value;
    const fees = parseFloat(document.getElementById('fees').value);
    const birthYear = parseInt(document.getElementById('birthYear').value);
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;
    const result = document.getElementById('result');
    let discount = 0;

    if (fees > 50000 && age > 21) {
        discount = 0.15;
    } else if (fees > 40000 && age > 20) {
        discount = 0.10;
    } else if (fees > 30000 && age > 19) {
        discount = 0.05;
    } else {
        discount = 0.02;
    }

    const discountAmount = fees * discount;
    const payableAmount = fees - discountAmount;

    result.textContent = `${name}, your discount amount is ${discountAmount.toFixed(2)} and the payable tuition fees are ${payableAmount.toFixed(2)}`;
}
