const celsius = number(prompt("temperature in celsius"));
const fahrenheit = Math.round((celsius * 9 / 5 + 32) * 10) / 10;

console.log(`${celsius}°C is ${fahrenheit}°F`);
