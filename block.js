class Block {
  constructor(timestamp, lastHash, hash, data) {
    this.timestamp = timestamp;
    this.lastHash = lastHash;
    this.hash = hash;
    this.data = data;
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
    return new this("Genesis time", "----", "lskjdfoaj0j33r4", []);
  }

  static mineBlock(lastBlock, data) {
    const timestamp = Date.now();
    const lastHash = lastBlock.hash;
    const hash = "todo-hash";

    return new this(timestamp, lastHash, hash, data);
  }
}

module.exports = Block;
