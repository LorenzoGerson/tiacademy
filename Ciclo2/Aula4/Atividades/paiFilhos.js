window.onload = function (){

	/* const pai = document.querySelector ("#pai");
	pai.forEach ((pegarFilhas)=> {
		pegarFilhas.addEventListener ('click', (filha) => {
			alert (filha.target.textContent);
		})
	})
	*/

	const btn = document.querySelector ("#btn");
	const outroPai = document.querySelector ("#outroPai");

	btn.addEventListener ('click', ()=> {
		li = document.createElement ("li");
		outroPai.appendChild (li).textContent ="Elemento Filho"
	})


}