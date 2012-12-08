// fully client-side pager. all the posts here as static JSON.

(function(){
	window.XCPager = window.XCPager || {};
	var XCPager = window.XCPager;

	XCPager.log = function(){
		if (console && console.log) {
			var args = ['pager'].concat(Array.prototype.slice.call(arguments));
			console.log.apply(console, args);
		}
	};

	XCPager.posts = [{"title":"Leaving ASAP...","url":"http://benb-xc-06.blogspot.com/2006/09/leaving-asap.html","date":"2006-09-04T21:14:00.000Z"},{"title":"Leaving tomorrow","url":"http://benb-xc-06.blogspot.com/2006/09/leaving-tomorrow.html","date":"2006-09-07T15:54:00.000Z"},{"title":"And we're off!","url":"http://benb-xc-06.blogspot.com/2006/09/and-were-off.html","date":"2006-09-08T15:35:00.000Z"},{"title":"Providence","url":"http://benb-xc-06.blogspot.com/2006/09/providence.html","date":"2006-09-08T19:07:00.000Z"},{"title":"Sunset over Providence","url":"http://benb-xc-06.blogspot.com/2006/09/sunset-over-providence.html","date":"2006-09-08T22:42:00.000Z"},{"title":"Newport, RI","url":"http://benb-xc-06.blogspot.com/2006/09/newport-ri.html","date":"2006-09-09T01:02:00.000Z"},{"title":"Morning by the wharf","url":"http://benb-xc-06.blogspot.com/2006/09/morning-by-wharf.html","date":"2006-09-09T14:17:00.000Z"},{"title":"Newport Scenic Ocean Drive","url":"http://benb-xc-06.blogspot.com/2006/09/newport-scenic-ocean-drive.html","date":"2006-09-09T15:30:00.000Z"},{"title":"Camping in Rocky Neck","url":"http://benb-xc-06.blogspot.com/2006/09/camping-in-rocky-neck.html","date":"2006-09-09T21:31:00.000Z"},{"title":"New Haven","url":"http://benb-xc-06.blogspot.com/2006/09/new-haven.html","date":"2006-09-10T16:54:00.000Z"},{"title":"Long long ride","url":"http://benb-xc-06.blogspot.com/2006/09/long-long-ride.html","date":"2006-09-12T02:31:00.000Z"},{"title":"to DC","url":"http://benb-xc-06.blogspot.com/2006/09/to-dc.html","date":"2006-09-12T14:43:00.000Z"},{"title":"In DC","url":"http://benb-xc-06.blogspot.com/2006/09/in-dc.html","date":"2006-09-12T21:26:00.000Z"},{"title":"Late morning","url":"http://benb-xc-06.blogspot.com/2006/09/late-morning.html","date":"2006-09-13T14:00:00.000Z"},{"title":"Enough time in Washington","url":"http://benb-xc-06.blogspot.com/2006/09/enough-time-in-washington_13.html","date":"2006-09-13T20:48:00.001Z"},{"title":"Joe's Place","url":"http://benb-xc-06.blogspot.com/2006/09/joes-place.html","date":"2006-09-13T23:27:00.000Z"},{"title":"Wet morning","url":"http://benb-xc-06.blogspot.com/2006/09/wet-morning.html","date":"2006-09-14T13:38:00.000Z"},{"title":"Back in the zone","url":"http://benb-xc-06.blogspot.com/2006/09/back-in-zone.html","date":"2006-09-14T22:15:00.000Z"},{"title":"Conversation in the pizza shop","url":"http://benb-xc-06.blogspot.com/2006/09/conversation-in-pizza-shop.html","date":"2006-09-14T22:20:00.000Z"},{"title":"In Grafton","url":"http://benb-xc-06.blogspot.com/2006/09/in-grafton.html","date":"2006-09-15T01:53:00.000Z"},{"title":"Morning in Grafton","url":"http://benb-xc-06.blogspot.com/2006/09/morning-in-grafton.html","date":"2006-09-15T15:17:00.000Z"},{"title":"Yesterday","url":"http://benb-xc-06.blogspot.com/2006/09/yesterday.html","date":"2006-09-16T17:00:00.000Z"},{"title":"Forked Run State Park, OH","url":"http://benb-xc-06.blogspot.com/2006/09/forked-run-state-park-oh.html","date":"2006-09-16T17:10:00.000Z"},{"title":"Athens","url":"http://benb-xc-06.blogspot.com/2006/09/athens.html","date":"2006-09-16T19:11:00.000Z"},{"title":"For Colin","url":"http://benb-xc-06.blogspot.com/2006/09/for-colin.html","date":"2006-09-16T19:17:00.000Z"},{"title":"View from my hip","url":"http://benb-xc-06.blogspot.com/2006/09/view-from-my-hip.html","date":"2006-09-16T19:29:00.000Z"},{"title":"Fort Wayne, Indiana","url":"http://benb-xc-06.blogspot.com/2006/09/fort-wayne-indiana.html","date":"2006-09-17T19:01:00.000Z"},{"title":"Yogi Bear","url":"http://benb-xc-06.blogspot.com/2006/09/yogi-bear.html","date":"2006-09-17T23:51:00.000Z"},{"title":"Map is up!","url":"http://benb-xc-06.blogspot.com/2006/09/map-is-up.html","date":"2006-09-19T06:19:00.000Z"},{"title":"Sailing","url":"http://benb-xc-06.blogspot.com/2006/09/sailing.html","date":"2006-09-20T23:01:00.000Z"},{"title":"Fun Fun Day","url":"http://benb-xc-06.blogspot.com/2006/09/fun-fun-day.html","date":"2006-09-22T04:27:00.000Z"},{"title":"Morning in Princeton, IL","url":"http://benb-xc-06.blogspot.com/2006/09/morning-in-princeton-il.html","date":"2006-09-22T13:30:00.000Z"},{"title":"ATVing with Arnold","url":"http://benb-xc-06.blogspot.com/2006/09/atving-with-arnold.html","date":"2006-09-22T16:31:00.000Z"},{"title":"Davenport, Iowa","url":"http://benb-xc-06.blogspot.com/2006/09/davenport-iowa.html","date":"2006-09-22T21:00:00.000Z"},{"title":"Mississippi River","url":"http://benb-xc-06.blogspot.com/2006/09/mississippi-river.html","date":"2006-09-22T22:00:00.000Z"},{"title":"An Evening From Hell","url":"http://benb-xc-06.blogspot.com/2006/09/evening-from-hell.html","date":"2006-09-23T00:55:00.000Z"},{"title":"In Cedar Rapids","url":"http://benb-xc-06.blogspot.com/2006/09/in-cedar-rapids.html","date":"2006-09-23T20:40:00.000Z"},{"title":"Reflections in my helmet","url":"http://benb-xc-06.blogspot.com/2006/09/reflections-in-my-helmet.html","date":"2006-09-25T17:54:00.000Z"},{"title":"Lake Calhoun, Minneapolis","url":"http://benb-xc-06.blogspot.com/2006/09/lake-calhoun-minneapolis.html","date":"2006-09-25T20:00:00.000Z"},{"title":"Too little time in Minneapolis","url":"http://benb-xc-06.blogspot.com/2006/09/too-little-time-in-minneapolis.html","date":"2006-09-25T20:53:00.000Z"},{"title":"Fargo","url":"http://benb-xc-06.blogspot.com/2006/09/fargo.html","date":"2006-09-26T16:05:00.000Z"},{"title":"Why did the cow cross the road?","url":"http://benb-xc-06.blogspot.com/2006/09/why-did-cow-cross-road.html","date":"2006-09-26T19:40:00.000Z"},{"title":"Lake Ashtabula, North Dakota","url":"http://benb-xc-06.blogspot.com/2006/09/lake-ashtabula-north-dakota.html","date":"2006-09-26T20:00:00.000Z"},{"title":"Valley City, ND","url":"http://benb-xc-06.blogspot.com/2006/09/valley-city-nd.html","date":"2006-09-26T21:00:00.000Z"},{"title":"Endurance Run","url":"http://benb-xc-06.blogspot.com/2006/09/endurance-run.html","date":"2006-09-27T05:26:00.000Z"},{"title":"Pierre, South Dakota","url":"http://benb-xc-06.blogspot.com/2006/09/pierre-south-dakota.html","date":"2006-09-27T18:26:00.000Z"},{"title":"Keystone, SD","url":"http://benb-xc-06.blogspot.com/2006/09/keystone-sd_27.html","date":"2006-09-28T05:30:00.000Z"},{"title":"Mount Rushmore","url":"http://benb-xc-06.blogspot.com/2006/09/mount-rushmore.html","date":"2006-09-28T05:50:00.000Z"},{"title":"The Red Garter","url":"http://benb-xc-06.blogspot.com/2006/09/red-garter.html","date":"2006-09-28T05:55:00.000Z"},{"title":"Wyoming","url":"http://benb-xc-06.blogspot.com/2006/09/wyoming.html","date":"2006-09-29T03:00:00.000Z"},{"title":"Ten Sleep, Wyoming","url":"http://benb-xc-06.blogspot.com/2006/09/ten-sleep-wyoming.html","date":"2006-09-29T17:31:00.000Z"},{"title":"Yellowstone...or not","url":"http://benb-xc-06.blogspot.com/2006/09/yellowstoneor-not.html","date":"2006-09-30T04:28:00.000Z"},{"title":"Montana","url":"http://benb-xc-06.blogspot.com/2006/09/montana.html","date":"2006-10-01T00:07:00.000Z"},{"title":"Salmon Lake","url":"http://benb-xc-06.blogspot.com/2006/10/salmon-lake.html","date":"2006-10-01T18:00:00.000Z"},{"title":"Wallace, Idaho","url":"http://benb-xc-06.blogspot.com/2006/10/wallace-idaho.html","date":"2006-10-01T19:44:00.000Z"},{"title":"Overheard Over Lunch","url":"http://benb-xc-06.blogspot.com/2006/10/overheard-over-lunch.html","date":"2006-10-01T20:53:00.000Z"},{"title":"Sunset in Washington","url":"http://benb-xc-06.blogspot.com/2006/10/sunset-in-washington.html","date":"2006-10-01T23:30:00.000Z"},{"title":"Coeur D'Alene Lakeside Drive","url":"http://benb-xc-06.blogspot.com/2006/10/coeur-dalene-lakeside-drive.html","date":"2006-10-02T01:00:00.000Z"},{"title":"My faceshield after a long ride","url":"http://benb-xc-06.blogspot.com/2006/10/my-faceshield-after-long-r_115981403218948345.html","date":"2006-10-02T15:00:00.002Z"},{"title":"Idaho to Washington","url":"http://benb-xc-06.blogspot.com/2006/10/idaho-to-washington.html","date":"2006-10-02T17:16:00.000Z"},{"title":"Seattle","url":"http://benb-xc-06.blogspot.com/2006/10/seattle.html","date":"2006-10-03T00:18:00.000Z"},{"title":"Portland","url":"http://benb-xc-06.blogspot.com/2006/10/portland.html","date":"2006-10-04T02:57:00.000Z"},{"title":"White Eagle","url":"http://benb-xc-06.blogspot.com/2006/10/white-eagle.html","date":"2006-10-04T14:01:00.000Z"},{"title":"Crater Lake","url":"http://benb-xc-06.blogspot.com/2006/10/crater-lake.html","date":"2006-10-05T01:00:00.000Z"},{"title":"Medford, OR","url":"http://benb-xc-06.blogspot.com/2006/10/medford-or.html","date":"2006-10-05T20:30:00.000Z"},{"title":"Sacramento","url":"http://benb-xc-06.blogspot.com/2006/10/sacramento.html","date":"2006-10-06T04:43:00.000Z"},{"title":"San Francisco","url":"http://benb-xc-06.blogspot.com/2006/10/san-francisco.html","date":"2006-10-07T01:39:00.000Z"},{"title":"Fisherman's Wharf","url":"http://benb-xc-06.blogspot.com/2006/10/fishermans-wharf.html","date":"2006-10-08T19:28:00.000Z"},{"title":"Golden Gate Bridge","url":"http://benb-xc-06.blogspot.com/2006/10/golden-gate-bridge.html","date":"2006-10-09T05:00:00.000Z"},{"title":"Last morning in SanFran","url":"http://benb-xc-06.blogspot.com/2006/10/last-morning-in-sanfran.html","date":"2006-10-10T18:22:00.000Z"},{"title":"Pacific Coastal Highway","url":"http://benb-xc-06.blogspot.com/2006/10/pacific-coastal-highway.html","date":"2006-10-11T04:00:00.000Z"},{"title":"Monterey and Aquarium","url":"http://benb-xc-06.blogspot.com/2006/10/monterey-and-aquarium.html","date":"2006-10-11T04:05:00.000Z"},{"title":"Video collage from Monterey Aquarium","url":"http://benb-xc-06.blogspot.com/2006/10/video-collage-from-monterey-aquarium.html","date":"2006-10-11T04:06:00.000Z"},{"title":"Carmel","url":"http://benb-xc-06.blogspot.com/2006/10/carmel.html","date":"2006-10-11T04:20:00.000Z"},{"title":"Pacific Coastal Highway","url":"http://benb-xc-06.blogspot.com/2006/10/pacific-coastal-highway_11.html","date":"2006-10-11T19:00:00.000Z"},{"title":"Hearst Castle","url":"http://benb-xc-06.blogspot.com/2006/10/hearst-castle.html","date":"2006-10-12T04:00:00.000Z"},{"title":"Camping in San Simeon","url":"http://benb-xc-06.blogspot.com/2006/10/camping-in-san-simeon.html","date":"2006-10-12T05:00:00.000Z"},{"title":"Morro Bay","url":"http://benb-xc-06.blogspot.com/2006/10/morro-bay.html","date":"2006-10-12T18:00:00.000Z"},{"title":"Seeking Wifi","url":"http://benb-xc-06.blogspot.com/2006/10/seeking-wifi.html","date":"2006-10-12T18:57:00.000Z"},{"title":"San Luis Obispo","url":"http://benb-xc-06.blogspot.com/2006/10/san-luis-obispo.html","date":"2006-10-12T21:20:00.000Z"},{"title":"Los Angeles","url":"http://benb-xc-06.blogspot.com/2006/10/los-angeles.html","date":"2006-10-13T19:27:00.000Z"},{"title":"Hollywood Bowl","url":"http://benb-xc-06.blogspot.com/2006/10/hollywood-bowl.html","date":"2006-10-14T16:00:00.000Z"},{"title":"San Diego","url":"http://benb-xc-06.blogspot.com/2006/10/san-diego.html","date":"2006-10-15T01:29:00.000Z"},{"title":"Video from the concert","url":"http://benb-xc-06.blogspot.com/2006/10/video-from-concert.html","date":"2006-10-15T03:53:00.000Z"},{"title":"In Brief","url":"http://benb-xc-06.blogspot.com/2006/10/in-brief.html","date":"2006-10-16T07:36:00.000Z"},{"title":"Penn & Teller Show","url":"http://benb-xc-06.blogspot.com/2006/10/penn-teller-show.html","date":"2006-10-16T07:40:00.000Z"},{"title":"A Lesson in Preparedness","url":"http://benb-xc-06.blogspot.com/2006/10/lesson-in-preparedness.html","date":"2006-10-17T10:51:00.000Z"},{"title":"Morning in Zion","url":"http://benb-xc-06.blogspot.com/2006/10/morning-in-zion.html","date":"2006-10-17T21:05:00.000Z"},{"title":"Snow!","url":"http://benb-xc-06.blogspot.com/2006/10/snow.html","date":"2006-10-18T00:51:00.000Z"},{"title":"from my phone","url":"http://benb-xc-06.blogspot.com/2006/10/from-my-phone_18.html","date":"2006-10-18T17:56:00.000Z"},{"title":"Impassable","url":"http://benb-xc-06.blogspot.com/2006/10/impassable.html","date":"2006-10-18T19:49:00.000Z"},{"title":"At Bryce Canyon After All","url":"http://benb-xc-06.blogspot.com/2006/10/at-bryce-canyon-after-all.html","date":"2006-10-19T01:16:00.000Z"},{"title":"En Route to Bryce Canyon","url":"http://benb-xc-06.blogspot.com/2006/10/en-route-to-bryce-canyon.html","date":"2006-10-19T01:58:00.000Z"},{"title":"Bryce Canyon","url":"http://benb-xc-06.blogspot.com/2006/10/bryce-canyon.html","date":"2006-10-19T01:59:00.000Z"},{"title":"Grand Canyon","url":"http://benb-xc-06.blogspot.com/2006/10/grand-canyon.html","date":"2006-10-20T16:27:00.000Z"},{"title":"Meteor Crater","url":"http://benb-xc-06.blogspot.com/2006/10/meteor-crater.html","date":"2006-10-21T06:00:00.000Z"},{"title":"Standing on a corner in Winslow, Arizona","url":"http://benb-xc-06.blogspot.com/2006/10/standing-on-corner-in-winslow-arizona.html","date":"2006-10-21T06:05:00.000Z"},{"title":"In Scottsdale","url":"http://benb-xc-06.blogspot.com/2006/10/in-scottsdale.html","date":"2006-10-21T06:10:00.000Z"},{"title":"Troopers","url":"http://benb-xc-06.blogspot.com/2006/10/troopers.html","date":"2006-10-23T06:05:00.000Z"},{"title":"Suns","url":"http://benb-xc-06.blogspot.com/2006/10/suns.html","date":"2006-10-24T07:24:00.000Z"},{"title":"Really Leaving This Time","url":"http://benb-xc-06.blogspot.com/2006/10/really-leaving-this-time.html","date":"2006-10-26T17:11:00.000Z"},{"title":"New Mexico","url":"http://benb-xc-06.blogspot.com/2006/10/new-mexico.html","date":"2006-10-27T22:08:00.000Z"},{"title":"Alamogordo to Santa Fe","url":"http://benb-xc-06.blogspot.com/2006/10/alamogordo-to-santa-fe.html","date":"2006-10-29T03:59:00.000Z"},{"title":"The Plaza","url":"http://benb-xc-06.blogspot.com/2006/10/plaza.html","date":"2006-10-29T17:58:00.000Z"},{"title":"Santa Fe to Amarillo","url":"http://benb-xc-06.blogspot.com/2006/10/santa-fe-to-amarillo_30.html","date":"2006-10-30T17:34:00.001Z"},{"title":"Oklahoma","url":"http://benb-xc-06.blogspot.com/2006/10/oklahoma.html","date":"2006-10-31T00:58:00.000Z"},{"title":"Odometer Milestone","url":"http://benb-xc-06.blogspot.com/2006/10/odometer-milestone.html","date":"2006-11-01T00:58:00.000Z"},{"title":"Cowboy Museum","url":"http://benb-xc-06.blogspot.com/2006/10/cowboy-museum.html","date":"2006-11-01T01:29:00.000Z"},{"title":"Dallas to Baton Rouge","url":"http://benb-xc-06.blogspot.com/2006/11/dallas-to-baton-rouge.html","date":"2006-11-02T06:29:00.000Z"},{"title":"Hookah Cafe","url":"http://benb-xc-06.blogspot.com/2006/11/hookah-cafe.html","date":"2006-11-03T06:59:00.000Z"},{"title":"Catching Up","url":"http://benb-xc-06.blogspot.com/2006/11/florida.html","date":"2006-11-05T07:39:00.000Z"},{"title":"Fogies and Munchkins","url":"http://benb-xc-06.blogspot.com/2006/11/fogies-and-munchkins.html","date":"2006-11-06T05:00:00.000Z"},{"title":"In The Shop","url":"http://benb-xc-06.blogspot.com/2006/11/in-shop.html","date":"2006-11-06T19:41:00.000Z"},{"title":"Election Day","url":"http://benb-xc-06.blogspot.com/2006/11/election-day.html","date":"2006-11-07T20:16:00.000Z"},{"title":"Sweep","url":"http://benb-xc-06.blogspot.com/2006/11/sweep.html","date":"2006-11-08T10:40:00.000Z"},{"title":"Northbound","url":"http://benb-xc-06.blogspot.com/2006/11/northbound.html","date":"2006-11-09T15:32:00.000Z"},{"title":"The boys a few days ago","url":"http://benb-xc-06.blogspot.com/2006/11/boys-few-days-ago.html","date":"2006-11-09T18:57:00.000Z"},{"title":"Walker State Park, GA","url":"http://benb-xc-06.blogspot.com/2006/11/walker-state-park-ga.html","date":"2006-11-10T15:00:00.000Z"},{"title":"Curves","url":"http://benb-xc-06.blogspot.com/2006/11/press-play.html","date":"2006-11-10T15:30:00.000Z"},{"title":"Atlanta","url":"http://benb-xc-06.blogspot.com/2006/11/atlanta.html","date":"2006-11-11T01:00:00.000Z"},{"title":"Veterans Day","url":"http://benb-xc-06.blogspot.com/2006/11/veterans-day.html","date":"2006-11-11T20:11:00.000Z"},{"title":"Carolinas","url":"http://benb-xc-06.blogspot.com/2006/11/carolinas.html","date":"2006-11-12T19:53:00.000Z"},{"title":"Great Icy Mountains","url":"http://benb-xc-06.blogspot.com/2006/11/great-icy-mountains.html","date":"2006-11-13T02:52:00.000Z"},{"title":"Accents","url":"http://benb-xc-06.blogspot.com/2006/11/accents.html","date":"2006-11-13T05:36:00.000Z"},{"title":"Blue Ridge Mountains","url":"http://benb-xc-06.blogspot.com/2006/11/blue-ridge-mountains.html","date":"2006-11-13T22:25:00.000Z"},{"title":"Virginia","url":"http://benb-xc-06.blogspot.com/2006/11/virginia.html","date":"2006-11-14T18:10:00.000Z"},{"title":"Richmond","url":"http://benb-xc-06.blogspot.com/2006/11/richmond.html","date":"2006-11-14T22:03:00.000Z"},{"title":"Philly","url":"http://benb-xc-06.blogspot.com/2006/11/philly.html","date":"2006-11-15T19:39:00.000Z"},{"title":"Back to New York","url":"http://benb-xc-06.blogspot.com/2006/11/back-to-new-york.html","date":"2006-11-16T18:00:00.000Z"},{"title":"Home","url":"http://benb-xc-06.blogspot.com/2006/11/home.html","date":"2006-11-16T22:56:00.001Z"},{"title":"I Did It","url":"http://benb-xc-06.blogspot.com/2006/11/blog-post_17.html","date":"2006-11-17T18:13:00.000Z"},{"title":"Epilogue","url":"http://benb-xc-06.blogspot.com/2006/11/final-post-ideas.html","date":"2006-11-20T03:00:00.000Z"},{"title":"Back on a bike, in Argentina!","url":"http://benb-xc-06.blogspot.com/2011/10/back-on-bike-in-argentina-and-looking.html","date":"2011-10-15T17:51:00.002Z"},{"title":"Latest Adventures","url":"http://benb-xc-06.blogspot.com/2012/03/latest-adventures.html","date":"2012-03-28T21:38:00.001Z"}];

	// XCPager.log("Initialized pager with " + XCPager.posts.length + " posts");

	// given a URL, find the post with that URL.
	// return an object with 'post', 'previous', and 'next' (each a post object)
	XCPager.findPostByUrl = function(url) {
	  // XCPager.log("Looking for " + url);

		var posts = window.XCPager.posts,
				i, post;

	  for (i = 0; i < posts.length; i++) {
	  	try {
	  		post = posts[i];
	  		if (typeof post.url === 'undefined') {
	  			XCPager.log('post has no url', post);
	  			continue;
	  		}
	      else if (post.url.indexOf(url) !== -1) {
	        return {
	          'post': post,
	          'previous': (typeof posts[i-1] !== 'undefined' ? posts[i-1] : null),
	          'next': (typeof posts[i+1] !== 'undefined' ? posts[i+1] : null)
	        };
	      }
	    }
	    catch(e) {
	    	XCPager.log('error', e.stack);
	    }
	  }
	  
	  XCPager.log("Can't find post for", url);
	  return false;
	};



	if (typeof jQuery !== "undefined") {
		(function($){
			XCPager.addPagerForPost = function(postEl, postInfo) {
			  // XCPager.log('addPagerForPost:', postInfo);

			  var pager = $('<div>').addClass('xc-pager');
			  
			  if (postInfo.previous) {
			  	var prevLink = $('<a>').addClass('xc-pager-previous')
			  		.attr('href', postInfo.previous.url)
			  		.html('&lt;&lt; previous post: <em>' + postInfo.previous.title + '</em>')
			  		.appendTo(pager);
			  }

			  if (postInfo.next) {
			  	var nextLink = $('<a>').addClass('xc-pager-next')
			  		.attr('href', postInfo.next.url)
			  		.html('next post: <em>' + postInfo.next.title + ' &gt;&gt;</em>')
			  		.appendTo(pager);
			  }

			  // XCPager.log('placing pager:', pager);
			  $(postEl).append(pager);
			};


	    $(function(){
	    	// put a pager on every post on the page.
	    	// on full-page posts, will only be 1.
	    	$('.post').each(function(ind, postEl) {
	        try {
	          // strip the domain. blogger changes the domain by the user's location.
	          // - first strip the protocol
	          var postUrl = $(postEl).find('h3.post-title a').attr('href');
	          if (postUrl == null) return;

	          var postUrlParts = postUrl.split(/:\/\//),
	              postInfo;

	          if (postUrlParts.length < 2) return;

	          postUrl = postUrlParts[1];
	          postUrlParts = postUrl.split(/\//);
						
						if (postUrl == null || postUrlParts.length < 2) return;

	          postUrlParts.shift(); // drop the first part (host)
	          postUrl = '/' + postUrlParts.join('/');
	        }
	        catch(e) {
	          XCPager.log('Unable to parse URL', postUrl, e.stack);
	          return;
	        }

	        if (! postUrl) return;

	        postInfo = XCPager.findPostByUrl(postUrl);

	        if (postInfo && (typeof postInfo.next != "undefined" || typeof postInfo.previous != "undefined")) {
		        // XCPager.log('found post:', postInfo);
	          return XCPager.addPagerForPost(postEl, postInfo);
	        }
	      });

	    });

		}(jQuery));
  }

}());