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
      '<h3 class="user-name">' + user.name + '</h3>' +
      '<span class="user-handle">' + user.handle + '</span>'
    );
    
    var content = data.content;
    var body = $('<div class="text">' + content.text + '</div>');
    
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
  
  var tweetData = {
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
  };

  var $tweet = createTweetElement(tweetData);

  // Test / driver code (temporary)
  console.log($tweet); // to see what it looks like
  $('#tweets-container').append($tweet); 
});