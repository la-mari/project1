//Global variables
var faceValue;
var wageredCards = [];
var playerPoints = 0;
var oppoPoints = 0;

var buttonToggle = function(){
    $("#playWar").toggleClass("playWarOff");
};

//Making the deck
var Card = function(value, suit){
  var faceValueText = [' Two', ' Three', ' Four',' Five', ' Six', ' Seven', ' Eight', ' Nine', ' Ten', ' Jack', ' Queen', ' King', ' Ace'];
  this.value = value;
  this.suit = suit;
  this.faceValue = faceValueText[value];
  this.name = this.faceValue + ' of ' + this.suit;
};

//Shuffling the deck
var shuffleDeck = function(a){
  var randomIze;
  var x;
  for (var i = a.length; i; i -= 1){
    randomIze = Math.floor(Math.random() * i);
    x = a[i - 1];
    a[i - 1] = a[randomIze];
    a[randomIze] = x;
  }
};

//Setting up to play
var makeDeck = function() {

  var suits = [
    'Hearts',
    'Clubs',
    'Spades',
    'Diamonds'
  ];


  var gameDeck = [];

  for (var i = 0; i < 13; i++){
    for (var j = 0; j < suits.length; j++){
      gameDeck.push( new Card(i, suits[j]) );
    }
  }

  shuffleDeck(gameDeck);

  return gameDeck;
};

var gameDeck = makeDeck();

//Splitting the deck in two player decks
var playerDeck = gameDeck.splice(0,26);
var oppoDeck = gameDeck;

