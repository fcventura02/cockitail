import { alert } from "./alert.js";
import { getDrink, randomDrinks } from "./drinksApi.js";

const nameDrink = document.getElementById("title");
const typeCategory = document.getElementById("category");
const typeGlass = document.getElementById("glass");
const instructions = document.getElementById("instructions");
const imgDrinkThumb = document.getElementById("thumbnail");
const tableIngredientes = document.getElementById("ingredients");

const renderDrink = (arrDrink) => {
  const {
    strDrink,
    strDrinkThumb,
    strCategory,
    strGlass,
    strInstructions,
    ...itens
  } = arrDrink;

  imgDrinkThumb.setAttribute("src", strDrinkThumb);
  typeCategory.innerText = strCategory;
  typeGlass.innerText = strGlass;
  nameDrink.innerText = strDrink;
  instructions.innerText = strInstructions;

  for (let i = 1; i <= 15; i++) {
    const tr = document.createElement("tr");
    const tdIngrediente = document.createElement("td");
    const tdMedida = document.createElement("td");
    tr.appendChild(tdIngrediente);
    tr.appendChild(tdMedida);
    if (itens[`strIngredient${i}`] === null && itens[`strMeasure${i}`] === null)
      break;
    tdIngrediente.innerText = itens[`strIngredient${i}`];
    tdMedida.innerText = itens[`strMeasure${i}`];
    tableIngredientes.appendChild(tr);
  }
};

const drink = async () => {
  const id = window.location.search.replace("?", "");
  const arr = id === "" ? await randomDrinks() : await getDrink(id);
  arr !== null
    ? renderDrink(arr)
    : document.getElementsByTagName("body")[0].appendChild(alert());
};

drink();

/* Ingredientes do Drink (strIngredient1 até strIngrediente15, tratar respostas 'null')
Quantidade de cada Ingrediente (strMeasure1 até strMeasure15, tratar respostas 'null') */
