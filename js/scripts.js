// scripts.js

var a = 4,
	b = 3,
	value;

value = (a * a) - (2 * a * b) + (b * b),

console.log('Final value of the calculation is equal to: ' + value);

if (value < 0) {
    console.log('Wynik jest ujemny');
} else if (value > 0) {
    console.log('Wynik jest dodatni');
} else {
    console.log('Wynik jest rowny zero');
}