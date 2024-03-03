import inquirer from "inquirer";
let isFriend = await inquirer.prompt([{
    name: "name",
    type: "string",
    message: "Enter Your Friend Name: "
}])
if(isFriend.name === "Aliyan" || isFriend.name === "Daniyal" || isFriend.name === "Hasnain" || isFriend.name === "Huzaifa" || isFriend.name === "Umer" && isFriend.name === "Waqas"){
    console.log(`${isFriend.name} is your friend. `);
} else {
    console.log(`${isFriend.name} is not your friend. `);
}