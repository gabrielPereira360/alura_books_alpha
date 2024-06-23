const botoesDeFiltro = document.querySelectorAll('.btn');


botoesDeFiltro.forEach(btn => btn.addEventListener('click', filtrarLivros));

function filtrarLivros() {
    const tipoBotao = document.getElementById(this.id);
    const categoriaBtn = tipoBotao.value;
    let livrosFiltrado = categoriaBtn == 'disponivel' ? filtrarPorQuantidade() : filtrarPorCategoria(categoriaBtn);
    exibirLivrosNaTela(livrosFiltrado);

    if (categoriaBtn == 'disponivel'){
        const valorTotal = calcularValorTotalLivrosDisponiveis(livrosFiltrado);
        exibitValorTotalLivros(valorTotal);
    }
}

function filtrarPorCategoria(categoriaBtn) {
    return livros.filter(livro => livro.categoria == categoriaBtn);
}

function filtrarPorQuantidade() {
    return livros.filter(livro => livro.quantidade > 0);
}

function exibitValorTotalLivros(valorTotal){
    elementoTotValorLivrosDisponiveis.innerHTML = `
        <div class="livros__disponiveis">
        <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal.toFixed(2)}</span></p>
        </div>
    `
};
