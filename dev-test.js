const Block = require("./block");

const block = new Block("foo", "bar", "zoo", "moo");

console.log(block.to_string());
console.log(Block.genesis().to_string());
