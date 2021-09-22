import { getDrinkByIngredients, getIngredients } from "./drinksApi.js";
import { renderDrinks } from "./cardDrinks.js";
const listIngredients = document.getElementById("list-ingredients");
const searchIngredients = document.getElementById("search-ingredients");
const containerDrinks = document.getElementById("container-drinks")
const loader = document.getElementById("loader");
loader.style.display = "none";
let getlistIngredients = [];

//Atribui ao input abilidade de select
searchIngredients.addEventListener("focusin", () => {
  listIngredients.classList.toggle("active");
  listIngredients.classList.toggle("not-active");
});

searchIngredients.addEventListener("focusout", () => {
  window.setTimeout(() => {
    listIngredients.classList.toggle("active");
    listIngredients.classList.toggle("not-active");
  }, 200);
});

//cria o carde de ingredientes
const createCardIngredient = (name) => {
  const div = document.createElement("div");
  div.setAttribute("class", "ingredient");
  div.addEventListener("click", () => {
    loader.style.display = "block";
    getDrinkByIngredients(name)
      .then((res) => {
        console.log("hello")
        searchIngredients.value = name;
        renderListIngredients(filterList());
        renderDrinks(res, containerDrinks);
      })
      .then(() => (loader.style.display = "none"));
  });
  const p = document.createElement("p");
  p.innerText = name;
  const img = document.createElement("img");
  img.setAttribute(
    "src",
    `https://www.thecocktaildb.com/images/ingredients/${name}-Medium.png`
  );
  img.setAttribute("alt", name);
  img.setAttribute("width", "100px");
  div.appendChild(img);
  div.appendChild(p);
  return div;
};

//adiciona os ingredientes no container de lista
const renderListIngredients = (arr) => {
  listIngredients.innerHTML = "";
  for (const ingredient of arr) {
    listIngredients.appendChild(
      createCardIngredient(ingredient.strIngredient1)
    );
  }
};

const filterList = () => {
  return getlistIngredients.filter(({ strIngredient1 }) => {
    return strIngredient1
      .toLowerCase()
      .includes(searchIngredients.value.toLowerCase());
  });
};

//Filtra os ingredientes
searchIngredients.addEventListener("input", () => {
  console.log(searchIngredients.value);
  listIngredients.innerHTML = "";
  renderListIngredients(filterList());
});

//Inicializa os ingredientes
getIngredients().then((res) => {
  getlistIngredients = res;
  renderListIngredients(getlistIngredients);
});
