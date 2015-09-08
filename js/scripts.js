var cryptosquare = function(sentence) {
  var letters = sentence.split(' ');
  letters = letters.join('');
  letters = letters.replace(/[.,-\/#!$%\^&\*;:{}=\-_'`~()]/g,"");
  var length = letters.length;
  var columns = Math.ceil(Math.sqrt(length));
  var arr = [];
  for (var j = 0; j < columns; j += 1) {
    for (var i = 0; i < columns; i += 1) {
      arr.push(letters.charAt(j + i*columns))
    };
  };
  arr = arr.join("");
  // Added a join method below to better display this message on a webpage.
  return arr.match(/.{1,5}/g).join(" ");
};

$(function() {
  $("form.crypto").submit(function(event) {
    var message = $("input.message").val();

    var result = cryptosquare(message);

    $(".encrypted_string").text(result);
    $(".results").show();
    event.preventDefault();
  });
});
