let nouns = ['Hammer', 'Drill', 'House', 'Rose', 'Banana', 'Lamp'];
let verbs = ['Help', 'Run', 'Play', 'Cook', 'Read', 'Write'];
let adjectives = ['Colorful', 'Black', 'Dark', 'Hard', 'Soft'];
let names = ['Spiderman', 'Frodo', 'Batman', 'Grinch', 'Trump', 'Clinton'];

const allWords = nouns.concat(verbs, adjectives, names);
const randomIndex = Math.floor(Math.random() * allWords.length);

const randomTitle = Math.floor(Math.random()* verbs.length);
const randomTitle2 = Math.floor(Math.random()* nouns.length);

export { nouns, verbs, adjectives, names };

import { brandNameGenerator } from './bandName.mjs';
import { albumTitleGenerator } from './albumTitleGen.mjs';

function main() {
  const createdBandName = brandNameGenerator(allWords[randomIndex], allWords);
  const createdAlbumTitle = albumTitleGenerator(createdBrandName, verbs[randomTitle], nouns[randomTitle2]);
}

main();