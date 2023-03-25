export const recipeLoader = async () => {
  const res = await fetch(`http://localhost:4000/recipes`);

  return res.json();
};
export const groceriesLoader = async () => {
  const res = await fetch(`http://localhost:4000/groceries`);
  return res.json();
};
