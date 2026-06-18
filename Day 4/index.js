"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
// const Tea = new Promise((resolve) => {
//     setTimeout(() => resolve("Tea ready!"), 2000)
// })
// async function getTea() {
//     console.log("Order kiya...")   // 1. pehle yeh
//     const res = await Tea          // 2. ruko 2 sec
//     console.log(res)               // 3. "Tea ready!"
// }
// getTea()
// let url = `https://jsonplaceholder.typicode.com/posts/25`
// let json = async()=>{
//     let data = await fetch(`https://jsonplaceholder.typicode.com/posts`)
//     let res = await data.json()
//     console.log(res);
// }
// json()
// let promise = new Promise((resolve,reject)=>{
//     console.log(`Pending`);
//     setTimeout(()=>{
//         resolve(`Resolved`)
//         reject(Error(`Rejected`))
//     },2000)
// })
// promise.then((res)=>{
//     console.log(res);
// }).catch((reject)=>{
//     console.log(reject);
// })
// class cars {
//     company:string =``
//     Name:string = ``
//     topSpeed:number = 0
//     constructor(company:string,Name:string){
//         this.Name = Name
//         this.company = company
//         // this.topSpeed = topSpeed
//     }
//     accelator(){
//         this.topSpeed += 10
//         return `${this.company} ${this.Name} Speed is ${this.topSpeed}`
//     }
//     brake(){
//         this.topSpeed -= 10
//         return `${this.company} ${this.Name} Speed is ${this.topSpeed}`
//     }
// }
// let car1 = new cars(`Honda`,`Civic Type-R`)
// console.log(car1.accelator());
// console.log(car1.accelator());
// console.log(car1.accelator());
// console.log(car1.accelator());
// console.log(car1.brake());
// console.log(`First`);
// async function quest() {
//       await inquirer.prompt([
//         {
//             type: "number",
//             name: "Num1",
//             message: "Please enter your First Number"
//         },
//         {
//             type: "number",
//             name: "Num2",
//             message: "Please enter your Second Number"
//         },
//         {
//             type: "select",
//             name: "Operator",
//             message: "Please Select Your Operator",
//             choices: ["+", "-", "*", "/"]
//         }
//     ]).then((answers)=>{
//         const n1 = Number (answers.Num1)
//         const n2 = Number (answers.Num2)
//         if(answers.Operator == `+`){
//             console.log(n1 + n2);
//         }else if(answers.Operator == `-`){
//             console.log(n1 - n2);
//         }else if(answers.Operator == `*`){
//             console.log(n1 * n2);
//         }else if(answers.Operator == `/`){
//             console.log(n1 / n2);
//     }
// })
// }
// async function main() {
//     console.log(`First`);
//     await quest()
//     console.log(`last`);
// }
// quest()
// main()
// console.log(`Last`);
// async function qust() {
//     await inquirer.prompt([
//     {
//     type:`number`,
//     name:`Num1`,
//     message:`Please Enter your First number`
// },{
//     type:`number`,
//     name:`Num2`,
//     message:`Please Enter Your 2nd Number`
// },{
//     type:`select`,
//     name:`Operator`,
//     message:`Please Select Your Operator`,
//     choices:[`+`,`-`,`*`,`/`]
// }
// ]).then((answer)=>{
//     const n1 = Number(answer.Num1)
//     const n2 = Number(answer.Num2)
//     if(answer.Operator == `+`){console.log(n1 + n2);}
//     if(answer.Operator == `-`){console.log(n1 - n2);}
//     if(answer.Operator == `*`){console.log(n1 * n2);}
//     if(answer.Operator == `/`){console.log(n1 / n2);}
// })
// };
// async function main() {
//     console.log(`First`);
//     await qust()
//     console.log(`Last`);
// }
// main()
// task 1
// inquirer.prompt([{
//     type:`input`,
//     name:`Name`,
//     message:`Please Enter Your Name`
// },{
//     type:`password`,
//     name:`Pass`,
//     message:`Please Enter Your Password `
//     mask:`*`
// }]).then((answer)=>{
//     if(answer.Name === `admin`&& answer.Pass === `1234`){
//         console.log(`Successfully Login`);
//     }else{
//         console.log(`Wrong Credentials`);
//     }
// })
// task 2
// inquirer.prompt([{
//     type:`input`,
//     name:`Q1`,
//     message:`What is the Capital of Pakistan`
// },{
//     type:`number`,
//     name:`Q2`,
//     message:`What is 5 x 5`
// },{
//     type:`select`,
//     name:`Q3`,
//     message:`What is the Full form of JS`,
//     choices:[`Java-script`,`JavaScript`,`I don't know`]
// }]).then((answer)=>{
//     let score:number = 0
//     if(answer.Q1 ===  `Islamabad`){
//         score++
//     }
//     if(answer.Q2 == 25){
//         score++
//     } if(answer.Q3 == `JavaScript`){
//         score++
//     }
//     console.log(answer);
//     console.log(`score is `,score,);
// })
// import inquirer from 'inquirer'
// async function main() {
//     let task:string[] = [];
//     let addMore:boolean = true;
//     while(addMore){
//     let answer = await inquirer.prompt([{
//         type:`input`,
//         name:`task`,
//         message:`Enter Your Task`
//     },{
//         type:`select`,
//         name:`more`,
//         message:`Enter Yes or No`,
//         choices:[`Yes`,`No`]
//     }])
//     task.push(answer.task)
//     if(answer.more == `No`){addMore = false}
// }
// console.log(`Your Todo List `);
// console.log(task);
// }
// main()
// async function main() {
//     return`Abdullah`
// }
// let async =  main()
// console.log(async);
// async function get() {
//     return "Ali"
// }
// automatically Promise return hota hai:
// console.log(get() );
// Promise { "Ali" }
// value nikalni hai toh:
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var task, addMore, answer;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    task = [];
                    addMore = true;
                    _a.label = 1;
                case 1:
                    if (!addMore) return [3 /*break*/, 3];
                    return [4 /*yield*/, inquirer_1.default.prompt([{
                                type: "input",
                                name: "task",
                                message: "Enter your task"
                            }, {
                                type: "select",
                                name: "more",
                                message: "Want to Add More Tasks",
                                choices: ["Yes", "No"]
                            }])];
                case 2:
                    answer = _a.sent();
                    task.push(answer.task);
                    if (answer.more === "No") {
                        addMore = false;
                    }
                    return [3 /*break*/, 1];
                case 3:
                    console.log("Your Todo List");
                    console.log(task);
                    return [2 /*return*/];
            }
        });
    });
}
main();
