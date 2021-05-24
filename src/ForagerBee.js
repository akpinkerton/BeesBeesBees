class ForagerBee extends Bee {
  constructor() {
    super()
    this.age = 10
    this.job = "find pollen"
    this.canFly = true
    this.treasureChest = []
  }
  forage (treasure){
    this.treasureChest += treasure + " ";
    // logs just the chest for ease of reading
    // return this.treasureChest;
    // logs whole bee with added objects to chest
    return this;
  }
}

let foragerBee = new ForagerBee ();
// console.log("ForagerBee:",'\n', foragerBee,'\n');
// console.log("ForagerBee says mm jelly:",'\n', foragerBee.eat(),'\n');
// console.log("ForagerBee treasure chest:",'\n', foragerBee.forage("Pin"),'\n');
// console.log("ForagerBee treasure chest:",'\n', foragerBee.forage("Petal"),'\n');
// console.log("ForagerBee treasure chest:",'\n', foragerBee.forage("Crumb"),'\n');

module.exports = ForagerBee