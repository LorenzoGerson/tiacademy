var nome = prompt ("Digite seu nome");

var numero = prompt (nome + " digite um número para comparar com 'n'");

numero = parseInt (numero);

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

document.write ("7. O quadrado do número digitado é...: " + quadrado);
