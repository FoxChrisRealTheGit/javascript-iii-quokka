var roundScores = [36, 39, 44, 49, 45, 48, 52]

//Use reduce to get a sum
var sum = roundScores.reduce((p, x, i, arr)=> p+x);
sum;
//Use the sum to get an average

//Handicap is 4
//Use a map to reduce all scores by 4
var handicap = roundScores.map((x, i, arr)=> x-4);
handicap;
//Use a reduce to get a sum
var scoreSum = handicap.reduce((p, x, i, arr)=>p+x);
scoreSum;
//Use the sum to get an average
var average = scoreSum/roundScores.length;
average;

var lyricWords = ["Hello, ", "from ", "the ", "other ", "side ", "/r/n"]

//Use reduce to go through the lyricWords and concatenate them together
var con = lyricWords.reduce((p, x, i, arr)=>p+=x);
