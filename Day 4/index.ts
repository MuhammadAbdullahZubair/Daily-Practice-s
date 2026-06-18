import inquirer from "inquirer";

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
// async function main() {
//     let task:string[] = []
//     let addMore:boolean = true
//     while(addMore){
//         let answer = await inquirer.prompt([{
//             type:`input`,
//             name:`task`,
//             message:`Enter your task`
//         },{
//             type:`select`,
//             name:`more`,
//             message:`Want to Add More Tasks`,
//             choices:[`Yes`,`No`]
//         }])
//         task.push(answer.task)
//         if(answer.more === `No`){addMore = false}
//     }
//     console.log(`Your Todo List`);
//     console.log(task);
    
// }
// main()