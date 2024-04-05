import { COMMENTS_LOADING_STEP } from './consts.js';

let currentCount = 0;
let comments = [];

const pictureModal = document.querySelector('.big-picture');
const container = pictureModal.querySelector('.social__comments');
const template = document.querySelector('#comment').content.querySelector('.social__comment');
const commentsLoader = pictureModal.querySelector('.comments-loader');
const shownCommentsElement = pictureModal.querySelector('.social__comment-shown-count');
container.innerHTML = '';

const createComment = ({avatar, name, message}) => {
  const comment = template.cloneNode(true);
  const author = comment.querySelector('.social__picture');

  author.src = avatar;
  author.alt = name;
  comment.querySelector('.social__text').textContent = message;

  return comment;
};

const renderNextComments = () => {
  const fragment = document.createDocumentFragment();
  const renderedComments = comments.slice(currentCount, currentCount + COMMENTS_LOADING_STEP);
  const renderedCommentsLength = renderedComments.length + currentCount;

  renderedComments.forEach((comment) => {
    const commentItem = createComment(comment);
    fragment.append(commentItem);
  });

  container.append(fragment);

  shownCommentsElement.textContent = renderedCommentsLength;

  if (renderedCommentsLength >= comments.length) {
    commentsLoader.classList.add('hidden');
  }

  currentCount += COMMENTS_LOADING_STEP;
};

const onCommentsLoaderClick = () => {
  renderNextComments();
};

const removeComments = () => {
  currentCount = 0;
  container.innerHTML = '';
  commentsLoader.classList.remove('hidden');
  commentsLoader.removeEventListener('click', onCommentsLoaderClick);
};

const renderComments = (photoComments) => {
  comments = photoComments;
  renderNextComments();

  commentsLoader.addEventListener('click', onCommentsLoaderClick);
};

export { removeComments, renderComments };
