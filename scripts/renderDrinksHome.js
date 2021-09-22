import { randomDrinks, searchDrink } from "./drinksApi.js";
import { renderDrinks } from "./cardDrinks.js";
const containerDrinks = document.getElementById("container-drinks");
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-btn");
const loader = document.getElementById("loader");
const titleResult = document.getElementById("title-result");

const getDrinksByName = () => {
  loader.style.display = "block";
  titleResult.innerText = `Você buscou por: ${searchInput.value}`;
  searchDrink(searchInput.value)
    .then((res) => {
      renderDrinks(res, containerDrinks);
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
    renderDrinks(res, containerDrinks);
  })
  .then((res) => (loader.style.display = "none"));
