const Transaction = require("./wallet/transaction");
const Wallet = require("./wallet/index");

describe("Transaction", () => {
  let transaction, wallet, recipient, amount;
  beforeEach(() => {
    wallet = new Wallet();
    amount = 50;
    recipient = "r3c1p13nt";
    transaction = Transaction.newTransaction(wallet, recipient, amount);
  });

  it("ouputs the `amount` subtracted from the wallet balance", () => {
    expect(
      transaction.outputs.find((output) => output.address === wallet.publicKey)
        .amount
    ).toEqual(wallet.balance - amount);
  });

  it("outputs the `amount` added to the recipient", () => {
    expect(
      transaction.outputs.find((output) => output.address === recipient).amount
    ).toEqual(amount);
  });

  describe("transacting with an amount that exceeds the balance", () => {
    beforeEach(() => {
      amount = 50000;
      transaction = Transaction.newTransaction(wallet, recipient, amount);
    });

    it("does not create the transaction", () => {
      expect(transaction).toEqual(undefined);
    });
  });
});

// Make sure to change the testing environment for Jest from the default mode to “node”. In package.json, add this rule:
// ```
// ...
// "jest": {
// "testEnvironment": "node"
// },
// ```

// $ npm run test