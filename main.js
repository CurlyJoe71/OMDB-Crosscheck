var input1 = "Drew Carey";
var input2 = "Ryan Stiles";
var input1Array = [];
var input1Return;
var input2Array = [];
var input2Return;
var showsInCommon = [];

var omdbQueryURL = 'http://www.omdbapi.com/?apikey=c1a5ab8c&'

var shinobiQueryURL = 'https://api.hillbillysoftware.com/Cast/ActorBySearch/f729ded5449c4e9f9f337b2902482c73/';

//Making https request to pull first actor's listings
// var makeInquiry = function () {


    $.ajax({
    method: "GET",
    url: shinobiQueryURL + input1
}).then(function(response) {
    // input1Return = $(this).response;
    console.log(response);
    // console.log(input1Return);
});

// }

// request(shinobiQueryURL + input1, function (err, res, body) {
//     if (!err && res.statusCode === 200) {
//         input1Return = JSON.parse(body);
//         for (var i = 0; i < input1Return.length; i++) {
//             input1Array.push(input1Return[i].ShowName)
//         }
//         console.log(`${input1}'s shows are: \n ${input1Array}`);

//         //Making https request to pull second actor's listings
//         request(shinobiQueryURL + input2, function (err, res, body) {
//             if (!err && res.statusCode === 200) {
//                 input2Return = JSON.parse(body);
//                 for (var i = 0; i < input2Return.length; i++) {
//                     input2Array.push(input2Return[i].ShowName);
//                 }
//                 console.log(`${input2}'s shows are: \n ${input2Array}`);
//             }
//         });

//         for (var i = 0; i < input1Array.length; i++) {
//             for (var j = 0; j < input2Array.length; j++) {
//                 if (input1Array[i] === input2Array[j]) {
//                     showsInCommon.push(input1Array[i]);
//                 }

//             }

//         };
//         console.log(`Their shows in common are: ${showsInCommon}`);
//     }
// });





// console.log(showsInCommon);

