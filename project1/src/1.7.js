"use strict";
{
    //  spread operator
    // rest operator
    // destructuing
    // learn spread operator
    const bros1 = ['john', 'peter', 'charlie'];
    const bros2 = ['smith', 'mj'];
    bros1.push(...bros2);
    // same as object
    // learn rest operator
    const greetFriends = (...friends) => {
        friends.forEach((friend) => console.log(`Hi ${friend}`));
    };
    greetFriends('Sam', 'mir', 'alex');
}
