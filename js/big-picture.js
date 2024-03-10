import {isEscapeKey} from './util.js';
import { removeComments, renderComments } from './comments.js';

const body = document.body;
const picrureModal = document.querySelector('.big-picture');
const picrureModalClose = picrureModal.querySelector('.big-picture__cancel');

const renderModal = ({url, likes, comments, description}) => {
  const image = picrureModal.querySelector('.big-picture__img img');
  image.src = url;
  image.alt = description;

  picrureModal.querySelector('.likes-count').textContent = likes;
  picrureModal.querySelector('.social__caption').textContent = description;

  removeComments();
  renderComments(comments);
};

function onDocumentKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModal();
  }
}

function closeModal () {
  picrureModal.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
}

function openModal (photo) {
  picrureModal.classList.remove('hidden');
  body.classList.add('modal-open');

  renderModal(photo);

  picrureModal.querySelector('.social__comment-count').classList.add('hidden');
  picrureModal.querySelector('.comments-loader').classList.add('hidden');

  document.addEventListener('keydown', onDocumentKeydown);
}

picrureModalClose.addEventListener('click', () => {
  closeModal ();
});

export {openModal};
