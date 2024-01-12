export function createCard(book) {
  const { title, img, price, category } = book;

  return `
    <div class="card col-4 position-relative p-0" style="width: 18rem">
      <ion-icon
        name="cart"
        class="position-absolute top-0 end-0 text-danger fs-2 carts d-none"
      ></ion-icon>
      <img src="${img}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">${category}</p>
        <a href="#" class="btn btn-primary Add_Cart">${price}</a>
        <a href="#" class="btn btn-primary skip-button">Non mi interessa</a>
      </div>
    </div>`;
}
