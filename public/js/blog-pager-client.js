/* client-side JS */

window.bloggerPagerLog = function() {
  // turn on to debug
  return;

  if (this.console){
    console.log( Array.prototype.slice.call(arguments) );
  }
};


if (typeof jQuery != "undefined") {
  (function($){
    $(document).ready(function(){
      bloggerPagerLog("Loaded pager script!");

      $('.post').each(function(ind, post) {
        try {
          // strip the domain. blogger changes the domain by the user's location.
          // - first strip the protocol
          var postUrl = $(post).find('h3.post-title a').attr('href'),
              postUrlParts = postUrl.split(/:\/\//);
          postUrl = postUrlParts[1];
          postUrlParts = postUrl.split(/\//);
          postUrlParts.shift(); // drop the first part (host)
          postUrl = '/' + postUrlParts.join('/');
        }
        catch(e) {
          bloggerPagerLog('Unable to parse URL', postUrl);
          return;
        }
        bloggerPagerLog('post', ind, postUrl);

        if (postUrl == "" || postUrl == null) return;

        var url = 'http://node.newleafdigital.com:3003/pager?url=' + escape(postUrl);
        bloggerPagerLog('requesting from', url);

        $.ajax({
          url: url,
          dataType: "jsonp",
          cache: true, // per URL, why not
          timeout: 5000,

          success: function(data) {
            bloggerPagerLog('got data:', data);
            if (typeof data.next != "undefined" || typeof data.previous != "undefined") {
              addPagerForPost(post, data);
            }
          },

          error: function(jqXHR, textStatus, errorThrown) {
            bloggerPagerLog('error ', textStatus, errorThrown, 'at url:', url);
          }
        });

      });

    });
  })(jQuery);
}
else {
  bloggerPagerLog("missing jQuery");
}


function addPagerForPost(post, data) {
  bloggerPagerLog('addPagerForPost:', data);

  var pager = $('<div></div>');
  pager.addClass('node-pager');
  
  if (data.previous != null) {
    pager.append('<a class="node-pager-previous" href="' + data.previous.url + '">'
      + '&lt;&lt; previous post: <em>' + data.previous.title + '</em></a> ');
  }

  if (data.next != null) {
    pager.append('<a class="node-pager-next" href="' + data.next.url + '">'
      + 'next post: <em>' + data.next.title + ' &gt;&gt;</em></a> ');
  }

  bloggerPagerLog('placing pager:', pager);

  $(post).append(pager);
}

