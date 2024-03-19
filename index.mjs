let nouns = ['Hammer', 'Drill', 'House', 'Rose', 'Banana', 'Lamp'];
let verbs = ['Help', 'Run', 'Play', 'Cook', 'Read', 'Write'];
let adjectives = ['Colorful', 'Black', 'Dark', 'Hard', 'Soft'];
let names = ['Spiderman', 'Frodo', 'Batman', 'Grinch', 'Trump', 'Clinton'];

const allWords = nouns.concat(verbs, adjectives, names);
const randomIndex = Math.floor(Math.random() * allWords.length);

const randomAdjective = Math.floor(Math.random() * adjectives.length);
const randomConjuction = Math.floor(Math.random() * conjuctions.length);
const randomAdjective2 = Math.floor(Math.random() * adjectives.length);

export { nouns, verbs, adjectives, names };

import { brandNameGenerator } from './bandName.mjs';
import { descriptionGenerator } from './descriptionGen.mjs';

function main() {
  const createdBandName = brandNameGenerator(allWords[randomIndex], allWords);
  const createdDescription = descriptionGenerator( adjectives[randomAdjective], conjuctions[randomConjuction], adjectives[randomAdjective2]);
}

main();