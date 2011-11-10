var server = require('./server')
  , Posts = require('./posts')
  ;

var xmlFilePath = __dirname + '/blog-export.xml';

// parse the xml, load the paths into memory, then run the server
Posts.parseBloggerXml(xmlFilePath, function parserCallback(err, posts) {
  if (err) throw err;
  else server.runServerWithPosts(posts);
});
