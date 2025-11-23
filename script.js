let CardConteiner = document.querySelector('.cards-container');
let campoBusca = document.getElementById('campoBusca');
let dados = [];

async function Buscar() {
    let resposta = await fetch('data.json');
    dados = await resposta.json();
    renderizarCards(dados);
}

function renderizarCards(dados) {
    // Limpa conteúdo anterior para evitar duplicações
    if (CardConteiner) CardConteiner.innerHTML = '';

    for (let dado of dados) {
        let nome = dado.nome.toLowerCase().replaceAll(" ", "");
        let busca = campoBusca.value.toLowerCase().replaceAll(" ", "");
        if (nome.includes(busca) || busca == '') {
            let card = document.createElement('article');
            card.classList.add('card');
            card.classList.add(dado.classe);
            card.innerHTML = `
        <figure class="card-media">
                    <img src="${dado.imagem}"
                        alt="Imagem LOUD"
                        onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
                    <div class="img-placeholder">Cole o link da imagem aqui no atributo <code>src</code></div>
                </figure>
        <h2>
                    ${dado.nome}
                </h2>
                <p>
                    ${dado.descricao}
                </p>
                <a class="melhoresmomentos" href="${dado.link}" target="_blank">Veja os melhores momentos</a>
`;
            CardConteiner.appendChild(card);
        }
    }
}


