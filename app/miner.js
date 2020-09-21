class Miner {
  constructor(blockchain, transactionPool, wallet, p2pServer) {
    this.blockchain = blockchain;
    this.transactionPool = transactionPool;
    this.p2pServer = p2pServer;
    this.wallet = wallet;
  }

  mine() {
    const validTransactions = this.transactionPool.validTransactions();
    // include a reward for the miner
    // create a block consisting of the valid transactions
    // sync the chains in the peer to peer sever
    // clear the transactionPool
    // broadcast to every miner to clear the transaction pool
  }
}

module.exports = Miner;
