function Dog() {}
Dog.prototype.bark = 'Wof Wof!!!';
let myDog = new Dog();
console.log(myDog.bark);
console.log(myDog.__proto__)
console.log(Dog.prototype, myDog.prototype);