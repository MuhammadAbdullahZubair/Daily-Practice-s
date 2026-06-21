function getData() {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(`Data Mil Gaya`)
        },2000)
    })
}
console.log(getData());

// async function run() {
//     console.log(`Pending`);
//     let res = await getData();
//     console.log(res);
    
// }
// run()

