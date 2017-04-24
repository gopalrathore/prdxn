var unirest = require('unirest');

// These code snippets use an open-source library.
unirest.post("https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies")
.header("X-Mashape-Key", "l2DR7ItvKimshweQCKkKsG3UN5hdp1vRTkejsnzAWKizVmOwKM")
.header("Content-Type", "application/x-www-form-urlencoded")
.header("Accept", "application/json")
.end(function (result) {
	var a = JSON.parse(result.body);
	console.log(a);
});