var requestOptions = {
  method: "GET",
  redirect: "follow",
};

fetch("https://striveschool-api.herokuapp.com/books", requestOptions)
  .then((response) => response.json())
  .then((results) => {
    const books = results;
    const container = document.querySelector(".container");
    const cards = document.createElement("div");
    container.append(cards);
    books.map((book) => {
      const title = book.title;
      const img = book.img;
      const price = book.price;
      const category = book.category;
      cards.innerHTML += `  
      <div class="card" style="width: 18rem;">
      <img src="${img}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">${category}</p>
        <a href="#" class="btn btn-primary">${price}</a>
      </div>
    </div>`;
    });
  })
  .catch((error) => console.log("error", error));
