'use-strict'

function funWithAnagrams(text) {
  let delIndexes = []
  text.forEach( (element, i) => {
    const len = text.length;
    for( i; i < len-1; i++ ) {
      const word1 = element.toLowerCase();
      const word2 = text[i + 1].toLowerCase();
      const sorted1 = word1.split('').sort().join('');
      const sorted2 = word2.split('').sort().join('');
      if(sorted1 == sorted2) {
        delIndexes.push(i+1);
      }
    }
  });
  delIndexes = delIndexes.filter((item, index) => delIndexes.indexOf(item) === index);
  return text.filter( (item, index) => {
    if( delIndexes.indexOf(index) === -1 ) {
      return item;
    }
  });
}

const str = ['code', 'doce', 'ecod', 'framer', 'llasi', 'frame', 'rafme', 'edoc', 'silla'];
const res = funWithAnagrams(str);
console.log({ str, res });