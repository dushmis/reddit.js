function Rperm(rdata) {
  this.data = rdata;
}
Rperm.prototype.read = function(callback) {
  var rjson = require("./rjson");
  rjson = new rjson(this.data);
  rjson.read(callback);
};
module.exports = Rperm;