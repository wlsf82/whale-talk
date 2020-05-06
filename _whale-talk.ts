/* Whale language
 * Whales speak only vowels
 * Whales speak out and loud
 * And when they say 'E' or 'U', they say it slowly */

const vowels: Function = (str: string): string => {
  str = str.toUpperCase();

  const vowels: Array<string> = ['A', 'E', 'I', 'O', 'U'];

  let letters: Array<string> = str.split('');
  let vowelsFound: Array<string> = [];

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
