const containerPaginate = document.getElementById("container-paginate");

const createCard = (id, name, img, alcoholic) => {
  const cardDrink = document.createElement("a");
  cardDrink.setAttribute("class", "card-drink");
  cardDrink.setAttribute("href", `./drink.html?${id}`);
  const drinkInfo = document.createElement("div");
  drinkInfo.setAttribute("class", "drink-info");
  const drinkImage = document.createElement("img");
  drinkImage.loading = "eager";
  drinkImage.setAttribute("class", "drink-img");
  drinkImage.setAttribute("src", img);
  drinkImage.setAttribute("alt", "Drink image");
  let drinkAlcoholic;
  if (alcoholic !== undefined) {
    drinkAlcoholic = document.createElement("p");
    drinkAlcoholic.innerText = alcoholic;
    alcoholic === "Alcoholic"
      ? drinkAlcoholic.setAttribute("class", "alcoholic")
      : drinkAlcoholic.setAttribute("class", "no-alcoholic");
    drinkInfo.appendChild(drinkAlcoholic);
  }
  const drinkName = document.createElement("p");
  drinkName.innerText = name;
  drinkInfo.appendChild(drinkName);
  cardDrink.appendChild(drinkImage);
  cardDrink.appendChild(drinkInfo);
  return cardDrink;
};

const listDrinks = (arrDrinks, element) => {
  element.innerHTML = "";
  for (const iterator of arrDrinks) {
    const { idDrink, strAlcoholic, strDrink, strDrinkThumb } = iterator;
    const thumb = strDrinkThumb.concat("/preview");
    element.appendChild(createCard(idDrink, strDrink, thumb, strAlcoholic));
  }
};

const paginateDrinks = (pages, arrDrinks, element) => {
  const div = document.createElement("div");
  div.setAttribute("class", "list-pages");
  for (let index = 1; index <= pages; index++) {
    const page = document.createElement("button");
    page.setAttribute("class", index === 1 ? "page-active" : "page-not-active");
    page.setAttribute("id", index);
    page.addEventListener("click", () => {
      document.getElementsByClassName("page-active")[0].className =
        "page-not-active";
      page.className = "page-active";
      listDrinks(arrDrinks.slice((index - 1) * 9, index * 9), element);
    });
    page.innerText = index;
    div.appendChild(page);
  }
  containerPaginate.appendChild(div);
};

export const renderDrinks = (arrDrinks, element) => {
  const pages = Math.ceil(arrDrinks.length / 9);
  if (containerPaginate) containerPaginate.innerHTML = "";
  pages > 1 && paginateDrinks(pages, arrDrinks, element);
  listDrinks(arrDrinks.slice(0, 9), element);
};
