// students score, total possible score. 

let studentScore = 750;
let totalPossibleScore = 100;

let generateLetterGrade = function (percentGrade) {
  //check validity:
  if(!(typeof percentGrade === 'number')){
    throw Error('Percent grade must be a number');
  }
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
  if(!(typeof student === 'number' && typeof total === 'number')){
    throw Error('Function arguments must be numbers.');
  }
  if(student > total){
    throw Error('Number of answered questions cannot be greater than the total number of questions.');
  }
  let percentGrade = (student / total) * 100;
  let letterGrade = generateLetterGrade(percentGrade);
  return `You got a ${letterGrade} (${percentGrade}%)!`;
}

try{
  console.log(generateGradeText(studentScore , totalPossibleScore));
} catch (e) {
  console.log(e.message);
}
