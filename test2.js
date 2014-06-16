var reddit = require("./reddit");
(new reddit({limit:5})).get("news", function(err,data) {
	data.data.children && data.data.children.forEach(function(result){
		console.log(result.data.title + " - (link - " + result.data.url + ")" );
	});
}); 
