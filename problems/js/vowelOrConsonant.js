function checkVowelOrConsonant() {
    const char = document.getElementById('char').value.toLowerCase();
    const result = document.getElementById('result');
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    if (vowels.includes(char)) {
        result.textContent = `${char.toUpperCase()} is a vowel.`;
    } else {
        result.textContent = `${char.toUpperCase()} is a consonant.`;
    }
}
