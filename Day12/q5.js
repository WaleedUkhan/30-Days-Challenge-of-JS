//Privat methods or fields in class

class Account {
  //private field
  #balance;

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  // Method to deposit money

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Deposited $${amount}. New balance: $${this.#balance}`);
    } else {
      console.log("Deposit amount must be positive.");
    }
  }

  // Method to withdraw money
  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      console.log(`Withdrew $${amount}. New balance: $${this.#balance}`);
    } else if (amount > this.#balance) {
      console.log("Insufficient funds.");
    } else {
      console.log("Withdrawal amount must be positive.");
    }
  }

  // Method to get the current balance (optional, for checking balance)
  getBalance() {
    return this.#balance;
  }
}

const myAccount = new Account(100); // Initial balance is $100

myAccount.deposit(50);    // Output: Deposited $50. New balance: $150
myAccount.withdraw(30);   // Output: Withdrew $30. New balance: $120
myAccount.withdraw(200);  // Output: Insufficient funds.

console.log(myAccount.getBalance()); // Output: 120

// Trying to access the private field directly will cause an error
// console.log(myAccount.#balance); // Error: Private field '#balance' must be declared in an enclosing class
