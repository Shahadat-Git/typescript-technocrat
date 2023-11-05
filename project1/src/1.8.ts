{

    // destructuring


    // object
    const user = {
        id: 34,
        name: {
            firstName: 'mr',
            lastName: 'alex'
        },
        contactNo: 56489561,
        address: "new work"
    }

    const {
        contactNo,
        name: { lastName: lsName }
    } = user;


    // array

    const myFriends = ['chandler', 'joey', 'rose', 'rachel', 'monica']

    const [, , bestFriend, ...rest] = myFriends;
























}