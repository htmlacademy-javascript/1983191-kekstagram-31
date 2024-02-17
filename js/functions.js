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

const parseString = (string) => {
  string = string.toString();
  let result = '';

  for (let i = 0; i <= string.length - 1; i++) {
    if (!Number.isNaN(parseInt(string[i], 10))) {
      result += string[i];
    }
  }

  return parseInt(result, 10);
};

parseString('2023 год'); // 2023
parseString('ECMAScript 2022'); // 2022
parseString('1 кефир, 0.5 батона'); // 105
parseString('агент 007'); // 7
parseString('а я томат'); // NaN
parseString(2023); // 2023
parseString(-1); // 1
parseString(1.5); // 15
