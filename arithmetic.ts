var num1: number;
var num2: number;
var operation: string;
function ArithmeticOperation1(num1: number,num2: number, operation: string){
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
ArithmeticOperation1(2,3,'+');