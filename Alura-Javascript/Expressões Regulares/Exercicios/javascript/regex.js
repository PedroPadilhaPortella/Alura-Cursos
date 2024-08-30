
var target = '11a22b33c';
// const expression = /(\d\d)(\w)/g;
const expression = new RegExp('(\\d\\d)(\\w)', 'g');

while(resultado = expression.exec(target)) {
    console.log(resultado);
    console.log(expression.lastIndex);
}