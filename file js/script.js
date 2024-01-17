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
      row.innerHTML += createCard(book);
    });

    setupEventListeners();
  } catch (error) {
    console.error("Errore durante il recupero dei dati:", error);
  }
});

const setupEventListeners = () => {
  setupSkipButtons();
  setupAddToCartButtons();
  setupFilterInput();
};

const setupSkipButtons = () => {
  document.querySelectorAll(".skip-button").forEach((buttonSkip) => {
    buttonSkip.addEventListener("click", () => {
      buttonSkip.closest(".card").classList.add("d-none");
    });
  });
};

const setupAddToCartButtons = () => {
  document.querySelectorAll(".Add_Cart").forEach((buttonCart) => {
    buttonCart.addEventListener("click", addToCartEvent);
  });
};

const setupFilterInput = () => {
  document.querySelector(".input").addEventListener("keyup", filterCard);
};
