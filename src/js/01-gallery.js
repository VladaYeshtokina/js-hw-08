// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line


const galleryRef = document.querySelector('.gallery');

galleryRef.innerHTML = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
  <a class="gallery__link" href="${original}" alt = "${description}">
    <img
      class="gallery__image"
      src="${preview}"      
      alt="${description}"      
    >
  </a>
</li>`
  )
  .join('');

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});



console.log();
