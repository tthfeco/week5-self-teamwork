let nouns = ['Hammer', 'Drill', 'House', 'Rose', 'Banana', 'Lamp'];
let verbs = ['Help', 'Run', 'Play', 'Cook', 'Read', 'Write'];
let adjectives = ['Colorful', 'Black', 'Dark', 'Hard', 'Soft'];
let names = ['Spiderman', 'Frodo', 'Batman', 'Grinch', 'Trump', 'Clinton'];

const allWords = nouns.concat(verbs, adjectives, names);
const randomIndex = Math.floor(Math.random() * allWords.length);

export { nouns, verbs, adjectives, names };

import { brandNameGenerator } from './bandName.mjs';

function main() {
  const createdBandName = brandNameGenerator(allWords[randomIndex], allWords);
  const createdYear = yearGenerator(createdAlbumTitle);
}

main();