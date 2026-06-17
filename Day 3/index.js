"use strict";
// import chalk from "chalk";
Object.defineProperty(exports, "__esModule", { value: true });
// console.log(chalk.red(`Hello World`));
// import inquirer from "inquirer";
// inquirer.prompt([{
//     type: `number`,
//     name:`num1`,
//     message:`Please Enter Your 1st number`
// },{
//     type:`number`,
//     name:`num2`,
//     message:`Please enter your 2nd Number`
// },{
//     type: `select`,
//     name:`Operators`,
//     message:`please select your operator`,
//     choices: [`+`, `-`, `*`, `/`]  // ✅
// }]).then((question)=>{
//     const n1 = Number(question.num1);
//     const n2 = Number(question.num2);
//     if(question.Operators == `+`){
//         console.log(n1 + n2);
//     }else if(question.Operators == `-`){
//         console.log(n1 - n2);
//     }else if(question.Operators == `*`){
//         console.log(n1 * n2);
//     }else if(question.Operators == `/`){
//         console.log(n1 / n2);
//     }
// });
// console.log(inquirer.prompt);
// inquirer.prompt([
//   // 1. Text input
//   {
//     type: "input",
//     name: "city",
//     message: "Aap kis city mein rehte ho?"
//   },
//   // 2. Yes / No
//   {
//     type: "confirm",
//     name: "agree",
//     message: "Kya aap agree karte ho?",
//     default: true
//   },
//   // 3. Single choice (arrow keys se select)
//   {
//     type: "list",
//     name: "language",
//     message: "Favourite language kaunsi hai?",
//     choices: ["JavaScript", "TypeScript", "Python", "C++"]
//   },
//   // 4. Multiple choice (Space se select, Enter se confirm)
//   {
//     type: "checkbox",
//     name: "skills",
//     message: "Aapko kya aata hai?",
//     choices: ["HTML", "CSS", "JavaScript", "TypeScript"]
//   }
// ]).then((answers) => {
//   console.log("\n--- Aapke Answers ---");
//   console.log("City:", answers.city);
//   console.log("Agree:", answers.agree);
//   console.log("Language:", answers.language);
//   console.log("Skills:", answers.skills);
// });
var inquirer_1 = require("inquirer");
inquirer_1.default.prompt([{
        type: "number",
        name: "num1",
        message: "Please Enter Your First Number"
    }, {
        type: "number",
        name: "num2",
        message: "Please Enter Your Second Number"
    }, {
        type: "select",
        name: "Operators",
        message: "Select Your Operator",
        choices: ["+", "-", "*", "/"]
    }]).then(function (answers) {
    var n1 = Number(answers.num1);
    var n2 = Number(answers.num2);
    if (answers.Operators == "+") {
        console.log(n1 + n2);
    }
    else if (answers.Operators == "-") {
        console.log(n1 - n2);
    }
    else if (answers.Operators == "*") {
        console.log(n1 * n2);
    }
    else if (answers.Operators == "/") {
        console.log(n1 / n2);
    }
});
