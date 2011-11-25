# Blogspot Pager
## Generate pager (previous/next) links for an old Blogspot/Blogger blog using a Node.js app
by Ben Buckman (newleafdigital.com)

### Background
On an old blog from 2006 that still gets traffic (http://benb-xc-06.blogspot.com), I wanted to add Previous/Next links to each post (with their post titles) to help visitors navigate.
But the old template didn't have any tags available to make that happen within Blogger.
So I wrote this [node](http://nodejs.org) app to generate the links, loaded client-side via AJAX.

### How it works
1. Export your blog from Blogspot using the Export functionality. You'll get a big XML file.
2. Check out this code on a server with [node.js](http://nodejs.org) installed.
3. Put the exported XML file into the root of this app, as blog-export.xml; or change the path in app.js.
4. Run the app (`node app.js`, or with [forever](https://github.com/nodejitsu/forever)).
5. The module in posts.js will parse the XML file and generate an in-memory array of all the post URLs and titles.
6. The module in server.js will respond to HTTP requests (by default on port 3003, change as you wish):
    - /pager handles JSONP requests with a _?url_ parameter, returning a JSON object of the surrounding posts.
    - /posts returns an HTML page of all the parsed posts.
7. [dependency] In your blog template, make sure jQuery is loaded if not already.
    - e.g. `<script src='//ajax.googleapis.com/ajax/libs/jquery/1.X.X/jquery.min.js' />`
8. In your blog template, load the client-side script in this app, exposed at _/js/blog-pager-client.js_.
9. Change the URL (`var url`...) in the client-side script to the URL of your node app.
10. Save the template, load a post page. (To debug, comment out the `return` in `bloggerPagerLog()` and open the browser console.)


### Known Limitations
1. Only works with a blog _export_; if your blog is still getting new content, this won't read the RSS.


Enjoy!
Feel free to contact me at ben at newleafdigital dot com.