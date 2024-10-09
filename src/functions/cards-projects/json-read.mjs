// criando uma async function
const JsonRead = async () => {
  try {
    // atribuindo uma promise await fetch para a variavel data
    const data = await fetch("/card-projects.json");

    // console.log("resultado do fetch", data)

    // convertendo resultado do fetch em .json, essa promisse espera o resposta da anterior
    const dataConverted = await data.json();

    //console.log("dados ja convertidos em .json", dataConverted)

    const gridCards = document.querySelector(".grid-projects");

    dataConverted.contentCard.map((singleValues) => {
      //     console.log("conteudo", conteudo)

      const cardValues = singleValues;

      const card = document.createElement("div");
      card.classList.add("card-project");

      const imageCard = document.createElement("img");
      imageCard.src = cardValues.imgLink;
      imageCard.alt = cardValues["alt-img"];
      card.appendChild(imageCard);

      const title = document.createElement("h3");
      title.textContent = cardValues.title;
      card.appendChild(title);

      const textProject = document.createElement("p");
      textProject.textContent = cardValues.description;
      if (document.documentElement.lang === "en") {
        textProject.textContent = cardValues.descriptionEn;
      }
      card.appendChild(textProject);

      const btnShowProject = document.createElement("a");
      btnShowProject.classList.add("btn-primary");
      btnShowProject.textContent = "Ver Projeto";
      if (document.documentElement.lang === "en") {
        btnShowProject.textContent = "See Project";
      }
      btnShowProject.href = cardValues.linkPage;
      if (document.documentElement.lang === "en") {
        btnShowProject.href = cardValues.linkPageEn;
      }
      btnShowProject.setAttribute("data", cardValues.name)
      card.appendChild(btnShowProject);

      gridCards.appendChild(card);
    });
  } catch (error) {
    console.error("Erro na requisição:", error);
  }
};

export default JsonRead