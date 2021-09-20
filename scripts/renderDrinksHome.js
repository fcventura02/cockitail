import { randomDrinks, searchDrink } from "./drinksApi.js";
const containerDrinks = document.getElementById("container-drinks");
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-btn");
const loader = document.getElementById("loader");
const titleResult = document.getElementById("title-result");

const createCard = (id, name, img, alcoholic) => {
  const cardDrink = document.createElement("div");
  cardDrink.setAttribute("class", "card-drink");
  const drinkInfo = document.createElement("div");
  drinkInfo.setAttribute("class", "drink-info");
  const drinkImage = document.createElement("img");
  drinkImage.setAttribute("class", "drink-img");
  drinkImage.setAttribute("src", img);
  drinkImage.setAttribute("alt", "Drink image");
  const drinkAlcoholic = document.createElement("p");
  const drinkName = document.createElement("p");
  drinkName.innerText = name;
  drinkAlcoholic.innerText = alcoholic;
  alcoholic === "Alcoholic"
    ? drinkAlcoholic.setAttribute("class", "alcoholic")
    : drinkAlcoholic.setAttribute("class", "no-alcoholic");
  drinkInfo.appendChild(drinkName);
  drinkInfo.appendChild(drinkAlcoholic);
  cardDrink.appendChild(drinkImage);
  cardDrink.appendChild(drinkInfo);
  return cardDrink;
};

const renderDrinks = (arrDrinks) => {
  for (const iterator of arrDrinks) {
    const { idDrink, strAlcoholic, strDrink, strDrinkThumb } = iterator;
    containerDrinks.appendChild(
      createCard(idDrink, strDrink, strDrinkThumb, strAlcoholic)
    );
  }
};

const getDrinksByName = () => {
  loader.style.display = "block";
  titleResult.innerText = `Você buscou por: ${searchInput.value}`;
  searchDrink(searchInput.value)
    .then((res) => {
      containerDrinks.innerHTML = "";
      renderDrinks(res);
    })
    .then(() => (loader.style.display = "none"));
};

searchInput.addEventListener("keypress", ({ key }) => {
  if (key === "Enter") {
    getDrinksByName();
  }
});
searchButton.addEventListener("click", () => {
  getDrinksByName();
});

Promise.all([
  randomDrinks(),
  randomDrinks(),
  randomDrinks(),
  randomDrinks(),
  randomDrinks(),
  randomDrinks(),
])
  .then((res) => {
    containerDrinks.innerHTML = "";
    renderDrinks(res);
  })
  .then((res) => (loader.style.display = "none"));
