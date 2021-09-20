import { randomDrinks } from "./drinksApi.js";
const containerDrinks = document.getElementById("container-drinks");

const createCard = (name, img) => {
  const cardDrink = document.createElement("div");
  cardDrink.setAttribute("class", "card-drink");
  const drinkInfo = document.createElement("div");
  drinkInfo.setAttribute("class", "drink-name");
  const drinkImage = document.createElement("img");
  drinkImage.setAttribute("class", "drink-img");
  drinkImage.setAttribute("src", img);
  drinkImage.setAttribute("alt", "Drink image");
  const drinkName = document.createElement("p");
  drinkName.innerText = name;

  drinkInfo.appendChild(drinkName);
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
      containerDrinks.appendChild(createCard(strDrink, strDrinkThumb));
    }
  })
  .then((res) => document.getElementById("loader").style.display = "none");

/* for (let i = 0; i < 6; i++) {
  randomDrinks().then((res) => {
    const { idDrink, strAlcoholic, strDrink, strDrinkThumb } = res;
    containerDrinks.appendChild(createCard(strDrink, strDrinkThumb));
  });
} */
