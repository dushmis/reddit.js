reddit.js
=========

reddit json feed reader for nodejs

Usage
-------

`
(new reddit({limit:5})).get("stories", function(e) {
  console.log(e);//print stuff
});
`