//Play a War
var playWar = function() {
  if (playerDeck.length >= 5 && oppoDeck.length >= 5){
    console.log('Player reveals ' + playerDeck[4].name);
    console.log('Opponent reveals ' + oppoDeck[4].name);

    $( '#stageText' ).text( 'Player shows ' + playerDeck[4].name + ' and Opponent shows ' + oppoDeck[4].name );

    if (playerDeck[4].value > oppoDeck[4].value){
      $( '#outcomeText' ).text( 'You won the war!' );

      $( '#playerWagerList' ).append( ', ' + wageredCards[8].name );
      $( '#oppoWagerList' ).append( ', ' + wageredCards[9].name );
      console.log('You won the war! Phat lewt!!');

      for (var i = 0; i < wageredCards.length; i++){
        playerDeck.push(wageredCards[i]);
      }

      buttonToggle();
      wageredCards = [];
      playerPoints++;
    }

    else if (playerDeck[4].value < oppoDeck[4].value){
      $( '#outcomeText' ).text( 'You lost the war!' );

      $( '#playerWagerList' ).append( ', ' + wageredCards[8].name );
      $( '#oppoWagerList' ).append( ', ' + wageredCards[9].name );
      console.log('You lost the battle! zomg');

      for (var index = 0; index < wageredCards.length; index++){
        oppoDeck.push(wageredCards[index]);
      }

      buttonToggle();
      wageredCards = [];
      oppoPoints++;
    }

    else {
      console.log('DOUBLE WAR!');
      oppoDeck.splice(0, 5);
      playerDeck.splice(0, 5);
    }

  oppoDeck.splice(0, 5);
  playerDeck.splice(0, 5);
}

  else {
    var playerSlice = playerDeck.slice(0, 3);
    var playLength = playerSlice.length - 1;
    // loop through the array and append each one
    for (var i = 0; i < playLength; i++){
      var card = playerSlice[i];
      $( '#playerWagerList' ).append( card.name + ', ' );
      oppoDeck.splice(0, 1);
      wageredCards = [];
      buttonToggle();

    }

    var oppoSlice = oppoDeck.slice(0, 3);
    var oppoLength = oppoSlice.length - 1;
    // loop through the array and append each one
    for (var i = 0; i < oppoLength; i++){
      var card = oppoSlice[i];
      $( '#oppoWagerList' ).append( card.name + ', ' );
      oppoDeck.splice(0, 1);
      wageredCards = [];
      buttonToggle();
    }

    console.log(playerDeck, oppoDeck);

    //Win condition
    if (playerDeck.length === 52){
      window.alert('you win!!');
    } else if (oppoDeck.length === 52){
      window.alert('you lose!!');
    }
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

  $( '#stageText' ).text( 'Player shows ' + playerDeck[0].name + ' and Opponent shows ' + oppoDeck[0].name );
  // $( '#playerCardBox' ).text( playerDeck[0].name );
  // $( '#oppoCardBox' ).text( oppoDeck[0].name );

  if (playerDeck[0].value > oppoDeck[0].value){
        $('.suitImg').attr('src', '../spade.png')
    $( '#outcomeText' ).text( 'You won the battle!' );
    wageredCards.push(playerDeck[0]);
    wageredCards.push(oppoDeck[0]);
    $( '#playerWagerList' ).text( wageredCards[0].name );
    $( '#oppoWagerList' ).text( wageredCards[1].name );
    playerDeck.push(wageredCards[0], wageredCards[1]);
    oppoDeck.splice(0, 1);
    playerDeck.splice(0, 1);
    wageredCards = [];
    playerPoints++;
  }

  else if (playerDeck[0].value < oppoDeck[0].value){
        $('.suitImg').attr('src', '../spade.png')
    $( '#outcomeText' ).text( 'You lost the battle!' );
    wageredCards.push(playerDeck[0]);
    wageredCards.push(oppoDeck[0]);
    $( '#playerWagerList' ).text( wageredCards[0].name );
    $( '#oppoWagerList' ).text( wageredCards[1].name );
    oppoDeck.push(wageredCards[0], wageredCards[1]);
    oppoDeck.splice(0, 1);
    playerDeck.splice(0, 1);
    wageredCards = [];
    oppoPoints++;
  }

  else {
    console.log('WAR!');
    $( '#outcomeText' ).text( 'WAR!' );
    if (playerDeck.length >= 5){
      wageredCards.push(playerDeck[0], playerDeck[1], playerDeck[2], playerDeck[3], playerDeck[4]);
      wageredCards.push(oppoDeck[0], oppoDeck[1], oppoDeck[2], oppoDeck[3], oppoDeck[4]);
      $( '#playerWagerList' ).text( wageredCards[0].name + ',' );
      $( '#playerWagerList' ).append( wageredCards[1].name + ',' );
      $( '#playerWagerList' ).append( wageredCards[2].name + ',' );
      $( '#playerWagerList' ).append( wageredCards[3].name );
      $( '#oppoWagerList' ).text( wageredCards[4].name + ',' );
      $( '#oppoWagerList' ).append( wageredCards[5].name + ',' );
      $( '#oppoWagerList' ).append( wageredCards[6].name + ',' );
      $( '#oppoWagerList' ).append( wageredCards[7].name );
      buttonToggle();
    } else {
      console.log('grlglrlgrlgr');
      var playerSlice = playerDeck.slice(0, 3);
      var playLength = playerSlice.length - 1;
      // loop through the array and append each one
      for (var i = 0; i < playLength; i++){
        var card = playerSlice[i];
        $( '#playerWagerList' ).append( card.name + ', ' );
        oppoDeck.splice(0, 1);
        buttonToggle();

      }

      var oppoSlice = oppoDeck.slice(0, 3);
      var oppoLength = oppoSlice.length - 1;
      // loop through the array and append each one
      for (var i = 0; i < oppoLength; i++){
        var card = oppoSlice[i];
        $( '#oppoWagerList' ).append( card.name + ', ' );
        oppoDeck.splice(0, 1);
        buttonToggle();
      }
    }
  }

  console.log(playerDeck, oppoDeck);
  if (playerDeck.length === 52){
    window.alert('you win!!');
  } else if (oppoDeck.length === 52){
    window.alert('you lose!!');
  }

  //Win condition
  if (playerDeck.length === 52){
    window.alert('you win!!');
  } else if (oppoDeck.length === 52){
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











