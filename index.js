#! /usr/bin/env node
import showBanner from "node-banner";
import inquirer from "inquirer";
import { add, sub, mul, div, avg } from "./functions.js";
import chalk from "chalk";
import gradient from "gradient-string";
(async () => {
    await showBanner('Calculator', 'It can add,multiply,divide and subtract numbers', "red", "blue");
})();
let answers = [{
        name: "num1",
        type: "number",
        message: chalk.yellow("Enter your first number!"),
        validate: (input) => {
            if (isNaN(input)) {
                return chalk.red("Please enter a number");
            }
            return true;
        }
    },
    {
        name: "operation",
        type: "list",
        choices: ["add", "sub", "div", "mul", "avg"],
        message: gradient.instagram("Which operation do you want to perform?"),
    },
    {
        name: "num2",
        type: "number",
        message: chalk.yellow("Enter your second number!"),
        validate: (input) => {
            if (isNaN(input)) {
                return chalk.red("Please enter a number");
            }
            return true;
        }
    }];
let answer = [{
        name: "again",
        type: "confirm",
        message: "Do you want to calculate again?"
    }];
async function Calculator() {
    let condition = true;
    while (condition) {
        const { num1, num2, operation } = await inquirer.prompt(answers);
        if (operation === "add") {
            console.log(chalk.green(`The sum of these numbers is ${add(num1, num2)}`));
        }
        else if (operation === "sub") {
            console.log(chalk.green(`The the differnece of these numbers is ${sub(num1, num2)}`));
        }
        else if (operation === "mul") {
            console.log(chalk.green(`The product of ${num1} and ${num2} is ${mul(num1, num2)}`));
        }
        else if (operation === "div") {
            console.log(chalk.green(`The quotient of ${num1} and ${num2} is ${div(num1, num2)}`));
        }
        else if (operation === "avg") {
            console.log(chalk.green(`The average of ${num1} and ${num2} is ${avg(num1, num2)}`));
        }
        let { again } = await inquirer.prompt(answer);
        condition = again;
        if (!condition) {
            console.log(("Thank you for using my calculator!"));
            break;
        }
    }
}
setTimeout(() => {
    Calculator();
}, 500);
