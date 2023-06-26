// Exemplos: number
let num1: number = 23.0;
let num2: number = 0x78CF;
let num3: number = 0o577;
let num4: number = 0b110001;

console.log('Number - Ponto Flutuante:', num1);
console.log('Number - Hexadecimal:', num2);
console.log(typeof(num2));
console.log('Number - Octal:', num3);
console.log(typeof(num3));
console.log('Number - Binário:', num4);

// Exemplos: bigint ES2020
let big1: bigint = 900077222414n;
let big2: bigint = 0b0000000000000000010n;
let big3: bigint = 0x2000000000000003n;
let big4: bigint = 0o400000000003n;

console.log('BigInt - Inteiro:', big1);
console.log('BigInt - Binário:', big2);
console.log('BigInt - Hexadecimal:', big3);
console.log('BigInt - Octal:', big4);