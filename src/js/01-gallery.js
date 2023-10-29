import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items';

const list = document.querySelector('.gallery');

list.insertAdjacentHTML('beforeend', createMarkupList(galleryItems));


function createMarkupList(arr) {
  return arr.map(({ preview, description, original }) => `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
      </li>
    `)
    .join(' ');
};

const lightbox = new SimpleLightbox('.gallery__item a', {
  captionsData: 'alt',
  captionDelay: 250,
});