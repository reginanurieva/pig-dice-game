var rollDice;
$(document).ready(function(){
  $("#rollButton").click(function(){
  rollDice = (Math.floor(Math.random()*6)+1);
  var total = 0;
  // console.log(rollDice)
  // userScore(rollDice);
  userScore();
  });
});

var userScore = function() {
  console.log(rollDice);
  if (rollDice === 1) {
    alert("hello");
  }
};
