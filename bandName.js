export function brandNameGenerator (name){
  let sum = 0;
  for (let i = 0; i < name.length; i++){
    const letter = name[i].charCodeAt(0);
    sum += letter;
  }
  return `${name} ${findSecondName(sum)}`;
}

function findSecondName (number){
  let counter = 0;
  for (let i = 0; i <= number; i++){
    counter++;
    if(counter >= allWords.length){
      counter = 0;
    }
    if (i === number){
      return allWords[counter];
    }
  }
}