class Player{
  constructor(){
    this.hearts=3;
  }
  looseHert(){
    this.hearts--;
  }
  looseHerts(){
    this.hearts=0;
  }
}
  
  // add the code below
  module.exports = { Player };