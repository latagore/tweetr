var MAX_TWEET_LENGTH = 140;


$(document).ready(function () {
  
  function updateCounter() {
    var textarea = $('.new-tweet textarea');
    var text = textarea.val();
    var counter = textarea.closest('.new-tweet').find('.counter');
    var charsLeft = MAX_TWEET_LENGTH - text.length;
    
    counter.text(charsLeft);
    if (charsLeft < 0) {
      counter.addClass("invalid");
    } else {
      counter.removeClass("invalid");
    }
  }
  // use keypress for keystrokes
  // include keyup for pasting
  $('.new-tweet textarea').on('input', updateCounter);
  $('.new-tweet form').on('submit', updateCounter);
});