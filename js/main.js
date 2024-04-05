import { renderThumbnails } from './thumbnails.js';
import { listenToThumbnailClick } from './listen-to-thumbnail-click.js';
import { listenToFormSubmit } from './validate-form.js';
import { getData } from './api.js';
import { showDataErrorMessage } from './message.js';
import { initFilter } from './filter.js';

getData()
  .then((photos) => {
    renderThumbnails(photos);
    listenToThumbnailClick(photos);
    initFilter(renderThumbnails, photos);
  })
  .catch(() => {
    showDataErrorMessage();
  });

listenToFormSubmit();
