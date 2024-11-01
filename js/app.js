let valorTotal=0;

function adicionar(){
    // Recuperar os valores nome do produto, valor do produto , e quantidade

    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;

    //Calcular o preço e subtotal
        
    let preço = parseInt(valorUnitario * quantidade);
    
    //Adicionar o carrinho
    let listaProdutos = document.getElementById('lista-produtos');
    let novoProduto = `
        <section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x </span>${nomeProduto}<span class="texto-azul">R$${preço}</span>
        </section>`
    listaProdutos.insertAdjacentHTML('beforeend', novoProduto);

    //Atualizar o total final
    valorTotal = valorTotal + preço  ;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${valorTotal}`;

}

function limpar(){
    let produto = document.getElementById('produto').value;
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;

    //Calcular o preço e subtotal
        
    let preço = parseInt(valorUnitario * quantidade);
    let listaProdutos = document.getElementById('lista-produtos');
    
    // Verifica se há produtos na lista e remove o último
    if (listaProdutos.lastElementChild) {
        listaProdutos.lastElementChild.remove();
    }

    // Verifica se a lista está vazia
    let zero =verificaSeTotalVazio(valorTotal);
    
    if(zero == true){
        valorTotal = 0;
     }
    
    else{
        //Atualizar o total final
        valorTotal = valorTotal - preço  ;
        let campoTotal = document.getElementById('valor-total');
        campoTotal.textContent = `R$ ${valorTotal}`;
    }
   
}

function verificaSeTotalVazio(valorTotal){
    
    if(valorTotal <= 0){
        return true;
    }
}