export const searchProducts = async (params) => {
  const url = "http://localhost:7070/api/items"
  const response = await fetch(`${url}?q=${params}`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
};
