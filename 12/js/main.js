import { renderThumbnails } from './thumbnails.js';
import { gallery } from './gallery.js';
import { setFormSubmit } from './validate-form.js';
import { getData } from './api.js';
import { showGalleryErrorMessage } from './message.js';
import { showFilters, onFiltersClick } from './filters.js';

getData()
  .then((photos) => {
    renderThumbnails(photos);
    gallery(photos);
    showFilters();
    onFiltersClick(photos);
  })
  .catch(() => {
    showGalleryErrorMessage();
  });

setFormSubmit();

