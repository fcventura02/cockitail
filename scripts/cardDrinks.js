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

export const renderDrinks = (arrDrinks, element) => {
	element.innerHTML = "";
  for (const iterator of arrDrinks) {
    const { idDrink, strAlcoholic, strDrink, strDrinkThumb } = iterator;
    const thumb = strDrinkThumb.concat("/preview")
    console.log
    element.appendChild(
      createCard(idDrink, strDrink, thumb, strAlcoholic)
    );
  }
};