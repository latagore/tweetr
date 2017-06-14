/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Test / driver code (temporary). Eventually will get this from the server.

$(document).ready(function () {
  function createTweetElement(data) {
    var user = data.user;
    var header = $('<header class="clearfix">').append(
      '<img class="user-icon" src="' + user.avatars.regular + '" />' +
      '<h3 class="user-name"></h3>' +
      '<span class="user-handle"></span>'
    );
    header.find('.user-name').text(user.name);
    header.find('.user-handle').text(user.handle);
    var content = data.content;
    var body = $('<div class="text">').text(content.text);
    
    // TODO date
    var footer = $('<footer>').append(
      '<span class="date">10 days ago</span>' +
      '<span class="button-group">' +
        '<button><i class="fa fa-flag"></i></button>' +
        '<button><i class="fa fa-retweet"></i></button>' +
        '<button><i class="fa fa-heart"></i></button>' +
      '</span>'
    );
    
    return $('<article class="tweet">')
      .append(header)
      .append(body)
      .append(footer);
  }
  
  function renderTweets(data) {
    var feed = $('#feed');
    feed.children().remove();
    data.forEach(function(d) {
      var el = createTweetElement(d);
      feed.append(el);
    });
  }
  
  function objectifyForm(formArray) {//serialize data function
    var result = {};
    for (var i = 0; i < formArray.length; i++){
      result[formArray[i].name] = formArray[i].value;
    }
    return result;
  }
  
  function loadTweets() {
    $.get({
      url: '/tweets',
      success: function (data) {
        renderTweets(data.reverse());
      }
    });
  }
  
  function getNewTweetErrorElement() {
    var el = $(".new-tweet .error");
    if (!el.length) {
      el = $('<div class="error">').prependTo('.new-tweet form');
    }
    el.hide();
    return el;
  }
  
  $('.new-tweet form').on('submit', function (event) {
    event.preventDefault();
    
    var data = objectifyForm($(this).serializeArray());
    
    // validate form
    if (data.text.length === 0) {
      getNewTweetErrorElement()
        .text('Type some text to tweet!')
        .slideDown();
    } else if (data.text.length > 140) {
      getNewTweetErrorElement()
        .text('Your tweet is too long!')
        .slideDown();
    } else {
      getNewTweetErrorElement().slideUp();
      $.post({
        url: '/tweets',
        data: data
      }).then(loadTweets);
    }
    
    
  });
  
  loadTweets();
});