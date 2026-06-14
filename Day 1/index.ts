// practice of settimeout (if condition got true setTimeout will bhe off)

let setTimeoutID:number = 0;

console.log(`Before Asyncn Code`);
let i:number = 0;
setTimeoutID = setInterval(()=>{
    i++
    if(i > 5){
        i++
    }else{
        clearInterval(setTimeoutID)
        
    }
    
    console.log(`in Asyncn Code`);
},1000)

console.log(`After Asyncn Code`);




































// class car {
//     brand:string = ``
//     model:string = ``
//     speed:number = 0
//     constructor(B:string, M:string, S:number){
//         this.brand = B
//         this.model = M
//         this.speed = S
//     }
//     accelerate(speed:number){
//         return `speed is ${speed}`
//     }
//     info(){
//         return `Brand Name is ${this.brand} and model is ${this.model}`
//     }
//     brake(){
//         return `speed 10 se ghataوnow speed is ${this.speed}`
//     }
// }

// let carbrake = new car(`Toyota`, `Corolla`,0)
// carbrake.info()
// console.log(carbrake.accelerate(20));


// again practice 

class car {
    brand:string = ``
    model:string = ``
    speed:number = 0
    constructor(brand:string, model:string){
        this.brand = brand
        this.model = model
    }

    info(){
        return `Brand name is ${this.brand} and model name is ${this.model}`
    }
    
    accelator(){
            this.speed += 10
           return `Speed: ${this.speed}` 
    }
    brake(){
        return this.speed -= 10
    }

}

let car0 = new car(`Toyota`,`corolla`)
car0.accelator()
car0.brake()
car0.accelator()
console.log(car0.accelator(),car0.accelator(),car0.brake());


class car1{
    brand:string =``
    model:string = ``
    year:number = 0
    speed:number = 0
    constructor(brand:string,model:string,year:number){
        this.brand = brand
        this.model = model
        this.year = year
    }

    info(){
        return`Brand name is ${this.brand} or Model namme is ${this.model} and year is ${this.year}`
    }




    accelator(){
        this.speed += 10
        return `speed is : ${this.speed}`
    }

    brake(){
        this.speed -= 10
        return `slowing down speed is ${this.speed}`
    }





}

let car2 = new car1(`Honda`,`Civic Type-R`,2022);
car2.info()
console.log(`Car object:`,car2);

console.log( `Car2:`, car2.info());
console.log(`acceleration1:`,car2.accelator());
console.log(`acceleration2:`,car2.accelator());
console.log(`Braking:`,car2.brake());


