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
// class Student {
//   name: string;
//   marks: number;
//   constructor(name: string, marks: number) {
//     this.name = name;
//     this.marks = marks;
//   }
//   getGrade(): string {
//     if (this.marks >= 80) {
//       return "A";
//     } else if (this.marks >= 65) {
//       return "B";
//     } else if (this.marks >= 50) {
//       return "C";
//     } else {
//       return "F";
//     }
//   }
// }
// async function main() {
//   let students: Student[] = [
//     new Student("Ali", 80),
//     new Student("Ahmed", 65),
//     new Student("Hasnain", 50),
//   ];
//   let running = true;
//   while (running) {
//     const answer = await inquirer.prompt([
//       {
//         type: "select",
//         name: "action",
//         message: "What do you want to do?",
//         choices: [
//           "Add Student",
//           "View all Students",
//           `Only pass students >= 50`,
//           `Average Marks`,
//           "Exit"
//         ],
//       },
//     ]);
//     if (answer.action === "Add Student") {
//       const newStudent = await inquirer.prompt([
//         {
//           type: "input",
//           name: "name",
//           message: "Enter Student Name:",
//         },
//         {
//           type: "number",
//           name: "marks",
//           message: "Enter Student Marks:",
//         },
//       ]);
//       students.push(
//         new Student(
//           newStudent.name,
//           newStudent.marks
//         )
//       );
//       console.log("\n✅ Student Added Successfully\n");
//     }
//     else if (answer.action === "View all Students") {
//       console.log("\n📚 Student List\n");
//       students.forEach((student, index) => {
//         console.log(
//           `${index + 1}. ${student.name} | Marks: ${student.marks} | Grade: ${student.getGrade()}`
//         );
//       });
//       console.log("");
//     }else if(answer.action === `Only pass students >= 50`){
//         let passedStudent = students.filter((passed)=>{return passed.marks >= 50})
//         console.log(passedStudent);
//     }else if(answer.action === `Average Marks`){
//         let total = students.reduce((sum, student) => {
//     return sum + student.marks
//     }, 0)
//     let avg:number = total / students.length 
//     console.log(avg);
//     }
//     else if (answer.action === "Exit") {
//       running = false;
//       console.log("\n👋 Program Closed\n");
//     }
//   }
// }
// main();
// async function getuser(id:number) {
//     let getData = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
//     let data = await getData.json()
//     return data
// }
// getuser(5).then((res)=>{
//     console.log(res);
// })
// console.log(`First`);
// async function main(id:number) {
//     let userData = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
//     let data = await userData.json()
//     return data
// }
// main(1001).then((data)=>{
//     console.log(data);
// })
// console.log(`Last`);
// Async & await 
// async function prom(ms:number) {
//     return await new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             return resolve(`Got that shit`)
//             reject(Error(`teri maa ka bhosda madarchod`))
//         },ms)
//     }).catch((reject)=>{console.log(reject)});
// }
// async function main() {
//     let data = await prom(2000)
//     console.log(data);
// }
// main()
function dataFetch(id) {
    return __awaiter(this, void 0, void 0, function () {
        var api, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("https://jsonplaceholder.typicode.com/users/".concat(id))];
                case 1:
                    api = _a.sent();
                    return [4 /*yield*/, api.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var data1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, dataFetch(10)];
                case 1:
                    data1 = _a.sent();
                    console.log(data1.name);
                    console.log(data1.email);
                    return [2 /*return*/];
            }
        });
    });
}
main();
dataFetch(0).catch(function (error) {
    console.log(error);
});
