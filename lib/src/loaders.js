export const recipeLoader = async () => {
  const res = await fetch(`https://recipe.cleverapps.io/recipes`);

  return res.json();
};
export const groceriesLoader = async () => {
  const res = await fetch(`https://recipe.cleverapps.io/groceries`);
  return res.json();
};
