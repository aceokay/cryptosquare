
var cryptosquare = function(sentence) {
  var letters = sentence.split(' ');
  letters = letters.join('');
  var length = letters.length;
  var columns = Math.ceil(Math.sqrt(length));
  arr = [];
  for (var j = 0; j < columns; j += 1) {
    for (var i = 0; i < columns; i += 1) {
      arr.push(letters.charAt(j + i*columns))
    };
  };
  arr = arr.join("");
  return arr.match(/.{1,5}/g)
};
