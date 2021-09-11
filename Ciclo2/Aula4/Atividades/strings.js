/*
var nome = "Marcelo";

console.log (nome.length);
console.log (nome[0]);

var palavras = "Maçã doce";

//console.log (palavras.match (/D-gi) );

//console.log ( palavras.search (/d/gi) );


var str = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias libero, facilis soluta" +
"voluptatibus iusto id necessitatibus voluptate maxime, totam dolores laboriosam recusandae!"

var mudarStr = str.replace (/totam/gi, 'XXXXX');
console.log (mudarStr);

var comp1 = "Comparar";
var comp2 = "comparar";

var c1 = comp1.toLowerCase ();
var c2 = comp2.toLowerCase ();

//console.log (`Este é o c1 ${c1} Este é o c2 ${c2}`)

var comparacao = c1.localeCompare(c2);
console.log (comparacao);
*/

var p = '  fpalavra+ ';

var r = p.trim();
console.log (r);
var s = r.replace (/f/gi,'');
console.log (s)
sub_a = s.replace ('+','');
console.log (`Removido: ${sub_a}`);

var valor = 1.357
var formatarMoeda = valor.toLocaleString ('pt-br', {
	style: 'currency',
	currency: 'BRL'
})

console.log (formatarMoeda);

