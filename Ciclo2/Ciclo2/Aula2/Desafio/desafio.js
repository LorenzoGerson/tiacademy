var nome = prompt ("Digite seu nome");

var numero = prompt (nome + " digite um número para comparar com 'n'");

console.log (typeof(numero));

alert ("Foi enviado uma " + typeof(numero));

var numero = parseInt (numero);

alert ("A string será convertida para número ");

console.log (typeof (numero));

var n = 37;

var comparar = (numero == n);

var soma = (numero + n);

var subt = (numero - n);

var resto = (numero % n);

var quadrado = (numero * numero);

document.write ("1. Seja bem vindo...: " + nome + "<br>");

document.write ("2. Você digitou o número...: " + numero + "<br>");

document.write ("3. O retorno da comparação booleana é...: " + comparar + "<br>");

document.write ("4. A soma dos valores é...: " + soma + "<br>");

document.write ("5. A subtração dos valores é...: " + subt + "<br>");

document.write ("6. O resto da divisão é de...: " + resto + "<br>");

document.write ("7. O quadrado do número digitado é...: " + quadrado + "<br>");
 
var fruta = prompt (nome + " escolha qual das 3 frutas você quer comprar: Laranja, Pera ou Manga?");
	switch (fruta) {
		case "Laranja":
		document.write ("Você escolheu comprar Laranja");
		break;
		case "laranja":
		document.write ("Você escolheu comprar Laranja");
		break;
		case "Pera":
		document.write ("Você escolheu comprar Pera");
		break;
		case "pera":
		document.write ("Você escolheu comprar Pera");
		break;
		case "Manga":
		document.write ("Você escolheu  comprar Manga");
		break;
		case "manga":
		document.write ("Você escolheu  comprar Manga");
		break;
		default:
		document.write ("Desculpe " + nome + " , mas a fruta que você escolheu (" + fruta + ") não está em nosso catálogo");
		break
	}
