#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.yellow.bold(`\n \t Welcome To Currency - Converter \n`));
let exchange_rate = {
    "USD": 1,
    "GBP": 1.26,
    "EUR": 1.08,
    "AUD": 0.65,
    "PKR": 277.85,
};
let answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: "Select the currency to convert from:",
        choices: ["USD", "GBP", "EUR", "AUD", "PKR"]
    },
    {
        name: "to_currency",
        type: "list",
        message: "Select the currency to convert into:",
        choices: ["USD", "GBP", "EUR", "AUD", "PKR"]
    },
    {
        name: "amount",
        type: "input",
        message: "Enter the amount to convert:"
    }
]);
let from_amount = exchange_rate[answer.from_currency];
let to_amount = exchange_rate[answer.to_currency];
let amount = answer.amount;
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
console.log(`Your converted amount is ${chalk.green(converted_amount.toFixed(2))}`);
