const searchDrink = async (search) => {
  return await fetch(`https://www.thecocktaildb.com/api/json/v1/1/${search}`)
    .then((res) => res.json())
    .catch((error) => console.log(error));
};

export const randomDrinks = async () => {
  const res = await searchDrink("random.php");
  return res.drinks[0]
};
