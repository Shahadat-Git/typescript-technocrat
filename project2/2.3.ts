{

    // generic type

    type GenericArry<T> = Array<T>



    // const rollNumbers: number[] = [2, 4, 5];

    // const rollNumbers: Array<number> = [2, 4, 5];

    const rollNumbers: GenericArry<number> = [2, 4, 5];

    // const mentors: string[] = ['Mr. X', 'Mr. Y', 'Mr, Z'];

    const mentors: GenericArry<string> = ['Mr. X', 'Mr. Y', 'Mr, Z'];

    // const boolArry: boolean[] = [true, false, false, true];

    const boolArry: GenericArry<boolean> = [true, false, false, true];



    // type User = {
    //     name: string;
    //     age: number;
    // }
    interface User {
        name: string;
        age: number;
    }




    const user: GenericArry<{ name: string, age: number }> = [
        {
            name: 'smith',
            age: 54,
        },
        {
            name: 'sho',
            age: 45,
        }
    ]

    const add = (x: number, y: number): number => x + y;

    add(20, 96)

    // generic tuple

    type GenericTuple<x, y> = [x, y]

    // const man: [string, string] = ['Mr. X', 'Mr. Y']
    const man: GenericTuple<string, string> = ['Mr. X', 'Mr. Y']

    const userWithId: GenericTuple<number, { name: string; email: string }> = [234, { name: 'smith', email: 'sm@gmail.com' }]














}