class HoneyMakerBee extends Bee {
  constructor() {
    super()
    this.age = 10,
    this.job = "make honey",
    this.honeyPot = 0
  }
  makeHoney (){
    this.honeyPot++
    return this;
  }
  giveHoney (){
    this.honeyPot -= 1
    return this;
  }
}

let honeyBee = new HoneyMakerBee ();
// console.log("HoneyMakerBee:",'\n', honeyBee,'\n');
// console.log("HoneyMakerBee says mm jelly:",'\n', honeyBee.eat(),'\n');
// console.log("HoneyMakerBee makes honey:",'\n', honeyBee.makeHoney(),'\n');
// console.log("HoneyMakerBee makes honey:",'\n', honeyBee.makeHoney(),'\n');
// console.log("HoneyMakerBee makes honey:",'\n', honeyBee.makeHoney(),'\n');
// console.log("HoneyMakerBee makes honey:",'\n', honeyBee.makeHoney(),'\n');
// console.log("HoneyMakerBee gives honey:",'\n', honeyBee.giveHoney(),'\n');

module.exports = HoneyMakerBee