// script to convert posts XML to json (as static file)
// used for pure client-side version of blogger_pager

var Posts = require('./posts'),
	xmlFilePath = __dirname + '/blog-export.xml',
	fs = require('fs'),
	jsonFilePath = __dirname + '/posts.json';

// parse the xml, load the paths into memory, then run the server
Posts.parseBloggerXml(xmlFilePath, function parserCallback(err, posts) {
  if (err) throw err;
  
  fs.writeFile(jsonFilePath, JSON.stringify(posts), 'utf8');

  console.log("Wrote to " + jsonFilePath);

});
