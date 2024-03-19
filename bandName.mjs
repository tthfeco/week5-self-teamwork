export function brandNameGenerator (name, arrayOfWords){
  let sum = 0;
  for (let i = 0; i < name.length; i++){
    const letter = name[i].charCodeAt(0);
    sum += letter;
  }
  return `${name} ${findSecondName(sum, arrayOfWords)}`;
}

function findSecondName (number, array){
  let counter = 0;
  for (let i = 0; i <= number; i++){
    counter++;
    if(counter >= array.length){
      counter = 0;
    }
    if (i === number){
      return array[counter];
    }
  }
}