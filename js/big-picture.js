import {isEscapeKey} from './util.js';
import { removeComments, renderComments } from './comments.js';

const body = document.body;
const pictureModal = document.querySelector('.big-picture');
const pictureModalCloseBtn = pictureModal.querySelector('.big-picture__cancel');

const renderPictureModal = ({url, likes, comments, description}) => {
  const image = pictureModal.querySelector('.big-picture__img img');
  image.src = url;
  image.alt = description;

  pictureModal.querySelector('.likes-count').textContent = likes;
  pictureModal.querySelector('.social__caption').textContent = description;
  pictureModal.querySelector('.social__comment-total-count').textContent = comments.length;

  renderComments(comments);
};

const onpictureModalCloseBtnClick = () => {
  closePictureModal();
};

function onDocumentKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closePictureModal();
  }
}

function closePictureModal () {
  removeComments();
  pictureModal.classList.add('hidden');
  body.classList.remove('modal-open');
  pictureModalCloseBtn.removeEventListener('click', onpictureModalCloseBtnClick);
  document.removeEventListener('keydown', onDocumentKeydown);
}

function openPictureModal (photo) {
  pictureModal.classList.remove('hidden');
  body.classList.add('modal-open');
  renderPictureModal(photo);
  pictureModalCloseBtn.addEventListener('click', onpictureModalCloseBtnClick);
  document.addEventListener('keydown', onDocumentKeydown);
}

export { openPictureModal };
