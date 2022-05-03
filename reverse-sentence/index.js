// sentence here is an array of characters
let reverseSentence = function(sentence) {     
  const sentenceArray = sentence.split(' ');
  
  return sentenceArray.reverse().join(' ');
};

module.exports = {
  reverseSentence
}
