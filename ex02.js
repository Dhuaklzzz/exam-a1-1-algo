function formaterDuree(minutes) {
  return minutes / 60 + "h" + (minutes % 60) + "min";
}

console.log(formaterDuree(135)); // "2h15min"
console.log(formaterDuree(60)); // "1h0min"
console.log(formaterDuree(45)); // "0h45min"
