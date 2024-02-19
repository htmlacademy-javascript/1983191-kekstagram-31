// 1. Функция для проверки длины строки.
const checkLength = (string, maxLength) => string.length <= maxLength;

checkLength('проверяемая строка', 20); // true
checkLength('проверяемая строка', 18); // true
checkLength('проверяемая строка', 10); // false

// 2. Функция для проверки, является ли строка палиндромом.
const checkPalindrome = (string) => {
  let reversedString = '';
  const normalizedString = string.toLowerCase().replaceAll(' ','');

  for (let i = normalizedString.length - 1; i >= 0; i--) {
    reversedString += normalizedString[i];
  }

  return (reversedString === normalizedString);
};

checkPalindrome('топот'); // true
checkPalindrome('ДовОд'); // true
checkPalindrome('Кекс'); // false
checkPalindrome('Лёша на полке клопа нашёл '); // true

// 3. Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа. Если в строке нет ни одной цифры, функция должна вернуть NaN

const extractNumber = (text) => {
  const workingText = text.toString();
  let result = '';

  for (let i = 0; i <= workingText.length - 1; i++) {
    if (!Number.isNaN(parseInt(workingText[i], 10))) {
      result += workingText[i];
    }
  }

  return parseInt(result, 10);
};

extractNumber('2023 год'); // 2023
extractNumber('ECMAScript 2022'); // 2022
extractNumber('1 кефир, 0.5 батона'); // 105
extractNumber('агент 007'); // 7
extractNumber('а я томат'); // NaN
extractNumber(2023); // 2023
extractNumber(-1); // 1
extractNumber(1.5); // 15
