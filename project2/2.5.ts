{

    // function with generic

    const createArry = (param: string): string[] => {
        return [param]
    }

    const createArryWithGeneric = <T>(param: T): T[] => {
        return [param]
    }

    const res1 = createArry('Developer')
    const resGeneric = createArryWithGeneric<string>('Developer');


    type User = { id: number; name: string }

    const resGenericOject = createArryWithGeneric<User>({ id: 33, name: "Mr. X" });


    const createArryWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
        return [param1, param2]
    }

    const result = createArryWithTuple<string, number>('Developer', 56456)
    const result1 = createArryWithTuple<string, { id: number; name: string }>('Developer', {
        id: 23,
        name: 'Josh'
    })

    const addCourseToStudent = <T>(student: T) => {
        const course = 'Next Level'
        return {
            ...student,
            course
        }
    };

    const student1 = addCourseToStudent({ name: "Mr. X", email: 'x@gmail.com', role: 'Developer' })
    const student2 = addCourseToStudent({ name: "Mr. Y", email: 'y@gmail.com', role: 'Developer', hasWatch: 'Apple' })


























}