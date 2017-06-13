var MAX_TWEET_LENGTH = 140;
$(document).ready(function () {
  // use keypress for keystrokes
  // include keydown and keyup for pasting
  $('.new-tweet textarea').on('keypress keydown keyup', function () {
    console.log("hello");
    var that = $(this);
    var text = that.val();
    var counter = that.closest('.new-tweet').find('.counter');
    var charsLeft = MAX_TWEET_LENGTH - text.length;
    
    counter.text(charsLeft);
    if (charsLeft < 0) {
      counter.addClass("invalid");
    } else {
      counter.removeClass("invalid");
    }
  });
});