function calculateGrade() {
    const marks = parseFloat(document.getElementById('marks').value);
    const result = document.getElementById('result');
    let grade;
    let gpa;
    let evaluation;

    if (marks > 100 || marks < 0) {
        grade = 'Invalid input';
        gpa = 'N/A';
        evaluation = '';
    } else if (marks >= 90) {
        grade = 'A';
        gpa = 4.00;
        evaluation = 'Excellent';
    } else if (marks >= 85) {
        grade = 'A-';
        gpa = 3.70;
        evaluation = 'Excellent';
    } else if (marks >= 80) {
        grade = 'B+';
        gpa = 3.30;
        evaluation = 'Good';
    } else if (marks >= 75) {
        grade = 'B';
        gpa = 3.00;
        evaluation = 'Good';
    } else if (marks >= 70) {
        grade = 'B-';
        gpa = 2.70;
        evaluation = 'Good';
    } else if (marks >= 65) {
        grade = 'C+';
        gpa = 2.30;
        evaluation = 'Passing';
    } else if (marks >= 60) {
        grade = 'C';
        gpa = 2.00;
        evaluation = 'Passing';
    } else if (marks >= 55) {
        grade = 'C-';
        gpa = 1.70;
        evaluation = 'Passing';
    } else if (marks >= 50) {
        grade = 'D+';
        gpa = 1.30;
        evaluation = 'Deficient Passing';
    } else if (marks >= 45) {
        grade = 'D';
        gpa = 1.00;
        evaluation = 'Deficient Passing';
    } else {
        grade = 'F';
        gpa = 0.00;
        evaluation = 'Failing';
    }

    result.textContent = `Your grade is ${grade}, GPA: ${gpa}, Evaluation: ${evaluation}`;
}
