const examPointsInput = prompt('Please add your points here');

let grade;

if (examPointsInput >= 1 && examPointsInput <= 100) {

  if (examPointsInput < 51) {
    grade = 5;
    alert('Sorry, you have failed this exam')
  }
  else if (examPointsInput >= 51 && examPointsInput <= 60) {
    grade = 6;
    alert(`Congratulations, you have passed the exam. Your grade is: ${grade}`)
  }
  else if (examPointsInput >= 61 && examPointsInput <= 70) {
    grade = 7;
    alert(`Congratulations, you have passed the exam. Your grade is: ${grade}`)
  }
  else if (examPointsInput >= 71 && examPointsInput <= 80) {
    grade = 8;
    alert(`Congratulations, you have passed the exam. Your grade is: ${grade}`)
  }
  else if (examPointsInput >= 81 && examPointsInput <= 90) {
    grade = 9;
    alert(`Congratulations, you have passed the exam. Your grade is: ${grade}`)
  }
  else if (examPointsInput >= 91 && examPointsInput <= 100) {
    grade = 10;
    alert(`Congratulations, you have passed the exam. Your grade is: ${grade}`)
  }
} else {
  alert('The inputed value is invalid. Please input a value between 1 and 100')
}



