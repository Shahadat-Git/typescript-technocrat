"use strict";
var _a, _b;
{
    // ternary operator || optional chaining || nullish coalescing operator
    const age = 15;
    if (age >= 18) {
        // console.log("adult");
    }
    else {
        // console.log('not adult');
    }
    const isAdult = age >= 18 ? 'adult' : 'not adult';
    // console.log({ isAdult });
    // nullish coalescing operator
    // null / undefined ---> decision making
    const isAuthenticated = undefined;
    // const isAuthenticated = "";
    const result1 = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : 'Guest';
    const result2 = isAuthenticated ? isAuthenticated : 'Guest';
    console.log({ result1 });
    console.log({ result2 });
    const user = {
        name: 'smith',
        address: {
            city: 'new york',
            presentAddress: '45 st road'
        }
    };
    const permanentAddress = (_b = (_a = user === null || user === void 0 ? void 0 : user.address) === null || _a === void 0 ? void 0 : _a.permanentAddress) !== null && _b !== void 0 ? _b : 'No permanent address ';
    console.log({ permanentAddress });
}
