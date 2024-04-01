const BASE_URL = 'https://31.javascript.htmlacademy.pro/kekstagram';

const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};

const Method = {
  GET: 'GET',
  POST: 'POST',
};

const ErrorText = {
  GET_DATA: 'Не удалось загрузить данные. Попробуйте обновить страницу',
  SEND_DATA: 'Не удалось отправить форму. Попробуйте ещё раз',
};

const COMMENTS_LOADING_STEP = 5;

const EFFECTS = [
  {
    name: 'none',
    filter: 'none',
    min: 0,
    max: 1,
    unit: '',
  },
  {
    name: 'chrome',
    filter: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'sepia',
    filter: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'marvin',
    filter: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
  },
  {
    name: 'phobos',
    filter: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px',
  },
  {
    name: 'heat',
    filter: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: '',
  }
];

const DEFAULT_EFFECT = EFFECTS[0];

const RANDOM_PICTURES_AMOUNT = 10;

const RENDER_DELAY = 500;

const Filter = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed',
};

const ACTIVE_BUTTON_CLASS = 'img-filters__button--active';

const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const MESSAGE_SHOW_TIME = 5000;

const SCALE_STEP = 25;

const MIN_SCALE_VALUE = 25;

const MAX_SCALE_VALUE = 100;

const DEFAULT_SCALE_VALUE = MAX_SCALE_VALUE;

const DEBOUNCE_DELAY = 500;

const MAX_HASHTAGS_AMOUNT = 5;

const MAX_HASHTAG_LENGTH = 20;

const MAX_DESCRIPTION_LENGTH = 140;

const VALID_SYMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;

const SubmitButtonText = {
  IDLE: 'Сохранить',
  SENDING: 'Сохраняю...'
};

export {
  BASE_URL,
  Route,
  Method,
  ErrorText,
  COMMENTS_LOADING_STEP,
  EFFECTS,
  DEFAULT_EFFECT,
  RANDOM_PICTURES_AMOUNT,
  RENDER_DELAY,
  Filter,
  ACTIVE_BUTTON_CLASS,
  FILE_TYPES,
  MESSAGE_SHOW_TIME,
  SCALE_STEP,
  MIN_SCALE_VALUE,
  MAX_SCALE_VALUE,
  DEFAULT_SCALE_VALUE,
  DEBOUNCE_DELAY,
  MAX_HASHTAGS_AMOUNT,
  MAX_HASHTAG_LENGTH,
  MAX_DESCRIPTION_LENGTH,
  VALID_SYMBOLS,
  SubmitButtonText
};
