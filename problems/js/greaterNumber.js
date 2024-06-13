function findGreaterNumber() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const result = document.getElementById('result');

    if (num1 > num2) {
        result.textContent = `${num1} is greater than ${num2}`;
    } else if (num2 > num1) {
        result.textContent = `${num2} is greater than ${num1}`;
    } else {
        result.textContent = `${num1} and ${num2} are equal`;
    }
}
