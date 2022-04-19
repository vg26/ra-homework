function examResults(examPoints) {
    switch (true) {
        case (examPoints >=1 && examPoints < 51):
            grade = 5;
            return ('Sorry, you have failed this exam');
        case (examPoints >= 51 && examPoints <= 60):
            grade = 6;
            return (`Congratulations, you have passed the exam. Your grade is: ${grade}`);
        case (examPoints >= 61 && examPoints <= 70):
            grade = 7;
            return (`Congratulations, you have passed the exam. Your grade is: ${grade}`);
        case (examPoints >= 71 && examPoints <= 80):
            grade = 8;
            return (`Congratulations, you have passed the exam. Your grade is: ${grade}`);
        case (examPoints >= 81 && examPoints <= 90):
            grade = 9;
            return (`Congratulations, you have passed the exam. Your grade is: ${grade}`);
        case (examPoints >= 91 && examPoints <= 100):
            grade = 10;
            return (`Congratulations, you have passed the exam. Your grade is: ${grade}`);
        default:
            return 'Invalid exam points';
    }
}
const examFinal = examResults(66);
console.log(examFinal);