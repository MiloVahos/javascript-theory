const person = {
  name: 'Milo',
  lastname: 'Vahos',
  age: 24,
  profession: 'engineer',
  happy: true,
};
// Objects are mutable and are manipulated by reference
var x = person;
console.log("Before ref", person);
x.newVar = 'added y reference';
console.log("After ref", person);

const list = new Array();
const car = Object.create({ brand: 'chevrolet' })
console.log(car, car.brand);
// Prototypes
console.log(person.prototype, list.prototype, car.__proto__);

// Prototype delegation
const animal = { clasificacion: 'mamifero' };
const cat = { raza: 'munchkin' };
Object.setPrototypeOf(cat, animal);
const myCat = { name: 'MrPuppyPants' };
Object.setPrototypeOf(myCat, cat);
console.log(myCat.name, myCat.raza, myCat.clasificacion );
console.log(myCat.__proto__);