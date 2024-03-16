var weightinkg = 70;
var heightinmeters = 1.75;
var bmi = weightinkg / (heightinmeters * heightinmeters);
var total = bmi.toFixed(2);
console.log("your bmi is ".concat(bmi));
