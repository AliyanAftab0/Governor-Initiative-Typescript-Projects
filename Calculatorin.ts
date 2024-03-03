import inquirer from "inquirer";
const input1 = await inquirer.prompt({
    name: "num1",
    type: "number",
    message: "Kindly Enter Your First No:"
})
const input2 = await inquirer.prompt({
    name: "num2",
    type: "number",
    message: "Kindly Enter Your Second No:"
})
let addition: number = input1.num1 + input2.num2
let subtraction: number = input1.num1 - input2.num2
let multiplication: number = input1.num1 * input2.num2
let division: number = input1.num1 / input2.num2
let exponential: number = input1.num1 ** input2.num2
let modulos: number = input1.num1 % input2.num2
console.log(`Addition : ${addition}`);
console.log(`Subtraction : ${subtraction}`);
console.log(`Multiplication : ${multiplication}`);
console.log(`Division : ${division}`);
console.log(`Expnential : ${exponential}`);
console.log(`Modulos : ${modulos}`);