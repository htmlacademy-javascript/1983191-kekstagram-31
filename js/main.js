import { renderThumbnails } from './thumbnails.js';
import { gallery } from './gallery.js';
import { setFormSubmit } from './validate-form.js';
import { getData } from './api.js';
import { showGalleryErrorMessage } from './message.js';
import { initFilter } from './filter.js';

getData()
  .then((photos) => {
    renderThumbnails(photos);
    gallery(photos);
    initFilter(photos);
  })
  .catch(() => {
    showGalleryErrorMessage();
  });

setFormSubmit();

