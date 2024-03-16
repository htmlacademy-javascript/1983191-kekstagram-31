import {isEscapeKey} from './util.js';
import { validateForm } from './validate-form.js';

const body = document.body;
const form = document.querySelector('.img-upload__form');
const uploadInput = form.querySelector('.img-upload__input');
const uploadOverlay = form.querySelector('.img-upload__overlay');

const uploadModalClose = uploadOverlay.querySelector('.img-upload__cancel');
const hashtagsField = uploadOverlay.querySelector('.text__hashtags');
const descriptionField = uploadOverlay.querySelector('.text__description');

function onDocumentKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModal();
  }
}

function openModal() {
  uploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
}

function closeModal() {
  uploadInput.value = '';
  hashtagsField.value = '';
  descriptionField.value = '';

  uploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
}

uploadInput.addEventListener('change', openModal);

uploadModalClose.addEventListener('click', () => {
  closeModal();
});

descriptionField.addEventListener('keydown', (evt) => evt.stopPropagation());
hashtagsField.addEventListener('keydown', (evt) => evt.stopPropagation());

validateForm();
