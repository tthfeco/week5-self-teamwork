export { nouns, verbs, adjectives, names };

import { brandNameGenerator } from './bandName.mjs';
import { albumTitleGenerator } from './albumTitleGen.mjs';
import { descriptionGenerator } from './descriptionGen.mjs';
import { yearGenerator } from './yearGen.mjs'; 
import { albumDataGenerator } from './albumDataGen.mjs';


let nouns = ['Hammer', 'Drill', 'House', 'Rose', 'Banana', 'Lamp'];
let verbs = ['Help', 'Run', 'Play', 'Cook', 'Read', 'Write'];
let adjectives = ['Colorful', 'Black', 'Dark', 'Hard', 'Soft'];
let names = ['Spiderman', 'Frodo', 'Batman', 'Grinch', 'Trump', 'Clinton'];
let conjuctions = ['and', 'but', 'yet'];

const allWords = nouns.concat(verbs, adjectives, names);
const randomIndex = Math.floor(Math.random() * allWords.length);

const randomTitle = Math.floor(Math.random() * verbs.length);
const randomTitle2 = Math.floor(Math.random() * nouns.length);

const randomAdjective = Math.floor(Math.random() * adjectives.length);
const randomConjuction = Math.floor(Math.random() * conjuctions.length);
const randomAdjective2 = Math.floor(Math.random() * adjectives.length);

function main() {
  const createdBandName = brandNameGenerator(allWords[randomIndex], allWords);
  const createdAlbumTitle = albumTitleGenerator(createdBandName, verbs[randomTitle], nouns[randomTitle2]);
  const createdDescription = descriptionGenerator(adjectives[randomAdjective], conjuctions[randomConjuction], adjectives[randomAdjective2]);
  const createdYear = yearGenerator(createdBandName);
  const createdAlbum = albumDataGenerator(createdBrandName, createdAlbumTitle, createdDescription, createdYear);

  console.log(createdAlbum);
}

main();