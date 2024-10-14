const emp = {
    id:101,
    name:"Dhruvin",
    salary:80000
}

// console.log(`Employee name is ${emp.name} with ID of ${emp.id} and salary of ${emp.salary}`);

var car = new Object();
car.name = "tata punch";
car.price = 900000;
car.model = 'xz rythm';
// console.log(car.name + ' ' + car.price + ' ' + car.model);
console.log(Object.entries(car));
console.log(Object.getOwnPropertyDescriptor(car,'model'));
console.log(Object.values(car))
console.log(Object.keys(car))
Object.seal(car);
