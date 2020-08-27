const Blockchain = require("./index");
const Block = require("./block");

describe("Blockchain", () => {
  let bc, bc2;
  beforeEach(() => {
    bc = new Blockchain();
    bc2 = new Blockchain();
  });

  it("starts with genesis block", () => {
    expect(bc.chain[0]).toEqual(Block.genesis());
  });

  it("Adds a new block", () => {
    const data = "foo";
    bc.addBlock(data);

    expect(bc.chain[bc.chain.length - 1].data).toEqual(data);
  });

  it("validates a valid chain", () => {
    bc2.addBlock("foo");

    chain_resp = bc.isValidChain(bc2.chain);
    expect(chain_resp).toBe(true);
  });

  it("invalidates a chain with a corrupt genesis block", () => {
    bc2.chain[0].data = "bad idea";
    expect(bc.isValidChain(bc2.chain)).toBe(false);
  });

  it("invalidates a corrupt chain", () => {
    bc2.addBlock("Foo");
    bc2.chain[1].data = "Not Foo";
    expect(bc.isValidChain(bc2.chain)).toBe(false);
  });

  it("replaces the chain with valid chain", () => {
    bc2.addBlock("goo");

    bc.replaceChain(bc2.chain);

    expect(bc.chain).toEqual(bc2.chain);
  });

  it("does not replace the chain if length is less or equal", () => {
    bc.addBlock("foo");

    bc.replaceChain(bc2.chain);
    expect(bc.chain).not.toEqual(bc2.chain);
  });
});
