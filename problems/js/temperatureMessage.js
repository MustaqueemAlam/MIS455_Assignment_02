function displayTemperatureMessage() {
    const temp = parseFloat(document.getElementById('temperature').value);
    const result = document.getElementById('result');
    let message;

    if (temp < 0) {
        message = 'Freezing weather';
    } else if (temp <= 10) {
        message = 'Very Cold weather';
    } else if (temp <= 20) {
        message = 'Cold weather';
    } else if (temp <= 30) {
        message = 'Normal Temp';
    } else if (temp <= 40) {
        message = 'It\'s Hot';
    } else {
        message = 'It\'s Very Hot';
    }

    result.textContent = message;
}
