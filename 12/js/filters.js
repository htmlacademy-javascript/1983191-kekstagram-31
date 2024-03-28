import { getRandomIntegerFromRange, debounce } from './util.js';
import { removeThumbnails, renderThumbnails } from './thumbnails.js';

const GALLERY_SIZE = 25;
const RANDOM_PICTURES_AMOUNT = 10;
const RENDER_DELAY = 500;
const Filter = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed',
};

const filters = document.querySelector('.img-filters');
let activeFilter = filters.querySelector('#filter-default');

const showFilters = () => {
  filters.classList.remove('img-filters--inactive');
};

const sortByComments = (photoA, photoB) => photoB.comments.length - photoA.comments.length;

const sortRandomly = () => {
  const generateId = getRandomIntegerFromRange(0, GALLERY_SIZE - 1);
  const randomIds = Array.from({length: RANDOM_PICTURES_AMOUNT}, generateId);
  return randomIds;
};

const getFilteredPictures = (evt, picturesData) => {
  switch (evt.target.id) {
    case Filter.RANDOM:
      return Array.from(sortRandomly(), (id) => picturesData[id]);

    case Filter.DISCUSSED:
      return picturesData.slice().sort(sortByComments);

    default:
      return picturesData;
  }
};

const filterPictures = (evt, picturesData) => {
  const targetFilter = evt.target.closest('.img-filters__button');

  if(!targetFilter) {
    return;
  }

  activeFilter.classList.remove('img-filters__button--active');
  targetFilter.classList.add('img-filters__button--active');
  activeFilter = targetFilter;

  removeThumbnails();

  const filtersData = getFilteredPictures(evt, picturesData);
  renderThumbnails(filtersData);
};

const onFiltersClick = (picturesData) => {
  const onFilterBtnClick = debounce((evt) => filterPictures(evt, picturesData), RENDER_DELAY);
  filters.addEventListener('click', onFilterBtnClick);
};

export { showFilters, onFiltersClick };
