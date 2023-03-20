interface ISavingAccount{
    balance:number
    Balance:()=>void
}
interface ICurrentAccount{
   balance:number
    Balance:()=>void
}
export class Account implements ICurrentAccount,ISavingAccount {
 balance: number;
 account_type:number;
     
    constructor(account_type:number,balance: number){
       this.balance=balance;

       this.account_type=account_type
    }
    Balance(): void{
      if(this.account_type==1){
     console.log(`Saving Balance:${this.balance}`);}
     else if(this.account_type == 2)
     { console.log(`Currrent Balance:${this.balance}`)}
   }

}
let x = new Account(1,5000);
let y = new Account(2,2000);
x.Balance();
y.Balance();