reddit.js
=========

reddit reader for nodejs

Usage
-------

```
(new reddit({limit:5})).get("stories", function(err,data) {
  console.log(data);
});
```


Example 2
---------

```
//latest news..
var reddit = require("./reddit");
(new reddit({limit:5})).get("news", function(err,data) {
	data.data.children && data.data.children.forEach(function(result){
		console.log(result.data.title + " - (link - " + result.data.url + ")" );
	});
});
```



Starbucks offers workers free college tuition - (link - http://www.usatoday.com/story/news/nation/2014/06/16/starbucks-free-college-tuition/10569971/)
No more fillings as dentists reveal new tooth decay treatment - (link - http://www.theguardian.com/society/2014/jun/16/fillings-dentists-tooth-decay-treatment?CMP=fb_gu)
F1 Legend Michael Schumacher is awake and out of hospital - (link - http://www.bbc.co.uk/news/world-europe-27868787)
Income gap widens as American factories shut down - (link - http://hosted.ap.org/dynamic/stories/U/US_WEALTH_GAP_MANUFACTURING?SITE=MYPSP&amp;SECTION=HOME&amp;TEMPLATE=DEFAULT&amp;CTIME=2014-06-15-22-14-07)
KFC in Jackson, MISS asks little girl with scars from dog attack to leave restaurant - (link - http://news.yahoo.com/girl-scar-pit-bull-kfc-asked-to-leave-172943098.html?soc_src=mediacontentstory)
