const makeSaluteClass = term => 
  class {
    constructor(x) {
      this.x = x;
    }
  
    salute(y) {
      console.log(`${this.x} says "${term}" to ${y}`);
    }
  };

const Spanish = makeSaluteClass("HOLA");
new Spanish("ALFA").salute("BETA");

new (makeSaluteClass("HELLO"))("GAMA").salute("DELTA");

const fullSalute = (c, x, y) => new c(x).salute(y);
const French = makeSaluteClass("BON JOUR");
fullSalute(French, "EPSILO", "ZETA");

// A first class object is an entity that have the same "rights" as
// any other entity in the language, it can be pass as a value,
// it can be printed, readed, used as an attribute, etc.