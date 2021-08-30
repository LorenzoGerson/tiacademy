
window.onload = function () {

	//alert ("alerta");
	const btn1 = document.querySelector (".btn-click");
	const legP = document.querySelector (".legenda");

	btn1.addEventListener ('click', ()=>{
		   legP.innerHTML += cxTexto.value;

	}  );

	legP.addEventListener ('click', ()=>{

		legP.innerHTML = '';

	})

/*	legP.addEventListener ('mouseout', ()=>{

		alert ("Teste")

	})
*/
	const trocaSenha = document.querySelector ("#verSenha");
	const cxSenha	 = document.querySelector ("#senha");

	trocaSenha.addEventListener ('click', ()=> {
		if (cxSenha.getAttribute ('type') == 'password'){
			cxSenha.setAttribute ('type', 'text')
		} else {
			cxSenha.setAttribute ('type', 'password')
		}
	});

	const cxTrocaBg = document.querySelector ("#cxTbg");
	 cxTrocaBg.addEventListener ('blur', ()=> {	 	
	 	cxTrocaBg.setAttribute ('class', 'corBG');

	 })

	 const valor1 = document.querySelector ("#v1");
	 const valor1 = document.querySelector ("#v2");
	 const btnSomar = document.querySelector ("#soma");
	 const spResultado = document.querySelector ("#resultado");

	 	btnSomar .addEventListener ('click', ()=>{

	 		var cx1 = valor1.value;
	 		var cx2 = valor2.value;
	 		var r   = Number (cx1) + Number (cx2);

	 		spResultado.innerHTML = r;

	 	})

	const btnModal = document.querySelector ("#chamarModal");
	const janelaM  = document.querySelector ("#janModal");

	btnModal.addEventListener ('click', ()=> {

		janelaM.setAttribute ('class', 'modal');

	})

	closeMod.addEventListener ('click', ()=> {

		janelaM.classList.remove ('modal');

	})



}