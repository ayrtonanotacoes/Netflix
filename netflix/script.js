// Função para atualizar o src da imagem ao passar o mouse
// Função para atualizar o src das imagens
function atualizarUrlsDasImagens(img) {
    // Seleciona todas as imagens dentro das divs com a classe 'profile'
    img[0].src = 'src/sumiu.png';
    img[1].src = 'src/aviao.gif';
    img[2].src = 'src/sumiu.png';
}


// Função para restaurar a URL original ao remover o mouse
function restaurarUrlImagem(img, urlTorre1, urlTorre2, urlaviao) {
    img[0].src = urlTorre1;
    img[1].src = urlTorre2;
    img[2].src = urlaviao;

}

// Função para adicionar eventos de mouseover e mouseout
function configurarEventosNasImagens() {
    // Seleciona todas as imagens dentro das divs com a classe 'profile'
    const imagem = document.querySelectorAll('.profile img');

    const img = imagem[1];

    const urlTorre1 = imagem[0].src;
    const urlTorre2 = imagem[1].src;
    const urlaviao = imagem[2].src;

    // Adiciona o evento de mouseover para trocar a URL da imagem
    img.addEventListener('mouseover', () => atualizarUrlsDasImagens(imagem));

    // Adiciona o evento de mouseout para restaurar a URL original
    img.addEventListener('mouseout', () => restaurarUrlImagem(imagem , urlTorre1, urlTorre2, urlaviao));
}

// Chama a função para configurar os eventos ao carregar a página
window.onload = configurarEventosNasImagens;
