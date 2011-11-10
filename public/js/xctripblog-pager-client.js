/* client-side JS */

window.benLog = function() {
  // turn on to debug
  return;

  if (this.console){
    console.log( Array.prototype.slice.call(arguments) );
  }
};


if (typeof jQuery != "undefined") {
  (function($){
    $(document).load(function(){
      benLog("Loaded pager script!");

      $('.post').each(function(ind, post) {
        var postUrl = $(post).find('h3.post-title a').attr('href');
        benLog('post', ind, postUrl);

        if (postUrl == "" || postUrl == null) return;

        var url = 'http://node.benbuck.net:3003/pager?url=' + escape(postUrl);
        benLog('requesting from', url);

        $.ajax({
          url: url,
          dataType: "jsonp",
          cache: true, // per URL, why not
          timeout: 5000,

          success: function(data) {
            benLog('got data:', data);
            if (typeof data.next != "undefined" || typeof data.previous != "undefined") {
              addPagerForPost(post, data);
            }
          },

          error: function(jqXHR, textStatus, errorThrown) {
            benLog('error ', textStatus, errorThrown, 'at url:', url);
          }
        });

      });

    });
  })(jQuery);
}


function addPagerForPost(post, data) {
  benLog('addPagerForPost:', data);

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

  $(post).after(pager);
}

