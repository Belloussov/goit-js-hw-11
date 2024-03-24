import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getPhotos } from './js/pixabay-api';
import { photosTemplate } from './js/render-functions';
const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');

form.addEventListener('submit', e => {
  e.preventDefault();

  const inputValue = e.target.elements.search.value.trim();

  if (inputValue.length !== 0) {
    getPhotos(inputValue).then((photos) => {
      const markup = photosTemplate(photos.hits);
      if (photos.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          color: 'red',
        });
      } else {
        gallery.innerHTML = markup;
      }
    });
  }
});
