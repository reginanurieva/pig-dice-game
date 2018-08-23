
//FRONTEND

var diceNumber=0;// set the showing Dice total
var turnscore=0; //running total of the current player
//var total=0;
$(document).ready(function(){

  $("#rollButton").click(function(){
    //the Dice needs to roll and user either keep rolling or loosing all points
  rollDice();
  turnScore();
  $("#rollStatus").text(result);
  });

  $("#holdButton").click(function(){
  alert("Switch to player 2");
    //all accumulated ponts are stored and turn goes to another player
  instancePlayer.hold();
  $("#user1Status").text(0);
  $("#userTotal").text(instancePlayer.total);
  $("#holdButton").toggle();
  $("#rollButton").toggle();
  $("#holdButton2").toggle();
  $("#rollButton2").toggle();
  });


  $("#rollButton2").click(function(){
    //the Dice needs to roll and user either keep rolling or loosing all points
  rollDice();
  turnScore2();
  $("#rollStatus").text(result);

  });

  $("#holdButton2").click(function(){
    //all accumulated ponts are stored and turn goes to another player
  alert("Switch to player 1");
  instance1Player.hold();
  $("#user2Status").text(0);
  $("#user2Total").text(instance1Player.total);
  $("#holdButton2").toggle();
  $("#rollButton2").toggle();
  $("#holdButton").toggle();
  $("#rollButton").toggle();
  });
});

//BACKEND

function Player(id){
  this.id=id;
  this.total=0;
}

var instancePlayer = new Player(0);
var instance1Player = new Player(1);

var rollDice = function (){
  result = (Math.floor(Math.random()*6)+1);
  // $("#yourDice1").text(result);

  // return result;
}

// var hold = function (){
//   total += turnscore;
//   $("#userTotal").text(total);
//   console.log(total);
//   $("#userStatus").text(0);
// }

Player.prototype.hold = function(){
  this.total += turnscore
  turnscore = 0;
}

var turnScore = function() {
  if (result === 1) {
    turnscore = 0;
    $("#user1Status").text(0);
    alert("Your dice is 1!Pass the mouse to the other player, your turn has ended");
    $("#holdButton").toggle();
    $("#rollButton").toggle();
    $("#holdButton2").toggle();
    $("#rollButton2").toggle();
  }
  else if(instancePlayer.total >= 100) {
  alert("You are rock!")
  } else {
    turnscore += result
    $("#user1Status").text(turnscore);
}
};

var turnScore2 = function() {
  if (result === 1) {
    turnscore = 0;
    $("#user2Status").text(0);
    alert("Pass the mouse to the other player, your turn has ended");
    $("#holdButton2").toggle();
    $("#rollButton2").toggle();
    $("#holdButton").toggle();
    $("#rollButton").toggle();
    // console.log(result)
  }
  else if(instance1Player.total >= 100){
  alert("You are rock!")
  // console.log(result)
  } else {
    turnscore += result
    $("#user2Status").text(turnscore);
}
};
