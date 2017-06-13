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
  
  var data = [
    {
      "user": {
        "name": "Newton",
        "avatars": {
          "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
          "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
          "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
        },
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": {
          "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
          "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
          "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
        },
        "handle": "@rd" },
      "content": {
        "text": "<script>alert('hello world')</script>"
      },
      "created_at": 1461113959088
    },
    {
      "user": {
        "name": "Johann von Goethe",
        "avatars": {
          "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
          "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
          "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
        },
        "handle": "@johann49"
      },
      "content": {
        "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
      },
      "created_at": 1461113796368
    }
  ];
  
  function renderTweets(data) {
    data.forEach(function(d) {
      var el = createTweetElement(d);
      $('#tweets-container').append(el);
    });
  }
  
  renderTweets(data);
});