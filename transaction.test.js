const Transaction = require("./transaction");

const Wallet = require("./index");

describe("Transaction", () => {
  let transaction, wallet, recipient, amount;

  beforeEach(() => {
    wallet = new Wallet();
    amount: 50;
    recipient: "r3c1p13nt";
    transaction: Transaction.newTransaction(wallet, recipient, amount);
  });
});
