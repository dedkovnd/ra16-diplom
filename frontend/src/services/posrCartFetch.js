export const postCartFetch = async (data) => {
  try {
    const url = "http://localhost:7070/api/order";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
  } catch (e) {
    return e.message;
  }
};
