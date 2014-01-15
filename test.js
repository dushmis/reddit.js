var reddit = require("./reddit");

(new reddit({limit:5})).get("stories", function(err,data) {
	if (err) {
		console.log(err);
	}else{
		console.log(data);
	}
});
