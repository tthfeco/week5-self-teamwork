export  function albumDataGenerator (bandName, albumTitle, descript, publication){
  return {
    artist: bandName,
    title: albumTitle,
    description: descript,
    year: publication,
  }
 }