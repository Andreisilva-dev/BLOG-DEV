// Selecionando o elemento DOM onde os cards serão inseridos
let cards = document.querySelector(".cards");

fetch("dados.JSON")
  .then((response) => response.json())
  .then((dados) => {
    // Usando forEach para iterar sobre cada canal do JSON
    dados.forEach((canal) => {
      // Criando o card
      let card = document.createElement("div");
      card.classList.add("card");
      cards.appendChild(card);

      // Criando a tag de categoria
      let tag = document.createElement("p");
      card.appendChild(tag);
      tag.textContent = canal.tags.join(", "); // Unindo as tags em uma string separada por vírgulas
      tag.classList.add("tag");

      // Criando o título do canal
      let titulo = document.createElement("h1");
      card.appendChild(titulo);
      titulo.textContent = canal.titulo;

      // Criando o container para links
      let container_links = document.createElement("div");
      container_links.classList.add("formatacao_card");
      card.appendChild(container_links);

      // Criando o link para o nome do canal
      let linkNomeCanal = document.createElement("a");
      container_links.appendChild(linkNomeCanal);
      linkNomeCanal.textContent = canal.nome;
      linkNomeCanal.href = canal.url;
      linkNomeCanal.classList.add("links");
      linkNomeCanal.target = "_blank"; // Definindo que o link abre em uma nova aba

      // Criando o link para a data de criação do canal
      let linkDataCriacao = document.createElement("a");
      container_links.appendChild(linkDataCriacao);
      linkDataCriacao.textContent = `Criado em: ${canal.data_criacao}`;
      linkDataCriacao.href = "#"; // Pode adicionar um link relevante aqui
      linkDataCriacao.classList.add("data_criacao");

      // Você pode continuar criando outros elementos com base nas propriedades de 'canal', como redes sociais, vídeos populares, etc.
    });
  });
