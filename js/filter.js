import { debounce } from './util.js';
import { removeThumbnails, renderThumbnails } from './thumbnails.js';

const RANDOM_PICTURES_AMOUNT = 10;
const RENDER_DELAY = 500;
const Filter = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed',
};
const ACTIVE_BUTTON_CLASS = 'img-filters__button--active';
const filters = document.querySelector('.img-filters');

let currentFilter = Filter.DEFAULT;

const showFilters = () => {
  filters.classList.remove('img-filters--inactive');
};

const sortByComments = (photoA, photoB) => photoB.comments.length - photoA.comments.length;

const sortRandomly = () => 0.5 - Math.random();

const getFilteredPictures = (picturesData) => {
  switch (currentFilter) {
    case Filter.RANDOM:
      return picturesData.toSorted(sortRandomly).slice(0, RANDOM_PICTURES_AMOUNT);

    case Filter.DISCUSSED:
      return picturesData.toSorted(sortByComments);

    default:
      return picturesData;
  }
};

const filterPictures = (evt, picturesData) => {
  const turgetFilterButton = evt.target.closest('.img-filters__button');

  if(!turgetFilterButton) {
    return;
  }

  const activeFilterButton = document.querySelector(`.${ACTIVE_BUTTON_CLASS}`);

  activeFilterButton.classList.remove(ACTIVE_BUTTON_CLASS);
  turgetFilterButton.classList.add(ACTIVE_BUTTON_CLASS);
  currentFilter = turgetFilterButton.getAttribute('id');

  removeThumbnails();

  const filteredPictures = getFilteredPictures(picturesData);
  renderThumbnails(filteredPictures);
};

const initFilter = (picturesData) => {
  showFilters();
  const onFilterBtnClick = debounce((evt) => filterPictures(evt, picturesData), RENDER_DELAY);
  filters.addEventListener('click', onFilterBtnClick);
};

export { initFilter };
