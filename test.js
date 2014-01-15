var reddit = require("./reddit");

(new reddit({limit:5})).get("stories", function(e) {
  for (var i = 0;i < e.children.length;i++) {
    console.log(e.children[i].data);
  }
});