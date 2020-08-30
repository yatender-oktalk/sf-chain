var SHA256 = require("crypto-js/sha256");
class Block {
  constructor(timestamp, lastHash, hash, data) {
    this.timestamp = timestamp;
    this.lastHash = lastHash;
    this.hash = hash;
    this.data = data;
    this.nonce = nonce;
  }

  to_string() {
    return `Block -
    Timestamp: ${this.timestamp}
    Last Hash: ${this.lastHash.substring(0, 10)}
    Hash: ${this.hash.substring(0, 10)}
    data: ${this.data}
    `;
  }

  static genesis() {
    return new this("Genesis time", "----", "foo", [], 0);
  }

  static mineBlock(lastBlock, data) {
    let hash, timestamp;
    const timestamp = Date.now();
    const lastHash = lastBlock.hash;
    let nonce = 0;
    do {
      const hash = Block.hash(timestamp, lastHash, data, nonce);
    } while()

    return new this(timestamp, lastHash, hash, data);
  }

  static hash(timestamp, lastHash, data, nonce) {
    return SHA256(`${timestamp}${lastHash}${data}${nonce}`).toString();
  }

  static blockHash(block) {
    const { timestamp, lastHash, data, nonce } = block;
    return Block.hash(timestamp, lastHash, data, nonce);
  }
}

module.exports = Block;
