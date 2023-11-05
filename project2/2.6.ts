{

    // constraints


    const addCourseToStudent = <T extends { name: string; id: number; email: string }>(student: T) => {
        const course = 'Next Level'
        return {
            ...student,
            course
        }
    };

    const student3 = addCourseToStudent({
        id: 45,
        name: 'Mr. Z',
        email: 'z@gmail.com', 
        emni: 'emni'
    })

    const student1 = addCourseToStudent<{
        id: number;
        name: string;
        email: string;
        role: string;
    }>({
        id: 23,
        name: "Mr. X",
        email: 'x@gmail.com',
        role: 'Developer'
    })
    const student2 = addCourseToStudent({
        id: 34,
        name: "Mr. Y",
        email: 'y@gmail.com', role: 'Developer',
        hasWatch: 'Apple'
    })
























}