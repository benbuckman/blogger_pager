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
    $(function(){
      benLog("Loaded pager script!");

      // try to figure out if it's a single post
      if ($('.post').size() !== 1) {
        benLog("Wrong # of posts, doesn't look like a single-post page.");
        return; 
      }

      benLog("Looks like a single-post page...");

      var url = 'http://node.benbuck.net:3003/pager?url=' + escape(document.location.href);
      benLog(url);

      $.ajax({
        url: url,
        dataType: "jsonp",
        //jsonpCallback: "addPagerForPost",  // not necessary
        cache: false,
        timeout: 5000, //500,

        success: function(data) {
          benLog('got data:', data);
          if (typeof data.next != "undefined" || typeof data.previous != "undefined") {
            addPagerForPost(data);
          }
        },

        error: function(jqXHR, textStatus, errorThrown) {
          benLog('error ', textStatus, errorThrown, 'at url:', url);
        }
      });

    });
  })(jQuery);
}


function addPagerForPost(data) {
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

  $('.post').after(pager);
}

