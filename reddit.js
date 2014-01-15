(function() {
var http = require('http');
var express = require("express");
var logfmt = require("logfmt");
var app = express();
var default_settings={
  limit:5
};
  reddit = (function() {
    function reddit(settings) {
      default_settings.limit = settings.limit?settings.limit:default_settings.limit;
      default_settings.next = settings.next;
    }
    
    reddit.prototype.get = function(url,callback){
      url="http://www.reddit.com/r/"+url+"/.json";
      if(default_settings.limit){
        url=url+"?limit="+default_settings.limit;
      }
      if(default_settings.next){
        url=url+"&after="+default_settings.next;
      }
      //console.log(url);
      //console.log("default_settings = " + default_settings.next);
      if( typeof url === 'undefined' ){
        return undefined;
      }
      http.get(url, function(res) {
        var body = '';
        res.on('data', function(chunk) {
          body += chunk;
        });
        res.on('end', function() {
          //console.log(res);
          if(res.statusCode=="200"){
          var resp = JSON.parse(body)
            if(! (typeof callback === 'undefined') ){
              //callback(resp,response,wh,ne,limit);
              if(resp && resp.data){
                callback(resp.data);
              }
            }else{
              console.log("pass something");
            }
          }else{
            console.log("not found");
          }
        });
      }).on('error', function(e) {
          console.log("Got error: ", e);
      });
    }
    
    return reddit;
  })();
  
  module.exports = reddit;
  
}).call(this);
