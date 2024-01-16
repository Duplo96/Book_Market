import { getBookByID } from "./fetch.js";
import { detailCard } from "./components.js";

let book = {};

window.addEventListener("DOMContentLoaded", init);
async function init() {
  const params = new URLSearchParams(location.search);
  const id = params.get("id");
  book = await getBookByID(id);
  detailCard(book);
}
