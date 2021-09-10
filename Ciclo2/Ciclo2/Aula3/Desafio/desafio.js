window.onload = function () {
	const valor1 = document.querySelector ("#var1");
	const valor2 = document.querySelector ("#var2");
	const soma   = document.querySelector ("#soma");
	const btn    = document.querySelector ("#btn")

	btn.addEventListener ('click', ()=> {
		var v1 = valor1.value;
		var v2 = valor2.value;
		var result = Number (v1) +Number (v2);
		var confirm = soma.value;

		if (result == confirm) {
			alert ("A soma está correta!");
		} else {
			alert ("A soma está incorreta!");
		}
	})
}