/*
var nome = "Marcelo";

console.log (nome.length);
console.log (nome[0]);

var palavras = "Maçã doce";

//console.log ( palavras.search (/d/gi) );

var str = "Lorem ipsum dolor sit, amet consectetur, adipisicing elit. Corrupti," + 
"dit quisquam! Cupiditate, veritatis! Perferendis,"

var mudarStr = str.replace (/quisquam/gi,'Xxxx');

console.log (mudarStr);

var comp1 = "Comparar";
var comp2 = "comparar";

var c1 = comp1.toLowerCase ();
var c2 = comp2.toLowerCase ();

var comparacao = c1.localeCompare (c2);
console.log (comparacao);
*/

var p = '	fpalavra ';
var r =p.trim ();
console.log (r);
var s = r.replace (/f/gi, '');
console.log (s);
sub_a = s.replace ('+', '');
console.log (`Removido: ${sub_a}`);

var valor = 1.357
var formatarMoeda = valor. toLocaleString ('pt-BR', {
	style: 'currency',
	currency: 'BRL'
})

console.log (formatarMoeda);
