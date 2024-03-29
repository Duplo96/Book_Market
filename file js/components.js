import { getBookByID } from "../file js/fetch.js";

// script create Card on HTML

const createCard = (book) => `
  <div id="${book.asin}" class="card shadow col-4 mx-2 my-5 position-relative p-0" style="width: 18rem">
    <ion-icon
      name="cart"
      class="position-absolute top-0 end-0 text-danger fs-2 carts d-none"
    ></ion-icon>
    <img src="${book.img}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${book.title}</h5>
      <p class="card-text">${book.category}</p>
      <a href="#" id="button-${book.asin}" class="btn btn-primary Add_Cart">${book.price}</a>
      <a href="#" id"button-skip${book.asin}" class="btn btn-primary skip-button">Non mi interessa</a>
      <a class="btn btn-warning detailsButton" href="./details.html?id=${book.asin}">Details</a>
    </div>
    </div>`;

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

// Script skip to cart
const skipCard = (ev) => {
  const clickedButton = ev.target.closest(".skip-button");
  if (clickedButton) {
    const cardToSkip = clickedButton.closest(".card");
    if (cardToSkip) {
      cardToSkip.classList.add("d-none");
    }
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

const detailCard = (book) => {
  const bookContainer = document.querySelector(".container");
  bookContainer.innerHTML = `
    <h1 class="my-5 title">${book.title}</h1>
      <div class="d-flex book">
        <img src="${book.img}" alt="cover" class="me-5 cover w-25"/>
        <div class="detail">
          <p>
            <span class="fw-bold">Description: </span><br>
            
          </p>
          <p class="fw-bold">Price: <span class="price fw-normal">${book.price}$</span></p>
          <p class="fw-bold">Category: <span class="category fw-normal">${book.category}</span></p>
        </div>
      </div>`;
};
export { createCard, addToCartEvent, filterCard, detailCard, skipCard };
