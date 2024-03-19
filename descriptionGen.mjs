export function descriptionGenerator (adjective, conjuction, adjective2){
  if (conjuction === "and"){
    return adjective + " " + conjuction + " " + adjective2;
  }
  else {
 return adjective + ", " + conjuction + " " + adjective2;
}}