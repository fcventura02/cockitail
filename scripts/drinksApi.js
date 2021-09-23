const apiDrink = async (search) => {
  return await fetch(`https://www.thecocktaildb.com/api/json/v1/1/${search}`)
    .then((res) => res.json())
    .catch((error) => console.error(error));
};

export const randomDrinks = async () => {
  const res = await apiDrink("random.php");
  return res.drinks[0];
};

export const searchDrink = async (name) => {
  const res = await apiDrink(`search.php?s=${name}`);
  return res.drinks;
};

export const getDrink = async (id) => {
  const res = await apiDrink(`lookup.php?i=${id}`);
  return res.drinks?[0]:null;
};

export const getIngredients = async () => {
  const res = await apiDrink(`list.php?i=list`);
  return res.drinks;
};

export const getDrinkByIngredients = async (ingredient) => {
  const res = await apiDrink(`filter.php?i=${ingredient}`);
  return res.drinks;
};
