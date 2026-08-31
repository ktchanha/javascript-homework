const PI = 3.14159;

const radius = Number(prompt("Radius:"));

const area = Math.round(PI * radius ** 2 * 100) / 100;

console.log(`A circle with radius ${radius} has area ${area}`);
