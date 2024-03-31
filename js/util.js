const DEBOUNCE_DELAY = 500;

/* Генерация случайного целого числа из диапазона */
const getRandomInteger = (firstNumber, secondNumber) => {
  const lower = Math.ceil(Math.min(firstNumber, secondNumber));
  const upper = Math.floor(Math.max(firstNumber, secondNumber));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

/* Генерация неповторяющегося целого числа из диапазона */
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

/* Генерация уникального id */
function createIdGenerator () {
  let lastGeneratedId = 0;

  return function () {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
}

/* Проверка нажатия клавиши ESC */
const isEscapeKey = (evt) => evt.key === 'Escape';

/* Устранение дребезга */
function debounce (callback, timeoutDelay = DEBOUNCE_DELAY) {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

/* Пропуск кадров */
function throttle (callback, delayBetweenFrames) {
  let lastTime = 0;
  return (...rest) => {
    const now = new Date();
    if (now - lastTime >= delayBetweenFrames) {
      callback.apply(this, rest);
      lastTime = now;
    }
  };
}

export {getRandomInteger, getRandomIntegerFromRange, createIdGenerator, isEscapeKey, debounce, throttle };
