// students score, total possible score. 

let studentScore = 75;
let totalPossibleScore = 100;

let generateLetterGrade = function (percentGrade) {

  if( percentGrade >= 90) {
    return 'A';

  } else if (percentGrade >= 80) {
    return 'B';

  } else if (percentGrade >= 70) {
    return 'C';

  } else if (percentGrade >= 60) {
    return 'D';
  } else {
    return 'F';
  }
}

let generateGradeText = function ( student , total) {

  let percentGrade = (student / total) * 100;
  let letterGrade = generateLetterGrade(percentGrade);
  return `You got a ${letterGrade} (${percentGrade}%)!`;
}

console.log(generateGradeText(studentScore , totalPossibleScore));