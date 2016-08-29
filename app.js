//problem: we need a simple way to look at a users badge count and JS points
//solution: use node.js to connect to treehouse api .json for proile info

function printMessage(username, badgeCount, points){
  var message = username + " has " + badgeCount + " total badge(s) and " + points + " points in Javascript.";
  console.log(message)
}

var https = require("https");
var username = "chalkers";
var request = https.get("https://teamtreehouse.com/" + username + ".json", function(response){
  var body = ""; 
  
  response.on('data', function(chunk){
    body += chunk;
  });
  
  response.on('end', function(){
    var profile = JSON.parse(body);
    printMessage(username, profile.badges.length, profile.points.JavaScript)
   })
}); 
  
request.on("error", function(error){
   console.log (error.message);        
});