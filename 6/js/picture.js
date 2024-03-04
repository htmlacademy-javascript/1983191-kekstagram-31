import {createGallery} from './mock-data.js';

const purturesContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const picturesList = createGallery();

const createPicture = () => {
  const picturesListFragment = document.createDocumentFragment();

  picturesList.forEach(({url, description, likes, comments}) => {
    const pictureItem = pictureTemplate.cloneNode(true);
    pictureItem.querySelector('.picture__img').src = url;
    pictureItem.querySelector('.picture__img').alt = description;
    pictureItem.querySelector('.picture__likes').textContent = likes;
    pictureItem.querySelector('.picture__comments').textContent = comments.length;

    picturesListFragment.appendChild(pictureItem);
  });

  purturesContainer.appendChild(picturesListFragment);
};

export {createPicture};
