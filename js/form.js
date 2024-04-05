import { FILE_TYPES } from './consts.js';
import { isEscapeKey } from './util.js';
import { resetValidator } from './validate-form.js';
import { resetScale } from './scale.js';
import { resetEffects } from './effects.js';
import { showDataErrorMessage } from './message.js';

const body = document.body;
const form = document.querySelector('.img-upload__form');
const uploadInput = form.querySelector('.img-upload__input');
const uploadOverlay = form.querySelector('.img-upload__overlay');

const uploadModalClose = uploadOverlay.querySelector('.img-upload__cancel');
const hashtagsField = uploadOverlay.querySelector('.text__hashtags');
const descriptionField = uploadOverlay.querySelector('.text__description');

const preview = uploadOverlay.querySelector('.img-upload__preview img');
const effectsPreviews = uploadOverlay.querySelectorAll('.effects__preview');

const onUploadInputChange = () => {
  const file = uploadInput.files[0];
  const fileName = file.name.toLowerCase();
  const fileExt = fileName.split('.').pop();
  const matches = FILE_TYPES.includes(fileExt);

  if(!matches) {
    showDataErrorMessage('Неверный тип файла');
    return;
  }

  preview.src = URL.createObjectURL(file);
  effectsPreviews.forEach((item) => {
    item.style.backgroundImage = `url('${preview.src}')`;
  });

  openUploadModal();
};

const isTextFieldFocused = () =>
  document.activeElement === hashtagsField ||
  document.activeElement === descriptionField;

const isErrorMessageShown = () => Boolean(document.querySelector('.error'));

const onUploadModalCloseClick = () => {
  closeUploadModal();
};

function onDocumentKeydown(evt) {
  if (isEscapeKey(evt) && !isTextFieldFocused() && !isErrorMessageShown()) {
    evt.preventDefault();
    closeUploadModal();
  }
}

function openUploadModal() {
  uploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  uploadModalClose.addEventListener('click', onUploadModalCloseClick);
  document.addEventListener('keydown', onDocumentKeydown);
}

function closeUploadModal() {
  form.reset();
  resetValidator();
  resetScale();
  resetEffects();
  uploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  uploadModalClose.removeEventListener('click', onUploadModalCloseClick);
  document.removeEventListener('keydown', onDocumentKeydown);
}

uploadInput.addEventListener('change', onUploadInputChange);

export { closeUploadModal };
