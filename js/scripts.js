var rollDice=0;
var turnscore=0;
var total=0;
$(document).ready(function(){

  $("#rollButton").click(function(){
  rollDice();
  turnScore();
  });

  $("#holdButton").click(function(){
  hold();
  });
});
function Player(id){
  this.id=id;
  this.total=0;
  // this.turnScore=0;
}

var instancePlayer = new Player(0);
var instancePlayer = new Player(1);

console.log(instancePlayer);

var rollDice = function (){
  result = (Math.floor(Math.random()*6)+1);
  return result;
}

var hold = function (){
  total += turnscore;
  $("#userTotal").text(total);
}

Player.prototype.hold = function(){
  this.total += turnscore
  turnscore = 0;
}

var turnScore = function() {
  // console.log(result);
  if (result === 1) {
    turnscore = 0;
    $("#userStatus").text("");
  } else {
    turnscore += result
    $("#userStatus").text(turnscore);
}
};
