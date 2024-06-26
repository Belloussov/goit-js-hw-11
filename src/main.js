import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getPhotos } from './js/pixabay-api';
import { photosTemplate } from './js/render-functions';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
lightbox.on('show.simplelightbox', function () {});

const preloader = document.querySelector('.loader');

function showLoader() {
  return preloader.classList.remove('is-hidden');
}
function hideLoader() {
  return preloader.classList.add('is-hidden');
}
hideLoader();

form.addEventListener('submit', e => {
  e.preventDefault();

  const inputValue = e.target.elements.search.value.trim();
  if (inputValue === '') {
    return iziToast.warning({
      message: 'Please complete the field!',
      color: 'red',
      position: 'topRight',
    });
  }
  showLoader();
  getPhotos(inputValue)
    .then(photos => {
      const markup = photosTemplate(photos.hits);
      if (photos.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          color: 'red',
        });
      } else {
        gallery.innerHTML = markup;
        lightbox.refresh();
      }
    })
    .catch(error => {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
        color: 'red',
      });
    })
    .finally(() => {
      hideLoader();
      form.reset();
    });
});
