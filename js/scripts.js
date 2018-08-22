var rollDice=0;
var total=0;
$(document).ready(function(){
  $("#rollButton").click(function(){
  rollDice = (Math.floor(Math.random()*6)+1);
  // console.log(rollDice)
  // userScore(rollDice);
  userScore();
  });
});

var userScore = function() {
  console.log(rollDice);
  if (rollDice === 1) {
    $("#userStatus").text("");
  } else {
    total += rollDice
    $("#userStatus").text(total);
}
};
