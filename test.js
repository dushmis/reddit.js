#!/usr/local/bin/node

var reddit = require("./reddit");
all=[];
var acallback = function(err, data) {
  if (!err) {
    displayContent(data.data.children);
  }
};

var displayContent = function(children) {
  children.forEach(function(result) {
    title = result.data.title || {};
    result.data.permalink.read(function(err, data) {
      data.data[1].data.children.forEach(function(result) {
        if(result.data && result.data.body && result.data.body.length>20 && result.data.body.length<140 && isValid(result.data.body)){
          //console.log(result.data.body);
          all.push(result.data.body);
        }
      });
    });
  });
};
var args = process.argv.splice(2);

var rand_Index = Math.round((Math.random()*args.length-1));
rand_Index=rand_Index==-1?0:rand_Index;

var nag = ["http","@","www","Edit"];

var isValid=function(t){
  for(var i in nag){
    n=nag[i].toLowerCase();
    if(t.toLowerCase().indexOf(n)!=-1){
      return false;
    }
  }
  return true;
};

//console.log("will search for "+args[rand_Index]);

(new reddit({limit:1})).get(args[rand_Index], acallback);

process.on('exit', function() {
  var rand_Index = Math.round((Math.random()*all.length-1));
  rand_Index=rand_Index==-1?0:rand_Index;
  if(all[rand_Index]){
    console.log(all[rand_Index]);
  }
});


