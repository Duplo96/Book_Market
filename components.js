import { getBookByID } from "./fetch.js";

// script create Card on HTML

const createCard = (book) => {
  const { title, img, price, category, asin } = book;

  return `
    <div id="${asin}" class="card shadow col-4 mx-2 my-5 position-relative p-0" style="width: 18rem">
      <ion-icon
        name="cart"
        class="position-absolute top-0 end-0 text-danger fs-2 carts d-none"
      ></ion-icon>
      <img src="${img}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">${category}</p>
        <a href="#" id="button-${asin}" class="btn btn-primary Add_Cart">${price}</a>
        <a href="#" class="btn btn-primary skip-button">Non mi interessa</a>
      </div>
    </div>`;
};

// Script add to cart and change CSS card

const addToCartEvent = async (ev) => {
  const card = ev.target.closest(".card");
  const cartIcon = card.querySelector(".carts");
  cartIcon.classList.toggle("d-none");
  cartIcon.classList.toggle("cart");
  card.classList.toggle("addingCart");
  const bookId = ev.target.closest(".card").id;
  const cartItemId = `li-${bookId}`;
  let currentListItem = document.getElementById(cartItemId);
  let cart = document.getElementById("cartItem");
  if (currentListItem === null) {
    const bookData = await getBookByID(bookId);
    cart.innerHTML += `<li  id="${cartItemId}">  ${bookData.title} </li>`;
  } else {
    currentListItem.remove();
  }
};

// Script for filter Card on input

const filterCard = () => {
  const input = document.querySelector(".input");
  let elementsToCheck = [...document.querySelectorAll(".card")];
  elementsToCheck.forEach((elementToCheck) => {
    const cardTitle = elementToCheck
      .querySelector(".card-title")
      .innerText.toLowerCase();
    const shouldDisplay =
      cardTitle.includes(input.value.toLowerCase()) || input.value.length < 3;
    elementToCheck.style.display = shouldDisplay ? "block" : "none";
  });
};
export { createCard, addToCartEvent, filterCard };
