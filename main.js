#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let answers = await inquirer.prompt([{
        name: "counter",
        type: "input",
        message: "Write the sentence to count the words:",
    }]);
const whiteSpace = answers.counter.trim().split(" ");
console.log(whiteSpace);
console.log(chalk.yellow(`The total words in your sentence are ${whiteSpace.length}.`));
