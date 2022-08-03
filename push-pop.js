var number = [15, 25, 65, 75, 85, 95];
var persons =["Saqib", "Soleh", "Saad", "Eusha"];

number.push(100);
var lastPoopedNum = number.pop();

persons.push("Umama");
persons.pop();

number.unshift(10);
var newNum = number.shift();

console.log(persons);
console.log(number);
console.log(lastPoopedNum);
console.log(newNum);