// passed as callback to parser, with posts.
// each post has 'url' and 'date'
exports.runServerWithPosts = function(posts) {
  var express = require('express');
  var _ = require('underscore')._;
  var app = express.createServer();
  var Posts = require('./posts');

  app.configure(function(){
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    // app.use(express.bodyParser());
    // app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(__dirname + '/public'));
  });

  app.configure('development', function(){
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
  });

  app.configure('production', function(){
    app.use(express.errorHandler()); 
  });


  // jsonp needed for cross-domain lookup
  app.enable("jsonp callback");



  // list all the posts
  app.get('/posts', function(req, res) {
    res.render('posts', {
      'title': 'Posts',
      'posts': posts
    });
  });
  
  
  // get the pager for a particular URL
  app.get('/pager', function(req, res){
    try {
      if (_.isUndefined(req.query.url)) {
        throw(new Error("Missing url param."));
      }
      
      Posts.findPostByUrl(posts, req.query.url, function foundPostCallback(err, posts) {
        if (err) {
          res.send(err.message, 404);
        }
        
        res.json(posts);
      });
      
    }
    catch(err) {
      res.send(err.message, 404);
    }
  });


  // return the client-side JS. load w/ <script> tags.
  // app.get('/')


  app.listen(3003);
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
};
