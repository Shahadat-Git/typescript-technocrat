{

    // Type Alias 

    type Student = {
        name: string;
        age: number;
        gender: string;
        contactNo?: string;
        address: string;
    }

    const student1: Student = {
        name: 'frank',
        age: 23,
        gender: 'male',
        contactNo: '91645265',
        address: '1645 moio'
    };


    const student2: Student = {
        name: 'amit',
        age: 25,
        gender: 'male',
        address: 'vanis'
    }


    type UserName = string;
    type IsAdmin = boolean;

    const username: UserName = 'Persian';
    const isAdmin: IsAdmin = true;

    type Add = (num1: number, num2: number) => number;

    const add: Add = (num1, num2) => num1 + num2;



    // const { name: nm } = student1;
    // console.log(nm)



























}