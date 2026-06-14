// practice of settimeout (if condition got true setTimeout will bhe off)
var setTimeoutID = 0;
console.log("Before Asyncn Code");
var i = 0;
setTimeoutID = setInterval(function () {
    i++;
    if (i > 5) {
        i++;
    }
    else {
        clearInterval(setTimeoutID);
    }
    console.log("in Asyncn Code");
}, 1000);
console.log("After Asyncn Code");
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
var car = /** @class */ (function () {
    function car(brand, model) {
        this.brand = "";
        this.model = "";
        this.speed = 0;
        this.brand = brand;
        this.model = model;
    }
    car.prototype.info = function () {
        return "Brand name is ".concat(this.brand, " and model name is ").concat(this.model);
    };
    car.prototype.accelator = function () {
        this.speed += 10;
        return "Speed: ".concat(this.speed);
    };
    car.prototype.brake = function () {
        return this.speed -= 10;
    };
    return car;
}());
var car0 = new car("Toyota", "corolla");
car0.accelator();
car0.brake();
car0.accelator();
console.log(car0.accelator(), car0.accelator(), car0.brake());
var car1 = /** @class */ (function () {
    function car1(brand, model, year) {
        this.brand = "";
        this.model = "";
        this.year = 0;
        this.speed = 0;
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    car1.prototype.info = function () {
        return "Brand name is ".concat(this.brand, " or Model namme is ").concat(this.model, " and year is ").concat(this.year);
    };
    car1.prototype.accelator = function () {
        this.speed += 10;
        return "speed is : ".concat(this.speed);
    };
    car1.prototype.brake = function () {
        this.speed -= 10;
        return "slowing down speed is ".concat(this.speed);
    };
    return car1;
}());
var car2 = new car1("Honda", "Civic Type-R", 2022);
car2.info();
console.log("Car object:", car2);
console.log("Car2:", car2.info());
console.log("acceleration1:", car2.accelator());
console.log("acceleration2:", car2.accelator());
console.log("Braking:", car2.brake());
