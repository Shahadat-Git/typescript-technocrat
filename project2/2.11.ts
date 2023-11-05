{

    // utility types

    // Pick
    type Person = {
        name: string;
        age: number;
        email?: string;
        contactNo: string;
    }

    // type Name  = string;
    type Name = Pick<Person, 'name'>
    type NameAge = Pick<Person, 'age' | 'name'>


    // Omit  --> delete

    type ContactType = Omit<Person, 'name' | 'age'>

    // Required

    type PersonRequired = Required<Person>

    // Partial

    type PersonPartial = Partial<Person>

    // Readonly

    type PersonReadonly = Readonly<Person>

    const person1: PersonReadonly = {
        name: 'Mr. X',
        age: 24,
        contactNo: '345'
    }

    // person1.name = 'Mr. Y'

    // Record

    // type MyObj = {
    //     a: string;
    //     b: string;
    // }

    type MyObj = Record<string, string>

    const obj1: MyObj = {
        a: 'aa',
        b: 'bb',
        c: 'cc',
    }

    const emptyObj: Record<string, unknown> = {}















}