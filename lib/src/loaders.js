export const recipeLoader = async () => {
  const res = await fetch(`http://localhost:5001/recipes`);

  return res.json();
};
export const groceriesLoader = async () => {
  const res = await fetch(`http://localhost:5001/groceries`);
  return res.json();
};
