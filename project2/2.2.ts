{

    // interface
    type User1 = {
        name: string;
        age: number;
    }

    type UserWithRole1 = User1 & { role: string }

    const user1: UserWithRole1 = {
        name: 'jhon',
        age: 34,
        role: 'developer'
    }

    type rollNumber = number;


    interface User2 {
        name: string;
        age: number;
    }

    interface UserWithRole extends User2 {
        role: string;
    }


    const user2: UserWithRole = {
        name: 'smith',
        age: 34,
        role: 'manager'
    }



    // js --> object, array --> object funtion, --> object

    type Roll1 = number[];

    const rollNumber1: Roll1 = [1, 2, 3]
    // 0 1 2 ---> number type 

    interface Roll2 {
        [index: number]: number
    }

    const rollNumber2: Roll2 = [1, 2, 3]
    // 0 1 2 ---> number type 


    type Add = (num1: number, num2: number) => number

    const add: Add = (num1, num2) => num1 + num2;

    interface Add2 {
        (num1: number, num2: number): number
    }

    const add2: Add2 = (num1, num2) => num1 + num2;










}