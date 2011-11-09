/** parse URLs from a 'blog-export.xml' file, dump into JSON
    runs as script, not a server!
**/

var fs = require('fs')

// tried node-o3-xml and node-o3-fastxml, didn't work;
// tried node-xml, but that's too complicated.
  , xml = require('xml2js')
  , parser = new xml.Parser()
  , xmlFilePath = './blog-export.xml'
  ;

console.log("Reading file...");
fs.readFile(xmlFilePath, function readFileCallback(err, xmlText) {
  
  if (err) {
    throw err;
    return;
  }
  
  console.log("Got file, parsing...");
  
  parser.parseString(xmlText, function parseXmlCallback (err, result) {
    console.dir(result);
  });
    
});