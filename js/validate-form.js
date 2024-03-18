
const MAX_HASHTAGS_AMOUNT = 5;
const MAX_HASHTAG_LENGTH = 20;
const MAX_DESCRIPTION_LENGTH = 140;
const VALID_SYMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;

const form = document.querySelector('.img-upload__form');
const hashtagsField = form.querySelector('.text__hashtags');
const descriptionField = form.querySelector('.text__description');

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'div',
  errorTextClass: 'img-upload__field-wrapper--error',
});

const validateDescription = (value) => value.length <= MAX_DESCRIPTION_LENGTH;

pristine.addValidator(descriptionField,
  validateDescription,
  `Не более ${MAX_DESCRIPTION_LENGTH} символов`,
);

const normalizeTags = (tags) => tags.trim().split(' ').map((tag) => tag.toLowerCase()).filter((tag) => tag.trim().length);

const isHashtagsAmountValid = (value) => normalizeTags(value).length <= MAX_HASHTAGS_AMOUNT;

const validateHashtags = (value) => normalizeTags(value).every((tag) => VALID_SYMBOLS.test(tag));

const hasUniqueHashtags = (value) => normalizeTags(value).length === new Set(normalizeTags(value)).size;

pristine.addValidator(hashtagsField,
  isHashtagsAmountValid,
  `Не более ${MAX_HASHTAGS_AMOUNT} хештегов`,
);

pristine.addValidator(hashtagsField,
  validateHashtags,
  `Хэштег должен начинаться с # и содержать не более ${MAX_HASHTAG_LENGTH} символов в теге. Разрешены только буквы кириллицы / латиницы и цифры`,
);

pristine.addValidator(hashtagsField,
  hasUniqueHashtags,
  'Хэштеги не должны повторяться',
);

const resetValidator = () => {
  pristine.reset();
};

const validateForm = () => {
  form.addEventListener('submit', (evt) => {
    if(!pristine.validate()) {
      evt.preventDefault();
    }
  });
};

export { validateForm, resetValidator };
