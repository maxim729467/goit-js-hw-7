import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
let instance;

const markup = galleryItems.map(({ preview, original, description }) => {
  return `
    <div class="gallery__item">
    <a class="gallery__link" href=${original}>
      <img
        class="gallery__image"
        src=${preview}
        data-source=${original}
        alt="${description}"
      />
    </a>
  </div>
  `;
});

gallery.insertAdjacentHTML("afterbegin", markup.join(""));

gallery.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") return;

  instance = basicLightbox.create(`
    <img src=${e.target.dataset.source} width="800" height="600">
`);

  instance.show();
  document.body.addEventListener("keydown", onKeyDownHandler);
});

function onKeyDownHandler(e) {
  if (e.key !== "Escape") return;
  instance.close();
  document.body.removeEventListener("keydown", onKeyDownHandler);
}
