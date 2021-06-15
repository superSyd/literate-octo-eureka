class Collectible {

  constructor(input) {
    this.x = Number(input.x);
    this.y = Number(input.y);
    this.value = input.value;
    this.id = input.id;

  }

}

/*
  Note: Attempt to export this for use
  in server.js
*/
try {
  module.exports = Collectible;
} catch(e) {}

export default Collectible;
