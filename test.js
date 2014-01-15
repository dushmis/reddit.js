var reddit = require("./reddit");
var cons = require("./cons");

<<<<<<< HEAD
var acallback=function(err,data) {
	if (!err) {
		displayContent(data.data.children);
		data.next(acallback);
	};
};

var displayContent = function(children){
	for (var i = children.length - 1; i >= 0; i--) {
		console.log(children[i].data.title);
		//console.log(children[i].data.url);
	};
};

(new reddit({limit:5})).get("stories", acallback);
//console.log(cons);
=======
(new reddit({limit:5})).get("stories", function(err,data) {
	if (err) {
		console.log(err);
	}else{
		console.log(data);
	}
});
>>>>>>> d72d6a56cc8baa8368a01e5726e33bb3014164d5
