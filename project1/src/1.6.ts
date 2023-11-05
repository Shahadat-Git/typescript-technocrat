// Learning funtion
// Normal function
// Arrow function

function add(num1: number, num2: number): number {
    return num1 + num2;
}

add(2, 5)


const addArrow = (num1: number, num2: number = 10): number => {
    return num1 + num2;
}

addArrow(2, 8)

// object --> function --> method

const richUser = {
    name: 'Mical',
    balance: 0,
    addBalance(balance: number): string {
        return `My new balance is : ${this.balance + balance}`;
    }
}

const arr = [2, 4, 5, 6];

const newArr: number[] = arr.map((item: number): number => item * item);