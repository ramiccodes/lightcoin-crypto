class Account {
  constructor(username) {
    this.username = username;
    this.balance = 0;
  }
}

class Transaction {
  constructor(account) {
    this.account = account;
  }
}

class Withdrawal extends Transaction {
  set commit(amount) {
    this.account.balance -= amount;
  }
  get value() {

  }
}

class Deposit extends Transaction {
  set commit(amount) {
    this.account.balance += amount;
  }
  get value() {
    return amount;
  }
}

// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected

const myAccount = new Account ("snow-patrol");
const myAccount2 = new Account ('Bunny');
const myAccount3 = new Account ('Ramic');
const myAccount4 = new Account ('Bobby');

t1 = new Withdrawal(myAccount);
t1.commit = 50.25;
console.log(`> ${myAccount.username}`)
console.log("========================")
console.log('Transaction 1:', t1);

console.log('---------------------------------------------------')

t2 = new Withdrawal(myAccount2);
t2.commit = 9.99;
console.log(`> ${myAccount2.username}`)
console.log("========================")
console.log('Transaction 2:', t2);

console.log('---------------------------------------------------')

t3 = new Deposit(myAccount2);
t3.commit = 60.50;
console.log(`> ${myAccount2.username}`)
console.log("========================")
console.log('Transaction 3:', t3);
