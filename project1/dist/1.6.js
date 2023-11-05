"use strict";
// Learning funtion
// Normal function
// Arrow function
function add(num1, num2) {
    return num1 + num2;
}
add(2, 5);
var addArrow = function (num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    return num1 + num2;
};
addArrow(2, 8);
// object --> function --> method
var richUser = {
    name: 'Mical',
    balance: 0,
    addBalance: function (balance) {
        return "My new balance is : ".concat(this.balance + balance);
    }
};
