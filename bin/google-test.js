var google = require('googleapis');
var readline = require('readline');
var youtube = google.youtube('v3');
var OAuth2 = google.auth.OAuth2;
var credentials = require('../lib/credentials');
var oauth2Client = new OAuth2("515205261014-445ddr79bmgtimmfah6ijquu46t1qnsh.apps.googleusercontent.com", "tB-LlqvgWUtugI9PMCntHH2L", "http://localhost/oauth2callback");

// generate a url that asks permissions for Google+ and Google Calendar scopes
//var scopes = [
  //'https://www.googleapis.com/auth/youtube',
//];

//var url = oauth2Client.generateAuthUrl({
  //access_type: 'offline', // 'online' (default) or 'offline' (gets refresh_token)
  //scope: scopes // If you only need one scope you can pass it as string
//});

//console.log('Oauth time');
//oauth2Client.getToken("4/1kFml8ukqQfAN7xDl_OXDnltU0M07nwUdtz5RyK9_ys.cia0ZZtIdg4VJvIeHux6iLZjmfiumAI",  function(err, tokens) {
  // Now tokens contains an access_token and an optional refresh_token. Save them.
  //if(!err) {
   // oauth2Client.setCredentials(tokens);
 // }
  //else {
   // console.log(err);
 // }
  //console.log(tokens);

oauth2Client.setCredentials(credentials);
console.log('Youtube time');

var resourceId = "dQw4w9WgXcQ";
var playlistId = "PLyAy91nyFlPzyh1d9J4iTjqa4jKlza3Ga";
var snippet = {'resourceId': resourceId , 'playlistId': playlistId, 'channelId': playlistId};

google.options({auth: oauth2Client});

youtube.playlistItems.insert({
	'part': 'snippet',
	'playlistId': playlistId,
	'resourceId': resourceId,
	'resource': {'snippet': snippet},
	}, function (err, res) {
    if (err) {
      console.log(res);
      return console.error(err)
    }});
