class Bee extends Grub {
  constructor() {
    super()
    this.age = 5,
    this.color = "yellow",
    this.job = "Keep on growing"
  }
}

let bee = new Bee ();
//console.log("Bee:",'\n', bee,'\n');
//console.log("Bee says mm jelly:",'\n', bee.eat(),'\n');

module.exports = Bee