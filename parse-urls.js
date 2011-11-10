/** parse URLs from a 'blog-export.xml' file, dump into JSON
    runs as script, not a server!
**/

exports.parseBloggerXml = function(xmlFilePath, callback) {

  var fs = require('fs')
  
    // tried node-o3-xml and node-o3-fastxml, didn't work;
    // tried node-xml, but that's too complicated.
    , xml = require('xml2js')
    , parser = new xml.Parser()
    , _ = require('underscore')._
    ;
  
  console.log("Reading file...");
  fs.readFile(xmlFilePath, function readFileCallback(err, xmlText) {

    if (err) return callback(err);

    console.log("Got file, parsing...");

    parser.parseString(xmlText, function parseXmlCallback (err, result) {
      if (err) return callback(err);

      var posts = [];

      if (_.isUndefined(result.entry)) {
        callback(new Error("XML is missing 'entry' array."));
      }

      _(result.entry).each(function eachEntryCallback(entry) {

        // only want the posts
        if (_.isUndefined(entry.category['@'])) return;
        if (_.isUndefined(entry.category['@'].term)) return;

        if (entry.category['@'].term.indexOf("#post") != -1 && !_.isUndefined(entry.link)) {

          _(entry.link).each(function linkCallback(link) {
            if (_.isUndefined(link['@'])) return;
            link = link['@'];

            if (link.type == 'text/html' && link.href.indexOf(".html") != -1) {

              // it's a post!
              posts.push({
                url: link.href,
                date: entry.published
              });

            }
          });

          // console.dir(entry.link['@'].href);
        }

      });

      console.log("Got %d post URLs", posts.length);
      callback(null, posts);
    });

  }); //readFile

  return;
};  //parseBloggerXml
