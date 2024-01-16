const fetchData = async () => {
  try {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    const response = await fetch(
      "https://striveschool-api.herokuapp.com/books",
      requestOptions
    );
    return await response.json();
  } catch (error) {
    console.error("Errore durante la richiesta:", error);
  }
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
