
function Rdata (rdata) {
  this.data=rdata;
}


Rdata.prototype.next = function(callback) {
      if (typeof callback === "function") {
        (new reddit({limit:this.settings.limit,next:this.data.after})).get(this.settings.what, function(err,data) {
          if (!err) {
             callback(undefined, data);
          };
        }); 
      };
};

module.exports = Rdata;
