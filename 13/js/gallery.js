import { openPictureModal } from './big-picture.js';

const container = document.querySelector('.pictures');

const gallery = (photos) => {
  container.addEventListener('click', (evt) => {
    const targetPicture = evt.target.closest('.picture');

    if(!targetPicture) {
      return;
    }

    evt.preventDefault();
    const targetPictureId = targetPicture.getAttribute('data-id');
    const targetPhoto = photos.find((photo) => photo.id === +targetPictureId);

    openPictureModal(targetPhoto);
  });
};

export { gallery };
