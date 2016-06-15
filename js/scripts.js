// BACKEND
function Player() {
  this.playerArray = [];
  this.firstCoord = [];
  this.secondCoord = [];
}

Player.prototype.turn = function(x) {
  return this.playerArray.push(x);
}

Player.prototype.position = function(x, y) {
  var playerString = this.playerArray.join("");
  counter = 0;
  for (i=0; i<playerString.length; i++ ) {
    if(playerString.charAt(i) == x ) {
      counter++;
      }
    if(counter === 3) {
      $("#board").show();
      $("#cat").hide();
      $(':button.gameButton').prop('disabled', true);
      $(".turn").text("Player " + y + " wins");
      return;
    }
  }
}

Player.prototype.cat = function() {
  if (this.playerArray.length === 5) {
    $(".turn").text("Cat's game");
    $("#board").hide();
    $("#cat").show();
  }
}

// FRONTEND
$(function(){
  $("form#start").submit(function(event) {
    event.preventDefault();
    var newPlayer1 = new Player();
    var newPlayer2 = new Player();
    $(':button#newGameButton').prop('disabled', true);
    $(".turn").text("Player 1");

    $("button.gameButton").click(function() {
      if ($("input:radio[name=player]:checked").val() === "1") {
        $(".turn").text("Player 2");
        this.disabled = true;
        this.style.backgroundImage = "url('img/blue_x.png')";
        var player = "1";
        newPlayer1.player = player;
        buttonValue = $(this).prop("value");
        newPlayer1.turn(buttonValue);
        newPlayer1.cat();
        newPlayer1.position("A", "1");
        newPlayer1.position("B", "1");
        newPlayer1.position("C", "1");
        newPlayer1.position("1", "1");
        newPlayer1.position("2", "1");
        newPlayer1.position("3", "1");
        newPlayer1.position("*", "1");
        newPlayer1.position("$", "1");
        $('input[name="player"]').not(':checked').prop("checked",true);
      } else {
        $(".turn").text("Player 1");
        this.disabled = true;
        this.style.backgroundImage = "url('img/blue_o.png')";
        var player = "2";
        newPlayer2.player = player;
        buttonValue = $(this).prop("value");
        newPlayer2.turn(buttonValue);
        newPlayer2.position("A", "2");
        newPlayer2.position("B", "2");
        newPlayer2.position("C", "2");
        newPlayer2.position("1", "2");
        newPlayer2.position("2", "2");
        newPlayer2.position("3", "2");
        newPlayer2.position("*", "2");
        newPlayer2.position("$", "2");
        $('input[name="player"]').not(':checked').prop("checked",true);
      }
    });
    $("button#restartButton").click(function() {
      location.reload();
    });
  });
});
