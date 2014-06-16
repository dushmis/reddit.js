function Rjson(rurl) {
  this.rurl = rurl;
}
Rjson.prototype.read = function(callback) {
  var http = require("http");
  var redditData = require("./rdata");
  http.get(this.rurl, function(res) {
    var body = "";
    res.on("data", function(chunk) {
      body += chunk;
    });
    res.on("end", function() {
      if (res.statusCode == "200") {
        var resp = JSON.parse(body);
        if (resp) {
          rdata = new redditData(resp);
          callback(null, rdata);
        }
      } else {
        callback && callback({message:"Undefined location"}, null);
      }
    });
  }).on("error", function(e) {
    callback(e, null);
  });
};
module.exports = Rjson;