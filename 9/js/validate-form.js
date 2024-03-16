
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

const isHashtagsAmountValid = (value) => value.trim().split(' ').length <= MAX_HASHTAGS_AMOUNT;

pristine.addValidator(hashtagsField,
  isHashtagsAmountValid,
  `Не более ${MAX_HASHTAGS_AMOUNT} хештегов`,
);

const isHashtagValid = (value) => VALID_SYMBOLS.test(value);
const validateHashtags = (value) => {
  const tags = value.trim().split(' ').filter((tag) => tag.trim().length);
  return tags.every(isHashtagValid);
};

pristine.addValidator(hashtagsField,
  validateHashtags,
  `Хэштег должен начинаться с # и содержать не более ${MAX_HASHTAG_LENGTH} символов в теге. Разрешены только буквы кириллицы / латиницы и цифры`,
);

const hasUniqueHashtags = (value) => {
  const lowerTags = value.trim().split(' ').map((tag) => tag.toLowerCase());
  return lowerTags.length === new Set(lowerTags).size;
};

pristine.addValidator(hashtagsField,
  hasUniqueHashtags,
  'Хэштеги не должны повторяться',
);

const validateForm = () => {
  form.addEventListener('submit', (evt) => {
    if(!pristine.validate()) {
      evt.preventDefault();
    }
  });
};

export { validateForm };
