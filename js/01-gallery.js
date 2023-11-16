import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
const markup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
             <img
             class="gallery__image"
             src="${preview}"
             data-source="${original}"
             alt="${description}"
             />
             </a>
        </li>`
  )
  .join("");
gallery.insertAdjacentHTML("beforeend", markup);
gallery.addEventListener("click", onClick);
function onClick(event) {
  event.preventDefault();
  if (event.target !== event.curentTarget) {
    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">`);
    instance.show();
    window.addEventListener("keydown", closeModal);
    const modal = document.querySelector(".basicLightbox");
    function closeModal(event) {
      if (event.key === "Escape") {
        window.removeEventListener("keydown", closeModal);
        instance.close();
      }
    }
  }
}
