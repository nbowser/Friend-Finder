
// Variable to store friends data
var friendsData = require("../data/friends.js");

// Export routes function
module.exports = function(app) {

    // Display all friends or return false
    app.get("/api/friends", function(req, res) {
        return res.json(friendsData);
    });

    // API post
    app.post("/api/friends", function(req, res) {

        //console.log(friendsData.dataArray);
        var userScore = req.body.scores;        
        var matchScore = 0;
        var result = [];
        var match;

        for (var i = 0; i < friendsData.length; i+=1) {
            var totalDiff = 0;
            
            for (var j = 0; j < userScore.length; j+=1) {
                console.log(friendsData[i].scores[j])
                
                // Calculate the difference between and sum them into the totalDiff var
                totalDiff += (Math.abs(parseInt(friendsData[i].scores[j]) - parseInt(userScore[j])))
            };

            result.push(totalDiff);
        }
        
        console.log(result);

        for (var k = 0; k < result.length; k+=1) {
            console.log(result[k]);

            if (result[k] <= result[matchScore]) {
                matchScore = k;
                console.log(matchScore);
            }
        };

        match = friendsData[matchScore];
        console.log(matchScore);

        // Push user data to dataArray on friends.js file
        friendsData.push(req.body);

        // Return a JSON with the user's match displaying on the survey page with the Modal
        res.json(match);
    
    });

}