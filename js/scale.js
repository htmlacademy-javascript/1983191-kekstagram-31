import { SCALE_STEP, MIN_SCALE_VALUE, MAX_SCALE_VALUE, DEFAULT_SCALE_VALUE } from './consts.js';

const scale = document.querySelector('.img-upload__scale');
const zoomOutButton = scale.querySelector('.scale__control--smaller');
const zoomInButton = scale.querySelector('.scale__control--bigger');
const scaleValue = scale.querySelector('.scale__control--value');
const preview = document.querySelector('.img-upload__preview img');

const scalePreview = (value) => {
  preview.style.transform = `scale(${value / 100})`;
  scaleValue.value = `${value}%`;
};

const zoomIn = () => {
  scalePreview(Math.min(
    parseInt(scaleValue.value, 10) + SCALE_STEP, MAX_SCALE_VALUE)
  );
};

const zoomOut = () => {
  scalePreview(Math.max(
    parseInt(scaleValue.value, 10) - SCALE_STEP, MIN_SCALE_VALUE)
  );
};

const resetScale = () => scalePreview(DEFAULT_SCALE_VALUE);

zoomInButton.addEventListener('click', zoomIn);
zoomOutButton.addEventListener('click', zoomOut);

export { resetScale };
