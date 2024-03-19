export function yearGenerator (name){
  let sum = 0;
  let firstSecondChar = 0;
  
  for (let i = 0; i < name.length; i++){
    sum += name[i].charCodeAt(0);
  }
  if (sum % 2 === 0){
    firstSecondChar = 20;
  } else {
    firstSecondChar = 19;
  }

  const resultYear = lastSecondNum(firstSecondChar, sum);

  if (resultYear > 2024){
    return subtraction(resultYear);
  } else{
    return resultYear;
  }

}

function lastSecondNum (firstSecondNum, sum){
  let stringNum = sum.toString();
  let lastSecondChar = stringNum[2] + stringNum[3];
  let year = `${firstSecondNum}${lastSecondChar}`;
  year = parseInt(year);
  return year;
}

function subtraction (year){
    const number = year - 2024;
    return year - number;
}
