{
    // union types 

    type FrontEndDeveloper = 'fakibazDeveloper' | 'joniorDeveloper'
    type FullstackDeveloper = 'frontendDeveloper' | 'expertDeveloper'


    type Developer = FrontEndDeveloper | FullstackDeveloper;


    const newDeveloper: FrontEndDeveloper = 'joniorDeveloper';


    type User = {
        name: string;
        email?: string;
        gender: 'male' | 'female';
        bloodGroup: 'O+' | 'A+' | 'AB+'
    }

    const user1: User = {
        name: 'persian',
        email: 'persian@gmail.com',
        gender: 'male',
        bloodGroup: "A+",
    }

    // Intersection type

    type FEnd = {
        skills: string[];
        designation1: 'Fontend Developer';
    }

    type BEnd = {
        skills: string[];
        designation2: 'Backend Developer';
    }

    type MernDeveloper = FEnd & BEnd;

    const mernStackDeveloper: MernDeveloper = {
        designation1: "Fontend Developer",
        designation2: "Backend Developer",
        skills: ['HTML', 'Css', 'JavaScript', 'MongoDB']
    }





















}