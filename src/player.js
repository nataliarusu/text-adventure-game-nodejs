class Player {
  constructor() {
    this.hearts = 3;
  }
  looseHeart(n) {
    const lost = Math.min(n, this.hearts);
    this.hearts = this.hearts - lost;
    if (n > 0) {
      console.log(
        `You lost ${lost} heart(s), you have ${this.hearts} heart(s) left`
      );
    }
  }
  isAlive() {
    return !!this.hearts; //!! convert to boolean, 0 will be falsy
  }
}

module.exports = { Player };
