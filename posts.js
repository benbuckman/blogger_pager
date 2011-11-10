/** parse URLs from a 'blog-export.xml' file, extract relevant post info, keep in memory **/

var _ = require('underscore')._;
var URL = require('url');

exports.parseBloggerXml = function(xmlFilePath, callback) {
  console.log("Looking for %s...", xmlFilePath);

  var fs = require('fs')
  
    // tried node-o3-xml and node-o3-fastxml, didn't work;
    // tried node-xml, but that's too complicated.
    , xml = require('xml2js')
    , parser = new xml.Parser()
    ;
  
  console.log("Reading file...");
  fs.readFile(xmlFilePath, function readFileCallback(err, xmlText) {

    if (err) return callback(err);

    console.log("Got file, parsing...");

    parser.parseString(xmlText, function parseXmlCallback (err, result) {
      if (err) return callback(err);

      var posts = []
        , url;

      if (_.isUndefined(result.entry)) {
        callback(new Error("XML is missing 'entry' array."));
      }

      _(result.entry).each(function eachEntryCallback(entry) {

        // only want the posts
        if (_.isUndefined(entry.category['@'])) return;
        if (_.isUndefined(entry.category['@'].term)) return;

        if (entry.category['@'].term.indexOf("#post") != -1 
        && !_.isUndefined(entry.link)
        && !_.isUndefined(entry.title['#'])) {

          _(entry.link).each(function linkCallback(link) {
            if (_.isUndefined(link['@'])) return;
            link = link['@'];

            if (link.type == 'text/html' && link.href.indexOf(".html") != -1) {

              // it's a post!
              
              // regular protocol, remove querystring
              url = 'http://' + URL.parse(link.href).hostname + URL.parse(link.href).pathname;     // e.g. http://www.site.com/a-blog-post

              // add to array of posts
              posts.push({
                'title': entry.title['#'],
                'url': url,
                'date': new Date(entry.published)
              });

            }
          });
        }

      });

      console.log("Got %d post URLs", posts.length);
      
      // reverse them
      // ASSUMING THEY'RE IN REVERSE CHRONOLOGICAL ORDER!
      // IF NOT, NEED TO SORT HERE
      posts.reverse();
      
      callback(null, posts);
    });

  }); //readFile

};  //parseBloggerXml


// given a URL, find the post with that URL.
// return an object with 'post', 'previous', and 'next' (each a post object)
// if not found, throw an error [to callback]
exports.findPostByUrl = function(posts, url, callback) {

  // strip down URL same as before
  var urlParts = URL.parse(url);

  // for already-partial URLs, parsing won't return all parts
  // always want regular protocol
  var url = 'http://' + (!_.isUndefined(urlParts.hostname) ? urlParts.hostname + urlParts.pathname : urlParts.pathname);

  console.log("Looking for " + url);

  _(posts).each( function postCheck(post, ind) {
    
    try {
      if (post.url === url) {
        
        var ret = {
          'post': post,
          'previous': (!_.isUndefined(posts[ind-1]) ? posts[ind-1] : null),
          'next': (!_.isUndefined(posts[ind+1]) ? posts[ind+1] : null)
        };
        
        callback(null, ret);
      }
    }
    catch(e) {
      callback(new Error("Missing URLs"));
    }
  });

  callback(new Error(url + " not found"));  
};