export function albumTitleGenerator(createdBrandName, verbs, nouns){
  return createdBrandName + verbs + nouns;
  }

const createdAlbumTitle = albumTitleGenerator(createdBrandName, verbs[randomTitle], nouns[randomTitle2]);
  
console.log(createdAlbumTitle);