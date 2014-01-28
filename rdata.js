function Rdata(rdata) {
  this.data = rdata;
}
Rdata.prototype.next = function(callback) {
  var rperm = require("./rperm");
  if (typeof callback === "function") {
    (new reddit({limit:this.settings.limit, next:this.data.after})).get(this.settings.what, function(err, data) {
      if (!err) {
        callback && callback(undefined, data);
      }
    });
  }
};
module.exports = Rdata;