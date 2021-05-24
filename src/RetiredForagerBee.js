class RetiredForagerBee extends ForagerBee {
  constructor() {
    super()
    this.age = 40
    this.job = "gamble"
    this.canFly = false
    this.color = "grey"
  }
  forage (){
    return "I am too old, let me play cards instead";
  }
  gamble (treasure){
    this.treasureChest += treasure
  }
}

let retired = new RetiredForagerBee ();
console.log("RetiredForagerBee:",'\n', retired,'\n');
console.log("RetiredForagerBee says mm jelly:",'\n', retired.eat(),'\n');
console.log("RetiredForagerBee treasure chest:",'\n', retired.forage("Pin"),'\n');
console.log("RetiredForagerBee treasure chest:",'\n', retired.forage("Petal"),'\n');
console.log("RetiredForagerBee treasure chest:",'\n', retired.forage("Crumb"),'\n');

module.exports = RetiredForagerBee

