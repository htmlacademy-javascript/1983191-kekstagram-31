import { RANDOM_PICTURES_AMOUNT, RENDER_DELAY, ACTIVE_BUTTON_CLASS, Filter } from './consts.js';
import { debounce } from './util.js';
import { removeThumbnails } from './thumbnails.js';

const filters = document.querySelector('.img-filters');
let currentActiveButton = filters.querySelector('#filter-default');

const showFilters = () => {
  filters.classList.remove('img-filters--inactive');
};

const sortByComments = (photoA, photoB) => photoB.comments.length - photoA.comments.length;

const sortRandomly = () => 0.5 - Math.random();

const getFilteredPictures = (filter, photos) => {
  switch (filter) {
    case Filter.RANDOM: {
      return photos.toSorted(sortRandomly).slice(0, RANDOM_PICTURES_AMOUNT);
    }

    case Filter.DISCUSSED:
      return photos.toSorted(sortByComments);

    default:
      return photos;
  }
};

const filterPictures = (evt, cb, photos) => {
  if (evt.target.classList.contains('img-filters__button')) {
    currentActiveButton.classList.remove(ACTIVE_BUTTON_CLASS);
    currentActiveButton = evt.target;
    currentActiveButton.classList.add(ACTIVE_BUTTON_CLASS);

    const filtersData = getFilteredPictures(evt.target.id, photos);
    cb(filtersData);
  }
};

const initFilter = (cb, photos) => {
  showFilters();

  const getDebouncedFunction = debounce((data) => {
    removeThumbnails();
    cb(data);
  }, RENDER_DELAY);

  const onFilterBtnClick = (evt) => filterPictures(evt, getDebouncedFunction, photos);
  filters.addEventListener('click', onFilterBtnClick);
};

export { initFilter };
