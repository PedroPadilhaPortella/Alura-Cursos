var codigos = 'A121B12112C12212F12G01';

var exp = /[A-Za-z]\d+/g

var codigosExtraidos = codigos.match(exp);

console.log(codigosExtraidos);