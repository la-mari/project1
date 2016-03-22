//Global variables
var faceValue;
var wageredCards = [];

var buttonToggle = function(){
    $("#playWar").toggleClass("playWarOff");
};

//Setting up to play
var makeDeck = function() {

  //Making the deck
    var Card = function(value, suit){
      var faceValueText = ['a Two', 'a Three', 'a Four','a Five', 'a Six', 'a Seven', 'an Eight', 'a Nine', 'a Ten', 'a Jack', 'a Queen', 'a King', 'an Ace'];
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
var playWar = function() {
  console.log('Player reveals ' + playerDeck[4].name);
  console.log('Opponent reveals ' + oppoDeck[4].name);

  $( '#stageText' ).text( 'Player reveals ' + playerDeck[4].name + ' and Opponent reveals ' + oppoDeck[4].name );

  if (playerDeck[4].value > oppoDeck[4].value){
    $( '#outcomeText' ).text( 'You won the battle!' );

    buttonToggle();

    console.log('You won the war! Phat lewt!!');

    wageredCards.push(playerDeck[0], playerDeck[1], playerDeck[2], playerDeck[3], playerDeck[4]);
    wageredCards.push(oppoDeck[0], oppoDeck[1], oppoDeck[2], oppoDeck[3], oppoDeck[4]);

    for (var i = 0; i < wageredCards.length; i++){
      playerDeck.push(wageredCards[i]);
    }

    oppoDeck.splice(0, 5);
    playerDeck.splice(0, 5);

  }

  else if (playerDeck[4].value < oppoDeck[4].value){
    $( '#outcomeText' ).text( 'You lost the war!' );

    buttonToggle();
    console.log('You lost the battle! zomg');
    wageredCards.push(playerDeck[0], playerDeck[1], playerDeck[2], playerDeck[3], playerDeck[4]);
    wageredCards.push(oppoDeck[0], oppoDeck[1], oppoDeck[2], oppoDeck[3], oppoDeck[4]);

    for (var index = 0; index < wageredCards.length; index++){
      oppoDeck.push(wageredCards[index]);
    }

    oppoDeck.splice(0, 5);
    playerDeck.splice(0, 5);

  }

  else {
    console.log('DOUBLE WAR!');
    buttonToggle();
    oppoDeck.splice(0, 5);
    playerDeck.splice(0, 5);
  }

  console.log(playerDeck, oppoDeck);

  //Win condition
  if (playerDeck.length > 49){
    window.alert('you win!!');
  } else if (oppoDeck.length > 49){
    window.alert('you lose!!');
  }

  getNames();

  $( '#stackList' ).text( nameDeck );
  $( '#playerStackSize' ).text( 'Player stack: ' + playerDeck.length + ' cards' );
  $( '#oppoStackSize' ).text( 'Computer stack: ' + oppoDeck.length + ' cards' );
};

//Play a battle
var playHand = function(){
  var playerWin;
  var oppoWin;

  $( '#stageText' ).text( 'Player reveals ' + playerDeck[0].name + ' and Opponent reveals ' + oppoDeck[0].name );
  $( '#playerCardBox' ).text( playerDeck[0].name );
  $( '#oppoCardBox' ).text( oppoDeck[0].name );

  if (playerDeck[0].value > oppoDeck[0].value){
    $( '#outcomeText' ).text( 'You won the battle!' );
    wageredCards.push(playerDeck[0]);
    wageredCards.push(oppoDeck[0]);
    playerDeck.push(wageredCards[0], wageredCards[1]);
    oppoDeck.splice(0, 1);
    playerDeck.splice(0, 1);
    wageredCards = [];
  }

  else if (playerDeck[0].value < oppoDeck[0].value){
    $( '#outcomeText' ).text( 'You lost the battle!' );
    wageredCards.push(playerDeck[0]);
    wageredCards.push(oppoDeck[0]);
    oppoDeck.push(wageredCards[0], wageredCards[1]);
    oppoDeck.splice(0, 1);
    playerDeck.splice(0, 1);
    wageredCards = [];
  }

  else {
    console.log('WAR!');
    $( '#outcomeText' ).text( 'WAR!' );
    buttonToggle();
  }

  console.log(playerDeck, oppoDeck);
  if (playerDeck.length === 52){
    alert.window('you win!!');
  } else if (oppoDeck.length === 52){
    alert.window('you lose!!');
  }

  //Win condition
  if (playerDeck.length > 49){
    alert.window('you win!!');
  } else if (oppoDeck.length === 49){
    window.alert('you lose!!');
  }

  getNames();

  $( '#playerStackSize' ).text( 'Player stack: ' + playerDeck.length + ' cards' );
  $( '#oppoStackSize' ).text( 'Computer stack: ' + oppoDeck.length + ' cards' );
  $( '#stackList' ).text( nameDeck );
};

//Play button on screen
$('#playBattle').on('click', function(){
  playHand();
});

$('#playWar').on('click', function(){
  playWar();
});

//GUI
$( '#playerStackSize' ).text( 'Player stack: ' + playerDeck.length + ' cards' );
$( '#oppoStackSize' ).text( 'Computer stack: ' + oppoDeck.length + ' cards' );
$( '#stackList' ).text( nameDeck );

var nameDeck = [];

var getNames = function(){
  nameDeck = [];
  for(var i = 0; i < playerDeck.length; i++){
    nameDeck.push(playerDeck[i].name);
  }
};

getNames();











