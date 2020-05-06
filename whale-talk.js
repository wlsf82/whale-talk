/* Whale language
 * Whales speak only vowels
 * Whales speak out and loud
 * And when they say 'E' or 'U', they say it slowly */

const vowels = str => {
  str = str.toUpperCase();

  const vowels = ['A', 'E', 'I', 'O', 'U'];

  let letters = str.split('');
  let vowelsFound = [];

  for (let i in letters) {
    if (vowels.includes(letters[i])) {
      vowelsFound.push(letters[i]);
      if (letters[i] === vowels[1] || letters[i] === vowels[4]) {
        vowelsFound.push(letters[i]);
      }
    }
  }

  return vowelsFound.join('');
};

console.log(vowels('Finding Nemo')); // IIEEO
