const GALLERY_SIZE = 25;
const COUNT_LIKE_MIN = 15;
const COUNT_LIKE_MAX = 200;
const COUNT_AVATAR = 6;
const COMMENTS_MAX = 30;

const NAMES = [
  'Акакий',
  'Варсонофий',
  'Пафнутий',
  'Пантелеймон',
  'Евграф',
  'Евпраксия',
  'Акулина',
  'Вавила',
  'Филицата',
  'Ксенофонт',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const DESCRIPTIONS = [
  'Лайк. Шер. Репост',
  'Милоты пост',
  'Ёж - птица гордая! Не пнёшь - не полетит!',
  'Не могу пройти мимо безобразия. Так и хочется принять участие!',
  'От улыыыыбки сводит рот моржуууу... И слону и даже маленькой улиткеее...',
];

const getRandomInteger = (firstNumber, secondNumber) => {
  const lower = Math.ceil(Math.min(firstNumber, secondNumber));
  const upper = Math.floor(Math.max(firstNumber, secondNumber));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomIntegerFromRange = (min, max) => {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      // Перебраны все числа из диапазона от  min до max
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

function createIdGenerator () {
  let lastGeneratedId = 0;

  return function () {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
}

const generateId = createIdGenerator();
const generateUrl = createIdGenerator();

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createComment = () => ({
  id: getRandomIntegerFromRange(1, GALLERY_SIZE * COMMENTS_MAX)(),
  avatar: `img/avatar-${getRandomIntegerFromRange(1, COUNT_AVATAR)()}.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES),
});

const createPost = () => ({
  id: generateId(),
  url: `photos/${generateUrl()}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(COUNT_LIKE_MIN, COUNT_LIKE_MAX),
  comments: Array.from({length: getRandomInteger(0, COMMENTS_MAX)}, createComment),
});

const createGallery = () => Array.from({length: GALLERY_SIZE}, createPost);

createGallery();
