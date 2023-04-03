let letters = [];

for (let i=97; i < 123; i++) {
  letters.push(String.fromCharCode(i));
};

strCode = (str, shift) => {
  let shiftedStr = '';
  for (const letter of str) {
    let index = letters.indexOf(letter) + shift;
    index = index > letters.length - 1 ? index - letters.length - 1 : index;
    shiftedStr += letters.at(index);
  }
  return shiftedStr;
};
