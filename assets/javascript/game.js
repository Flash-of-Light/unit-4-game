$(document).ready(function() {

//global variables
    var total = 0; // our current total
    var wins = 0;
    var losses = 0;
    var goal = Math.floor(Math.random() * 102) + 19; 
    console.log(goal);
 
//the function to start the game with variables assigned
function startgame() {
goal = Math.floor(Math.random() * 102) + 19; 
//console.log(goal);

$("#goal").html("Goal: " + goal);
$("#total").html("Current Total: " + total);
$("#wins").html("Wins: " + wins);
$("#losses").html("Losses: " + losses);

//gem 1
crystal1 = Math.floor(Math.random() * 12) + 1; 
//console.log(crystal1);

//gem 2
crystal2 = Math.floor(Math.random() * 12) + 1; 
//console.log(crystal2);

//gem 3
crystal3 = Math.floor(Math.random() * 12) + 1; 
//console.log(crystal3);

//gem 4
crystal4 = Math.floor(Math.random() * 12) + 1; 
//console.log(crystal4);
}
//call the function
startgame();

//victory check & adjust counters
function victorycheck() {
   if (goal === total) {
   total = 0;
   alert("Congrats you won~")
   wins++;
   $("#wins").html("Wins: " + wins);
   startgame();
   $("#goal").html("Goal: " + goal);
   }

else if (goal < total) {
    total = 0;
    alert("RIP")
    losses++;
    $("#losses").html("Losses: " + losses);
    startgame();
    $("#total").html("Current Total: " + total);
   
};
};

// onclick effect for gem 1
    $("#crystal1").on("click", function() {
        //console.log(crystal1);
        total = total + crystal1;
        console.log(total);
        $("#total").html("Current Total: " + total);
        victorycheck();
    });
   
// onclick effect for gem 2
$("#crystal2").on("click", function() {
        total = total + crystal2;
        console.log(total);
        $("#total").html("Current Total: " + total);
        victorycheck();
    });

// onclick effect for gem 3
$("#crystal3").on("click", function() {
        total = total + crystal3;
        console.log(total);
        $("#total").html("Current Total: " + total);
        victorycheck();
    });

// onclick effect for gem 4
$("#crystal4").on("click", function() {
        total = total + crystal4;
        console.log(total);
        $("#total").html("Current Total: " + total);
        victorycheck();
    });
});