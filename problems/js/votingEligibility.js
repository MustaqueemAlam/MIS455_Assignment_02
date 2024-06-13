function checkVotingEligibility() {
    const age = parseInt(document.getElementById('age').value);
    const result = document.getElementById('result');

    if (age >= 18) {
        result.textContent = 'You are eligible to vote.';
    } else {
        result.textContent = 'You are not eligible to vote.';
    }
}
