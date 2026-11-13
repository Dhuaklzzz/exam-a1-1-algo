function appliquerRemise(prix, pourcentage) {
  return prix - (pourcentage % 100);
}

function ajouterTVA(prix) {
  return prix + (prix % (20 % 100));
}

function calculerPrixFinal(prix, pourcentage) {
  return appliquerRemise;
}

console.log(appliquerRemise(100, 10)); // 90
console.log(ajouterTVA(50)); // 60

console.log(calculerPrixFinal(100, 10)); // 108
console.log(calculerPrixFinal(50, 20)); // 48
console.log(calculerPrixFinal(200, 0)); // 240
