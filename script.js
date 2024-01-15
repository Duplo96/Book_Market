import { fetchData } from "./fetch.js";
import { createCard, addToCartEvent, filterCard } from "./components.js";

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const books = await fetchData();

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
      buttonSkip.addEventListener("click", () => {
        const card = buttonSkip.closest(".card");
        card.classList.add("d-none");
      });
    });

    const buttonCarts = document.querySelectorAll(".Add_Cart");
    buttonCarts.forEach((buttonCart) => {
      buttonCart.addEventListener("click", addToCartEvent);
    });

    const input = document.querySelector(".input");
    input.addEventListener("keyup", filterCard);
  } catch (error) {
    console.error("Errore durante il recupero dei dati:", error);
  }
});
