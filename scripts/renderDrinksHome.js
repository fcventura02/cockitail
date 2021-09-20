import { randomDrinks } from "./drinksApi.js";
const containerDrinks = document.getElementById("container-drinks");

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

Promise.all([
  randomDrinks(),
  randomDrinks(),
  randomDrinks(),
  randomDrinks(),
  randomDrinks(),
  randomDrinks(),
])
  .then((res) => {
    for (const iterator of res) {
      const { idDrink, strAlcoholic, strDrink, strDrinkThumb } = iterator;
      containerDrinks.appendChild(
        createCard(idDrink, strDrink, strDrinkThumb, strAlcoholic)
      );
    }
  })
  .then((res) => (document.getElementById("loader").style.display = "none"));
