let cards = document.querySelector(".cards");
let seach = document.querySelector(".seach");

seach.addEventListener("input", () => {
  let busca = seach.value.toLowerCase();
  puxandoDados(busca);
});

function criarCard(canal) {
  // Criando o card
  let card = document.createElement("div");
  card.classList.add("card");

  // Criando a tag de categoria
  let tag = document.createElement("p");
  tag.textContent = canal.tags.join(", ");
  tag.classList.add("tag");
  card.appendChild(tag);

  // Criando o título do canal
  let titulo = document.createElement("h1");
  titulo.textContent = canal.titulo;
  card.appendChild(titulo);

  // Criando o container para links
  let container_links = document.createElement("div");
  container_links.classList.add("formatacao_card");
  card.appendChild(container_links);

  // Link do nome do canal
  let linkNomeCanal = document.createElement("a");
  linkNomeCanal.textContent = canal.nome;
  linkNomeCanal.href = canal.url;
  linkNomeCanal.classList.add("links");
  linkNomeCanal.target = "_blank";
  container_links.appendChild(linkNomeCanal);

  // Link da data de criação
  let linkDataCriacao = document.createElement("a");
  linkDataCriacao.textContent = `Criado em: ${canal.data_criacao}`;
  linkDataCriacao.href = "#";
  linkDataCriacao.classList.add("data_criacao");
  container_links.appendChild(linkDataCriacao);

  // Adicionando card à página
  cards.appendChild(card);
}

function puxandoDados(pesquisa) {
  fetch("dados.JSON")
    .then((response) => response.json())
    .then((dados) => {
      // Limpar os cards antigos
      cards.innerHTML = "";

      // Filtrar por nome, título ou tags
      let filtro = dados.filter((item) => {
        let titulo = item.titulo.toLowerCase();
        let nome = item.nome.toLowerCase();
        let tags = item.tags.join(", ").toLowerCase();
        return (
          titulo.includes(pesquisa) ||
          nome.includes(pesquisa) ||
          tags.includes(pesquisa)
        );
      });

      // Criar cards filtrados
      filtro.forEach((canal) => criarCard(canal));
    });
}

// Carregar todos ao iniciar
fetch("dados.JSON")
  .then((response) => response.json())
  .then((dados) => {
    cards.innerHTML = "";
    dados.forEach((canal) => criarCard(canal));
  });
