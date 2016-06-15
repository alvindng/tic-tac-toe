// BACKEND
function Player() {

}

// player1 = [];
// player2 = [];

function Space(player) {
  this.player = player;
  this.playerArray = [];
  this.firstCoord = [];
  this.secondCoord = [];
}
Space.prototype.turn = function(x) {
  return this.playerArray.push(x);
}


// counter = 0;
// for(i=0; i<.length(); i++ ) {
//     if( s.charAt(i) == '$' ) {
//         counter++;
//     }
// }
// var firstCoord = [];
// var secondCoord = [];
// var arrayOfStrings = [];
Space.prototype.slice = function(x) {
  var playerString = this.playerArray.join("");
  counter = 0;
  for (i=0; i<playerString.length; i++ ) {
    if( playerString.charAt(i) == x ) {
        counter++;
      }
    if(counter === 3) {
        alert("you win")
      }
  }
}

//   for (i=0; i<this.playerArray.length; i++) {
//     var playerString = splitString(this.playerArray,"");
//     console.log(playerString);
//   }
// }




    // function splitString(stringToSplit,separator){
    //   var arrayOfStrings = stringToSplit.slice('');
    //   console.log(arrayOfStrings);
    // }
    // var playerString = this.playerArray.split('');
//     // console.log(playerSting);
//     var first = this.playerArray.splice(0,1);
//     return this.firstCoord.push(first);
//     // return firstCoord.push(this.playerArray.slice(-1));
//   }
// }

function Board() {

}

function Game() {

}

var play = function(val) {

}

// FRONTEND
$(function(){
  $("form#playerInput").submit(function(event) {
    event.preventDefault();
    var player = $("input:radio[name=player]:checked").val();
    var newSpace = new Space(player);
    newSpace.player = player;
    console.log(newSpace.player);

  $("button").click(function() {
    buttonValue = $(this).attr("value") || 0;
    console.log(buttonValue);
    newSpace.turn(buttonValue);
    console.log(newSpace.playerArray);
    newSpace.slice("A");
    newSpace.slice("B");
    newSpace.slice("C");
    newSpace.slice("1");
    newSpace.slice("2");
    newSpace.slice("3");
    console.log(newSpace.firstCoord);
    });
  });
});
