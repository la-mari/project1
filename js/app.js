//Global variables
var faceValue;
var wageredCards = [];

//Setting up to play
var makeDeck = function() {

  //Making the deck
    var Card = function(value, suit){
      var faceValueText =['a Two', 'a Three', 'a Four','a Five', 'a Six', 'a Seven', 'an Eight', 'a Nine', 'a Ten', 'a Jack', 'a Queen', 'a King', 'an Ace'];
      this.value = value;
      this.suit = suit;
      this.faceValue = faceValueText[value];
      this.name = this.faceValue + ' of ' + this.suit;
  };

    var suits = [
    'Hearts',
    'Clubs',
    'Spades',
    'Diamonds'
    ];

    this.gameDeck = [];
    for (var i = 0; i < 13; i++){
      for (var j = 0; j < suits.length; j++){
        this.gameDeck.push( new Card(i, suits[j]) );
      }
  }

  //Shuffling the deck
  var shuffleDeck = function(a){
    var randomIze;
    var x;
    for (var i = gameDeck.length; i; i -= 1){
      randomIze = Math.floor(Math.random() * i);
      x = a[i - 1];
      a[i - 1] = a[randomIze];
      a[randomIze] = x;
    }
  };

  shuffleDeck(gameDeck);

  return gameDeck;
  };

makeDeck();

//Splitting the deck in two player decks
var playerDeck = gameDeck.splice(0,26);
var oppoDeck = gameDeck;

//Play a War
var playWar = function(){
  console.log('Player reveals ' + playerDeck[0].name);
  console.log('Opponent reveals ' + oppoDeck[0].name);

  if (playerDeck[0].value > oppoDeck[0].value){
    console.log('You won the battle! Phat lewt!!');
    wageredCards.push(playerDeck[0]);
    wageredCards.push(oppoDeck[0]);

    for (var i = 0; i < wageredCards.length; i++){
      playerDeck.push(wageredCards[i]);
    }

    oppoDeck.splice(0, 4);
    playerDeck.splice(0, 4);

  }

  else if (playerDeck[0].value < oppoDeck[0].value){
    console.log('You lost the battle! zomg');
    wageredCards.push(playerDeck[0]);
    wageredCards.push(oppoDeck[0]);

    for (var index = 0; index < wageredCards.length; index++){
      oppoDeck.push(wageredCards[index]);
    }

    oppoDeck.splice(0, 4);
    playerDeck.splice(0, 4);

  }

  else {
    console.log('WAR!');
    wageredCards.push(playerDeck[1], playerDeck[2], playerDeck[3]);
    wageredCards.push(oppoDeck[1], oppoDeck[2], oppoDeck[3]);
    wageredCards.push(playerDeck[0]);
    wageredCards.push(oppoDeck[0]);
    oppoDeck.splice(0, 1);
    playerDeck.splice(0, 1);

    $('#playButton').on('click', function(){
      event.stopPropagation();
      playHand();
    });

  }

  console.log(playerDeck, oppoDeck);

};

//Play a battle
var playHand = function(){
var playerWin;
var oppoWin;

//Changing the gamestate
  console.log('Player reveals ' + playerDeck[0].name);
  console.log('Opponent reveals ' + oppoDeck[0].name);

  if (playerDeck[0].value > oppoDeck[0].value){
    console.log('You won the battle!');
    wageredCards.push(playerDeck[0]);
    wageredCards.push(oppoDeck[0]);
    playerDeck.push(wageredCards[0], wageredCards[1]);
    oppoDeck.splice(0, 1);
    playerDeck.splice(0, 1);
    wageredCards = [];
  }

  else if (playerDeck[0].value < oppoDeck[0].value){
    console.log('You lost the battle!');
    wageredCards.push(playerDeck[0]);
    wageredCards.push(oppoDeck[0]);
    oppoDeck.push(wageredCards[0], wageredCards[1]);
    oppoDeck.splice(0, 1);
    playerDeck.splice(0, 1);
    wageredCards = [];
  }

  else {
    console.log('WAR!');
    wageredCards.push(playerDeck[1], playerDeck[2], playerDeck[3]);
    wageredCards.push(oppoDeck[1], oppoDeck[2], oppoDeck[3]);
    wageredCards.push(playerDeck[0]);
    wageredCards.push(oppoDeck[0]);
    oppoDeck.splice(0, 1);
    playerDeck.splice(0, 1);
  }

  console.log(playerDeck, oppoDeck);
};

//Play button on screen
$('#playBattle').on('click', function(){
  playHand();
});

$('#playWar').on('click', function(){
  playWar();
});

















