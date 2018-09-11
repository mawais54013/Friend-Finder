var friendsData = require("../data/friends");
// this js file is the major file that checks and matches the user's picks with the cloest transformer character
module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
        
    });
    // i put this in a function because it was getting confusing and this area would have a really long set of codes
    app.post("/api/friends", function (req, res) {
       
       checker(req, res);
    });
}
// function recieves both the user's pick and the answers for each character
function checker(send , get)
{
    // every check is set to this array to make final character match
    var options = [];

    var user1 = send.body.arr1[0];
        for(var i=0; i<user1.length;i++) 
        {
            // this sets each user answer to number because the first time in the html file it did not come as number but rather as string
        user1[i] = parseInt(user1[i], 10);
        }
        console.log(user1);
        console.log("===========================")

        console.log("==============1=============")
        var first = friendsData[0].scores;
        var sum1 = 0;
        // this subtracts each character answer with the user's answers 
        var total1 = user1.map(function(item, index)
        {
            return item - first[index];
        })
        // this goes through the array and changes each number to an absolute value so there are no negatives
        for(var x = 0; x<total1.length; x++)
        total1[x] = Math.abs(total1[x]);
        // then we all the user's answer up to check the difference between this character and the user's answers 
        for(var t = 0; t<total1.length; t++)
        {
            sum1 += total1[t];
        }
        // then we push them to the options array 
        console.log(sum1);
        options.push(sum1);
        console.log(total1);
        // i do the same for the next 6 characters to check the smallest number 
        // and also divide them by the console so it is easier to know which character is used for each user's answers
        console.log("==============2=============")
        var second = friendsData[1].scores;
        var sum2 = 0;
        var total2 = user1.map(function(item, index)
        {
            return item - second[index];
        })
        for(var x = 0; x<total2.length; x++)
        total2[x] = Math.abs(total2[x]);
        for(var t = 0; t<total2.length; t++)
        {
            sum2 += total2[t];
        }
        console.log(sum2);
        options.push(sum2);
        console.log(total2);

        console.log("==============3=============")
        var third = friendsData[2].scores;
        var sum3 = 0;
        var total3 = user1.map(function(item, index)
        {
            return item - third[index];
        })
        for(var x = 0; x<total3.length; x++)
        total3[x] = Math.abs(total3[x]);
        for(var t = 0; t<total3.length; t++)
        {
            sum3 += total3[t];
        }
        console.log(sum3);
        options.push(sum3);
        console.log(total3);

        console.log("==============4=============")
        var forth = friendsData[3].scores;
        var sum4 = 0;
        var total4 = user1.map(function(item, index)
        {
            return item - forth[index];
        })
        for(var x = 0; x<total4.length; x++)
        total4[x] = Math.abs(total4[x]);
        for(var t = 0; t<total4.length; t++)
        {
            sum4 += total4[t];
        }
        console.log(sum4);
        options.push(sum4);
        console.log(total4);

        console.log("==============5=============")
        var fifth = friendsData[4].scores;
        var sum5 = 0;
        var total5 = user1.map(function(item, index)
        {
            return item - fifth[index];
        })
        for(var x = 0; x<total5.length; x++)
        total5[x] = Math.abs(total5[x]);
        for(var t = 0; t<total5.length; t++)
        {
            sum5 += total5[t];
        }
        console.log(sum5);
        options.push(sum5);
        console.log(total5);

        console.log("==============6=============")
        var sixth = friendsData[5].scores;
        var sum6 = 0;
        var total6 = user1.map(function(item, index)
        {
            return item - sixth[index];
        })
        for(var x = 0; x<total6.length; x++)
        total6[x] = Math.abs(total6[x]);
        for(var t = 0; t<total6.length; t++)
        {
            sum6 += total6[t];
        }
        console.log(sum6);
        options.push(sum6);
        console.log(total6);

        console.log("==============7=============")
        var seventh = friendsData[6].scores;
        var sum7 = 0;
        var total7 = user1.map(function(item, index)
        {
            return item - seventh[index];
        })
        for(var x = 0; x<total7.length; x++)
        total7[x] = Math.abs(total7[x]);
        for(var t = 0; t<total7.length; t++)
        {
            sum7 += total7[t];
        }
        console.log(sum7);
        options.push(sum7);
        console.log(total7);

    // area that determines which character is suitable.
    // var getResult = Math.min(sum1,sum2,sum3,sum4,sum5,sum6,sum7);
    // this finds the smallest number among the array and returns the indexof it and not the actual number
    var getResult = options.indexOf(Math.min(sum1,sum2,sum3,sum4,sum5,sum6,sum7));
    // get.json(getResult);
    // for this area I tried using a loop but it was going through only one of the characters so i hard coded this part
    if(getResult == 0)
    {
        get.json(friendsData[0]);
    }
    // if the results equal to any part of the array then that character's information is sent to the html file and formated 
    if(getResult == 1)
    {
        get.json(friendsData[1]);
    }
    if(getResult == 2)
    {
        get.json(friendsData[2]);
    }
    if(getResult == 3)
    {
        get.json(friendsData[3]);
    }
    if(getResult == 4)
    {
        get.json(friendsData[4]);
    }
    if(getResult == 5)
    {
        get.json(friendsData[5]);
    }
    if(getResult == 6)
    {
        get.json(friendsData[6]);
    }
};