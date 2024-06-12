function findGreaterNumber() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    if (num1 > num2) {
        console.log(`${num1} is greater than ${num2}`);
    } else if (num2 > num1) {
        console.log(`${num2} is greater than ${num1}`);
    } else {
        console.log(`${num1} and ${num2} are equal`);
    }
}
