import inquirer from "inquirer";

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

async function dataFetch(id:number) {
    let api = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    let data = await api.json()
    return data
    
}
async function main() {
    let data1 = await dataFetch(10);
    console.log(data1.name);
    console.log(data1.email);
    
}

main()
dataFetch(0).catch((error)=>{console.log(error);
})
