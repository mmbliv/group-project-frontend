export const recipeLoader = async () => {
  const res = await fetch(`https://recipe-backend-8tg9.onrender.com/recipes`);

  return res.json();
};
export const groceriesLoader = async () => {
  const res = await fetch(`https://recipe-backend-8tg9.onrender.com/groceries`);
  return res.json();
};
