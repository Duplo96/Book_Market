import { fetchData } from "./fetch.js";
import { createCard } from "./components.js";

document.addEventListener("DOMContentLoaded", function () {
  fetchData()
    .then((books) => {
      const container = document.querySelector(".container");
      const row = document.createElement("div");
      row.className = "row";
      container.append(row);

      books.forEach((book) => {
        const cardHTML = createCard(book);
        row.innerHTML += cardHTML;
      });

      const buttonsSkip = document.querySelectorAll(".skip-button");
      buttonsSkip.forEach((buttonSkip) => {
        buttonSkip.addEventListener("click", function () {
          const card = buttonSkip.closest(".card");
          card.classList.add("d-none");
        });
      });

      const buttonCarts = document.querySelectorAll(".Add_Cart");
      buttonCarts.forEach((buttonCard) => {
        buttonCard.addEventListener("click", function () {
          const card = buttonCard.closest(".card");
          const cartIcon = card.querySelector(".carts");
          cartIcon.classList.toggle("d-none");
          cartIcon.classList.toggle("cart");
          card.classList.toggle("addingCart");
        });
      });
    })
    .catch((error) => {
      console.log("Error fetching data:", error);
    });
});
