const fetchData = () => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  return fetch(
    "https://striveschool-api.herokuapp.com/books",
    requestOptions
  ).then((response) => response.json());
};
const getBookByID = async (asin) => {
  try {
    const res = await fetch(
      "https://striveschool-api.herokuapp.com/books/" + asin
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error:" + error);
    alert(error);
  }
};
export { fetchData, getBookByID };
