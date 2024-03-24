import { thumbnails } from './thumbnails.js';
import { gallery } from './gallery.js';
import { setFormSubmit } from './validate-form.js';
import { closeUploadModal } from './form.js';
import { getData } from './api.js';
import { showGalleryErrorMessage } from './message.js';

getData()
  .then((photos) => {
    thumbnails(photos);
    gallery(photos);
  })
  .catch(() => {
    showGalleryErrorMessage();
  });

setFormSubmit(closeUploadModal);

