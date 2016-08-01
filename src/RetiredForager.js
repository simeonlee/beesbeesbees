var RetiredForagerBee = function() {
  ForagerBee.call(this); // creates subclass of ForagerBee
  this.age = 40;
  this.job = 'gamble';
  this.canFly = false;
  this.color = 'grey';
};

RetiredForagerBee.prototype = Object.create(ForagerBee.prototype); // meant to have prototype lookup fall through to superclass prototype
RetiredForagerBee.prototype.constructor = RetiredForagerBee;  // meant to have constructor delegate to RetiredForagerBee instead of ForagerBee
RetiredForagerBee.prototype.forage = function() {
  return 'I am too old, let me play cards instead';
}
RetiredForagerBee.prototype.gamble = function(treasure) {
  this.treasureChest.push(treasure);
}
