/**
 *
 * @param {string} string
 * @param {integer} shift
 * @returns string
 */
export default function ceasarCipher(string, shift) {
  let ciphered = '';
  Array.from(string).forEach((c) => {
    if (ignoreNonAlpha(c)) ciphered += c;
    else if(checkUppcase(c)){
        ciphered += shiftUpperCase(c, shift);
    } else {
        ciphered += shiftLowerCase(c, shift);
    }
  });
  return ciphered;
}

function shiftLowerCase(char, shift) {
  const ascii = char.charCodeAt(0);
  const shiftAscii = (ascii - 97 + shift) % 26;
  return String.fromCharCode(shiftAscii + 97);
}

function shiftUpperCase(char, shift) {
    const ascii = char.charCodeAt(0);
    const shiftAscii = (ascii - 65 + shift) % 26;
    return String.fromCharCode(shiftAscii + 65);
}

function ignoreNonAlpha(char) {
  const ascii = char.charCodeAt(0);
  console.log(ascii)
  if(ascii < 65 || ascii > 122) return true;
  if(ascii > 90 && ascii < 97) return true;
  return false
}

function checkUppcase(char) {
    if(char === char.toUpperCase()) return true;
    return false;
}

