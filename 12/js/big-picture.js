import {isEscapeKey} from './util.js';
import { removeComments, renderComments } from './comments.js';

const body = document.body;
const picrureModal = document.querySelector('.big-picture');
const picrureModalCloseBtn = picrureModal.querySelector('.big-picture__cancel');

const renderPictureModal = ({url, likes, comments, description}) => {
  const image = picrureModal.querySelector('.big-picture__img img');
  image.src = url;
  image.alt = description;

  picrureModal.querySelector('.likes-count').textContent = likes;
  picrureModal.querySelector('.social__caption').textContent = description;
  picrureModal.querySelector('.social__comment-total-count').textContent = comments.length;

  renderComments(comments);
};

const onPicrureModalCloseBtnClick = () => {
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
  picrureModal.classList.add('hidden');
  body.classList.remove('modal-open');
  picrureModalCloseBtn.removeEventListener('click', onPicrureModalCloseBtnClick);
  document.removeEventListener('keydown', onDocumentKeydown);
}

function openPictureModal (photo) {
  picrureModal.classList.remove('hidden');
  body.classList.add('modal-open');
  renderPictureModal(photo);
  picrureModalCloseBtn.addEventListener('click', onPicrureModalCloseBtnClick);
  document.addEventListener('keydown', onDocumentKeydown);
}

export { openPictureModal };
