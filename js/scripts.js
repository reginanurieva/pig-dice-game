//FRONTEND

var diceNumber=0;// set the showing Dice total
var turnscore=0; //running total of the current player
//var total=0;
$(document).ready(function(){

  $("#rollButton").click(function(){
    //the Dice needs to roll and user either keep rolling or loosing all points
  rollDice();
  turnScore();
  });

  $("#holdButton").click(function(){
    //all accumulated ponts are stored and turn goes to another player
  instancePlayer.hold();
  $("#userStatus").text(0);
  $("#userTotal").text(instancePlayer.total);
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
  return result;
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
    $("#userStatus").text(0);
    console.log(result)
  if(result >= 100)
  alert("You are rock!")
  console.log(result)
  } else {
    turnscore += result
    $("#userStatus").text(turnscore);
}
};
