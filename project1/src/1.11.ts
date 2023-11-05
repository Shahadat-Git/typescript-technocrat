{

    // ternary operator || optional chaining || nullish coalescing operator

    const age: number = 15;

    if (age >= 18) {
        // console.log("adult");
    } else {
        // console.log('not adult');
    }

    const isAdult = age >= 18 ? 'adult' : 'not adult'
    // console.log({ isAdult });

    // nullish coalescing operator
    // null / undefined ---> decision making

    const isAuthenticated = undefined;
    // const isAuthenticated = "";


    const result1 = isAuthenticated ?? 'Guest';
    const result2 = isAuthenticated ? isAuthenticated : 'Guest'

    console.log({ result1 });
    console.log({ result2 });

    type User = {
        name: string;
        address: {
            city: string;
            presentAddress: string;
            permanentAddress?: string;
        }
    }


    const user: User = {
        name: 'smith',
        address: {
            city: 'new york',
            presentAddress: '45 st road'
        }
    }


    const permanentAddress = user?.address?.permanentAddress ?? 'No permanent address ';
    console.log({ permanentAddress })



















}