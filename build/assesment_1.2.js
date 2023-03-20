"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
class Account {
    constructor(account_type, balance) {
        this.balance = balance;
        this.account_type = account_type;
    }
    Balance() {
        if (this.account_type == 1) {
            console.log(`Saving Balance:${this.balance}`);
        }
        else if (this.account_type == 2) {
            console.log(`Currrent Balance:${this.balance}`);
        }
    }
}
exports.Account = Account;
let x = new Account(1, 5000);
let y = new Account(2, 2000);
x.Balance();
y.Balance();
