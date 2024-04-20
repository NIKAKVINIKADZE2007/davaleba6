let age = Number(prompt('Enter your age'));
let type = prompt('Enter movie type(regular or 3D)');
let time = prompt('time or day(matinee or evening)');
let sum = 0;
switch (true) {
  case age < 10:
    sum += 5;
    break;
  case age <= 65:
    sum += 15;
    break;
  case age > 65:
    sum += 10;
    break;
}
switch (true) {
  case type == '3D':
    sum += 5;
    break;
  default:
    sum += 0;
}
switch (true) {
  case time == 'evening':
    sum += 5;
  default:
    sum += 0;
}
console.log(' ბილეთის ფასი თქვენთვის არის: ' + sum + ' ლარი');
