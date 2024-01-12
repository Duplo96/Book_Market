export function fetchData() {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  return fetch(
    "https://striveschool-api.herokuapp.com/books",
    requestOptions
  ).then((response) => response.json());
}
