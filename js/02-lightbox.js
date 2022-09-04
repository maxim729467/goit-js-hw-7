import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const markup = galleryItems.map(({ preview, original, description }) => {
  return `
  <a class="gallery__item" href=${original}>
    <img 
      class="gallery__image"
      src=${preview} 
      alt="${description}" 
    />
  </a>
  `;
});

gallery.insertAdjacentHTML("afterbegin", markup.join(""));

new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
  enableKeyboard: true,
  animationSpeed: 150,
  fadeSpeed: 200,
  captionPosition: "outside",
});
