const text  = "55";
const number = 55;
const boolean = true;
const decimal = 4.5; 

console.log(typeof text);
console.log(typeof number);
console.log(typeof boolean);
console.log(typeof decimal);

console.log(`"42" == 42: ${text == number}`);
console.log(`"42" === 42: ${text === number}`);
console.log(`"42" != 42: ${text != number}`);
console.log(`"42" !== 42: ${text !== number}`);


ჩვეულებრივ, მე ვირჩევ ===-ს, რადგან ის ამოწმებს როგორც მნიშვნელობას, ასევე მონაცემის ტიპს.