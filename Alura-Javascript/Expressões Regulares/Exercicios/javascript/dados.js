var arquivo = '100,200-150,200;20';

var exp = /[,;-]/;

var valores = arquivo.split(exp);

console.log(valores);