import {createGallery} from './mock-data.js';

const purturesContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const createPictures = () => {
  const picturesList = createGallery();
  const picturesListFragment = document.createDocumentFragment();

  picturesList.forEach(({url, description, likes, comments}) => {
    const pictureItem = pictureTemplate.cloneNode(true);
    const pictureImg = pictureItem.querySelector('.picture__img');
    pictureImg.src = url;
    pictureImg.alt = description;
    pictureItem.querySelector('.picture__likes').textContent = likes;
    pictureItem.querySelector('.picture__comments').textContent = comments.length;

    picturesListFragment.appendChild(pictureItem);
  });

  purturesContainer.appendChild(picturesListFragment);
};

export {createPictures};
