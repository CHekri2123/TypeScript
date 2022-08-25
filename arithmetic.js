var num1;
var num2;
var operation;
function ArithmeticOperation(num1, num2, operation) {
    switch (operation) {
        case '+':
            console.log(num1 + num2);
            break;
        case '-':
            console.log(num1 - num2);
            break;
        case '*':
            console.log(num1 * num2);
            break;
        case '/':
            console.log(num1 / num2);
            break;
        default:
            break;
    }
}
ArithmeticOperation(2, 3, '+');
