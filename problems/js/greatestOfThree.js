function findGreatestNumber() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const num3 = parseFloat(document.getElementById('num3').value);
    const result = document.getElementById('result');

    let greatest = num1;

    if (num2 > greatest) {
        greatest = num2;
    }

    if (num3 > greatest) {
        greatest = num3;
    }

    result.textContent = `The greatest number is ${greatest}`;
}
