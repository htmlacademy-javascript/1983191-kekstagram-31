const COMMENTS_LOADING_STEP = 5;

const picrureModal = document.querySelector('.big-picture');
const container = picrureModal.querySelector('.social__comments');
const template = document.querySelector('#comment').content.querySelector('.social__comment');

let shownCommentsCounter = 0;
let allComments = [];
const commentsLoader = picrureModal.querySelector('.comments-loader');
const shownCommentsElement = picrureModal.querySelector('.social__comment-shown-count');

const removeComments = () => {
  container.innerHTML = '';
};

const checkMoreComments = () => {
  if (allComments.length <= shownCommentsCounter) {
    commentsLoader.classList.add('hidden');
  } else {
    commentsLoader.classList.remove('hidden');
  }
};

const createComment = ({avatar, name, message}) => {
  const comment = template.cloneNode(true);
  const author = comment.querySelector('.social__picture');

  author.src = avatar;
  author.alt = name;
  comment.querySelector('.social__text').textContent = message;

  return comment;
};

const renderComments = (comments, isFirstLoading) => {
  if (isFirstLoading) {
    shownCommentsCounter = 0;
    allComments = comments;
  }

  const showMoreCounter = Math.min(shownCommentsCounter + COMMENTS_LOADING_STEP, allComments.length);

  const fragment = document.createDocumentFragment();

  for (let i = shownCommentsCounter; i < showMoreCounter; i++) {
    const comment = createComment(comments[i]);
    fragment.append(comment);
  }

  container.append(fragment);

  shownCommentsCounter = showMoreCounter;
  shownCommentsElement.textContent = shownCommentsCounter;
  checkMoreComments();
};

commentsLoader.addEventListener('click', () => {
  renderComments(allComments);
});

export {removeComments, renderComments};
