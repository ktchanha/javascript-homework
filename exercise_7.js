// prompt() returns a string, so age + 1 would concatenate "1" instead of adding it as a number.

const age = Number(prompt("How old are you?\n"));

console.log(`Next year you will be ${age + 1} years old.`);

prompt() აბრუნებს string-ს, ამიტომ age + 1 მნიშვნელობებს აერთებს ერთმანეთთან, ნაცვლად იმისა, რომ 1 დაუმატოს ასაკს