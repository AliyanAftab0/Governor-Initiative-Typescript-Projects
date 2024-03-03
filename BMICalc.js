import inquirer from "inquirer";
const input1 = await inquirer.prompt({
    name: "num1",
    type: "number",
    message: "Enter Your WeightInKg: "
});
const input2 = await inquirer.prompt({
    name: "num2",
    type: "number",
    message: "Enter Your HeightInMeters: "
});
let bmi = input1.num1 / (input2.num2 * input2.num2);
console.log(`Your BMI is ${bmi} KG`);