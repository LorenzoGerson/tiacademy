window.onload = function () {

	(()=> {

		let mostrarProdutosCLiente = document.querySelector ("#content-produtos > ul#produtos");

		for(let idx in produtos){
			mostrarProdutosCLiente.innerHTML += `<li class=itemProduto data-preco= ${produtos[idx].prodPreco}> ${produtos[idx].prodDesc}</li>`
		}

	})(produtos)


	const itemProduto = document.querySelectorAll ("#produtos > li.itemProduto");
	const cestaDoCliente = document.querySelector ("ul#cestaDoCliente");
	const mostraTotalCompra = document.querySelector ("#mostraTotalCompra");
	const armazenaItens = [];

	var totalPedido = 0;

	itemProduto.forEach ( (item)=> {
		item.addEventListener ('click', ()=>{

			li = document.createElement ("li");
			li.setAttribute ("data-preco", item.dataset.preco);
			if(armazenaItens.indexOf (item.textContent) == -1) {

				armazenaItens.push (item.textContent);

				cestaDoCliente.appendChild (li).textContent = item.textContent;

				totalPedido += Number(item.dataset.preco)

				mostraTotalCompra.value = totalPedido.toLocaleString ('pt-br', 
				{style: 'currency', currency: 'BRL'}
					)
			} else {
				alert (`Este item${item.textContent} já está na sua cesta`);
			}

		})

	})

	const tirarCesta = document.querySelectorAll("#cestaDoCliente");

	tirarCesta.forEach((item)=> {
    	item.addEventListener("click", (itemCesta) => {
        	var idx = armazenaItens.indexOf(itemCesta.target.textContent);
        	if(idx > -1) {

            	totalPedido -= Number(itemCesta.target.dataset.preco);

            	cestaDoCliente.removeChild(cestaDoCliente.childNodes[idx]);

            	armazenaItens.splice(idx, 1);
            	
            	mostraTotalCompra.value = totalPedido.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    
        }    
    })
})

}
	