(function() {
  var http = require("http");
  var express = require("express");
  var logfmt = require("logfmt");
  var redditData = require("./rdata");
  var app = express();
  var default_settings = {limit:5};
  reddit = function() {
    function reddit(settings) {
      default_settings.limit = settings.limit || default_settings.limit;
      default_settings.next = settings.next;
    }
    reddit.prototype.get_feed = reddit.prototype.get;

    reddit.prototype.get = function(url, callback) {
      if (typeof url === "undefined") {
        callback && callback({message:"Undefined location"}, undefined);
      }
      default_settings.what=url;
      url = ("http:") + "//" + "www." + "reddit." + "com" + "/r/" + url + "/.json";
      if (default_settings.limit) {
        url = url + "?limit=" + default_settings.limit;
      }
      if (default_settings.next) {
        url = url + "&after=" + default_settings.next;
      }

      http.get(url, function(res) {
        var body = "";
        res.on("data", function(chunk) {
          body += chunk;
        });
        res.on("end", function() {
          if (res.statusCode == "200") {
            var resp = JSON.parse(body);
            if (resp && resp.data) {
              rdata = new redditData(resp.data);
              rdata.settings=default_settings;
              callback && callback(null, rdata);
            }
          } else {
              callback && callback({message:"Undefined location"}, null);
          }
        });
      }).on("error", function(e) {
        callback(e, null);
      });

    };
    return reddit;
  }();

  module.exports = reddit;
}).call(this);

