{

    // getter and setter



    class BankAccount {
        public readonly id: number;
        public name: string;
        // private _balance: number;
        protected _balance: number;

        constructor(id: number, name: string, balance: number) {
            this.id = id,
                this.name = name,
                this._balance = balance
        }

        /*  public addDeposit(amount: number) {
             this._balance = this._balance + amount
         } */

        // setter
        set deposit(amount: number) {
            this._balance = this._balance + amount
        }


        /*  public getBalance() {
             return this._balance;
         } */


        // getter
        get balance() {
            return this._balance;
        }
    }


    const poorMan = new BankAccount(1, 'peter', 23)
    // poorMan.balance = 312
    // poorMan.id = 53

    // poorMan.addDeposit(7); //function call korte hocche


    poorMan.deposit = 100

    // const myBalance = poorMan.getBalance(); // function call korte hocce


    const myBalance = poorMan.balance; // property er moto
    console.log(myBalance);

















}