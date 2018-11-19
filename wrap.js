const wrap = (line, maxLen) => {
  let words = line.split(' ');
  let counter = 0;
  let returnString = [];
  for (let i = 0; i < words.length; i++){
    counter += words[i].length;
    if (counter >= maxLen){
      counter = words[i].length;
      returnString.push('\n')
    } else if (i !== 0) {
      returnString.push(' ')
      counter++;
    }
    returnString.push(words[i])
  }
  return returnString.join('');
}


module.exports = wrap;
