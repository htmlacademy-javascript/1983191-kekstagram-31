const picrureModal = document.querySelector('.big-picture');
const container = picrureModal.querySelector('.social__comments');
const template = document.querySelector('#comment').content.querySelector('.social__comment');

const removeComments = () => {
  container.innerHTML = '';
};

const createComment = ({avatar, name, message}) => {
  const comment = template.cloneNode(true);
  const author = comment.querySelector('.social__picture');

  author.src = avatar;
  author.alt = name;
  comment.querySelector('.social__text').textContent = message;

  return comment;
};

const renderComments = (comments) => {
  const fragment = document.createDocumentFragment();

  comments.forEach((commentItem) => {
    const comment = createComment(commentItem);
    fragment.append(comment);
  });

  container.append(fragment);
};

export {removeComments, renderComments};
