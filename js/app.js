//Global variables
var faceValue;
var wageredCards = [];
var playerPoints = 0;
var oppoPoints = 0;

var buttonToggle = function(){
    $("#playWar").toggleClass("playWarOff");
};

//Making the deck
var Card = function(value, suit, name, suitIcon){
  var faceValueText = [' Two', ' Three', ' Four',' Five', ' Six', ' Seven', ' Eight', ' Nine', ' Ten', ' Jack', ' Queen', ' King', ' Ace'];
  this.value = value;
  this.suit = suit;
  this.faceValue = faceValueText[value];
  this.name = name;
  this.icon = suitIcon;
  this.display = this.name + this.icon;
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
      var cardNames = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
      var k = cardNames[i];
      var suitIcons = ['♥', '♣', '♠', '♦'];
      var l = suitIcons[j];
      gameDeck.push( new Card(i, suits[j], k, l) );
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
        //suits and value image swapping
  if(playerDeck[0].suit === 'Spades'){
    $("#playerSuitImg").attr("src", "spades.jpg");
  } else if (playerDeck[0].suit === 'Diamonds'){
    $("#playerSuitImg").attr("src", "diamonds.jpg");
  } else if (playerDeck[0].suit === 'Clubs'){
    $("#playerSuitImg").attr("src", "clubs.png");
  } else if (playerDeck[0].suit === 'Hearts'){
    $("#playerSuitImg").attr("src", "hearts.png");
  }

    if(playerDeck[0].suit === 'Spades'){
    $("#playerSuitImg2").attr("src", "spades.jpg");
  } else if (playerDeck[0].suit === 'Diamonds'){
    $("#playerSuitImg2").attr("src", "diamonds.jpg");
  } else if (playerDeck[0].suit === 'Clubs'){
    $("#playerSuitImg2").attr("src", "clubs.png");
  } else if (playerDeck[0].suit === 'Hearts'){
    $("#playerSuitImg2").attr("src", "hearts.png");
  }

  if(playerDeck[0].value === 0){
    $("#playerValImg").attr("src", "two.png");
  } else if (playerDeck[0].value === 1){
    $("#playerValImg").attr("src", "three.png");
  } else if (playerDeck[0].value === 2){
    $("#playerValImg").attr("src", "four.png");
  } else if (playerDeck[0].value === 3){
    $("#playerValImg").attr("src", "five.png");
  }else if (playerDeck[0].value === 4){
    $("#playerValImg").attr("src", "six.jpg");
  } else if (playerDeck[0].value === 5){
    $("#playerValImg").attr("src", "seven.jpg");
  } else if (playerDeck[0].value === 6){
    $("#playerValImg").attr("src", "eight.jpg");
  }else if (playerDeck[0].value === 7){
    $("#playerValImg").attr("src", "nine.png");
  } else if (playerDeck[0].value === 8){
    $("#playerValImg").attr("src", "ten.png");
  } else if (playerDeck[0].value === 9){
    $("#playerValImg").attr("src", "jack.png");
  }else if (playerDeck[0].value === 10){
    $("#playerValImg").attr("src", "queen.jpg");
  } else if (playerDeck[0].value === 11){
    $("#playerValImg").attr("src", "king.jpg");
  }else if (playerDeck[0].value === 12){
    $("#playerValImg").attr("src", "ace.jpg");
  }

  if(oppoDeck[0].suit === 'Spades'){
    $("#oppoSuitImg").attr("src", "spades.jpg");
  } else if (oppoDeck[0].suit === 'Diamonds'){
    $("#oppoSuitImg").attr("src", "diamonds.jpg");
  } else if (oppoDeck[0].suit === 'Clubs'){
    $("#oppoSuitImg").attr("src", "clubs.png");
  } else if (oppoDeck[0].suit === 'Hearts'){
    $("#oppoSuitImg").attr("src", "hearts.png");
  }

  if(oppoDeck[0].suit === 'Spades'){
    $("#oppoSuitImg2").attr("src", "spades.jpg");
  } else if (oppoDeck[0].suit === 'Diamonds'){
    $("#oppoSuitImg2").attr("src", "diamonds.jpg");
  } else if (oppoDeck[0].suit === 'Clubs'){
    $("#oppoSuitImg2").attr("src", "clubs.png");
  } else if (oppoDeck[0].suit === 'Hearts'){
    $("#oppoSuitImg2").attr("src", "hearts.png");
  }

    if(oppoDeck[0].value === 0){
    $("#oppoValImg").attr("src", "two.png");
  } else if (oppoDeck[0].value === 1){
    $("#oppoValImg").attr("src", "three.png");
  } else if (oppoDeck[0].value === 2){
    $("#oppoValImg").attr("src", "four.png");
  } else if (oppoDeck[0].value === 3){
    $("#oppoValImg").attr("src", "five.png");
  }else if (oppoDeck[0].value === 4){
    $("#oppoValImg").attr("src", "six.jpg");
  } else if (oppoDeck[0].value === 5){
    $("#oppoValImg").attr("src", "seven.jpg");
  } else if (oppoDeck[0].value === 6){
    $("#oppoValImg").attr("src", "eight.jpg");
  }else if (oppoDeck[0].value === 7){
    $("#oppoValImg").attr("src", "nine.png");
  } else if (oppoDeck[0].value === 8){
    $("#oppoValImg").attr("src", "ten.png");
  } else if (oppoDeck[0].value === 9){
    $("#oppoValImg").attr("src", "jack.png");
  }else if (oppoDeck[0].value === 10){
    $("#oppoValImg").attr("src", "queen.jpg");
  } else if (oppoDeck[0].value === 11){
    $("#oppoValImg").attr("src", "king.jpg");
  }else if (oppoDeck[0].value === 12){
    $("#oppoValImg").attr("src", "ace.jpg");
  }

  if (playerDeck.length >= 5 && oppoDeck.length >= 5){
    console.log('Player reveals ' + playerDeck[4].name);
    console.log('Opponent reveals ' + oppoDeck[4].name);

    $( '#stageText' ).text( 'Player shows ' + playerDeck[4].faceValue + ' of ' + playerDeck[4].suit + ' and Opponent shows ' + oppoDeck[4].faceValue + ' of ' + oppoDeck[4].suit );

    if (playerDeck[4].value > oppoDeck[4].value){
      $( '#outcomeText' ).text( 'You won the war!' );

      $( '#playerWagerList' ).append( ', ' + wageredCards[8].display );
      $( '#oppoWagerList' ).append( ', ' + wageredCards[9].display );
      console.log('You won the war! Phat lewt!!');

      for (var i = 0; i < wageredCards.length; i++){
        playerDeck.push(wageredCards[i]);
      }

      buttonToggle();
      wageredCards = [];
      playerPoints = playerPoints + 5;
    }

    else if (playerDeck[4].value < oppoDeck[4].value){
      $( '#outcomeText' ).text( 'You lost the war!' );

      $( '#playerWagerList' ).append( ', ' + wageredCards[8].display );
      $( '#oppoWagerList' ).append( ', ' + wageredCards[9].display );
      console.log('You lost the battle! zomg');

      for (var index = 0; index < wageredCards.length; index++){
        oppoDeck.push(wageredCards[index]);
      }

      buttonToggle();
      wageredCards = [];
      oppoPoints = oppoPoints + 5;
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

  $( '#stackList' ).text( playerDeck[0].display );
  for (var i = 1; i < playerDeck.length; i++){
    $( '#stackList' ).append( ', ' + playerDeck[i].display );
  }

  $( '#playerStackSize' ).text( 'Player stack: ' + playerDeck.length + ' cards' );
  $( '#oppoStackSize' ).text( 'Computer stack: ' + oppoDeck.length + ' cards' );
};

//Play a battle
var playHand = function(){
  var playerWin;
  var oppoWin;

        //suits and value image swapping
  if(playerDeck[0].suit === 'Spades'){
    $("#playerSuitImg").attr("src", "spades.jpg");
  } else if (playerDeck[0].suit === 'Diamonds'){
    $("#playerSuitImg").attr("src", "diamonds.jpg");
  } else if (playerDeck[0].suit === 'Clubs'){
    $("#playerSuitImg").attr("src", "clubs.png");
  } else if (playerDeck[0].suit === 'Hearts'){
    $("#playerSuitImg").attr("src", "hearts.png");
  }

    if(playerDeck[0].suit === 'Spades'){
    $("#playerSuitImg2").attr("src", "spades.jpg");
  } else if (playerDeck[0].suit === 'Diamonds'){
    $("#playerSuitImg2").attr("src", "diamonds.jpg");
  } else if (playerDeck[0].suit === 'Clubs'){
    $("#playerSuitImg2").attr("src", "clubs.png");
  } else if (playerDeck[0].suit === 'Hearts'){
    $("#playerSuitImg2").attr("src", "hearts.png");
  }

  if(playerDeck[0].value === 0){
    $("#playerValImg").attr("src", "two.png");
  } else if (playerDeck[0].value === 1){
    $("#playerValImg").attr("src", "three.png");
  } else if (playerDeck[0].value === 2){
    $("#playerValImg").attr("src", "four.png");
  } else if (playerDeck[0].value === 3){
    $("#playerValImg").attr("src", "five.png");
  }else if (playerDeck[0].value === 4){
    $("#playerValImg").attr("src", "six.jpg");
  } else if (playerDeck[0].value === 5){
    $("#playerValImg").attr("src", "seven.jpg");
  } else if (playerDeck[0].value === 6){
    $("#playerValImg").attr("src", "eight.jpg");
  }else if (playerDeck[0].value === 7){
    $("#playerValImg").attr("src", "nine.png");
  } else if (playerDeck[0].value === 8){
    $("#playerValImg").attr("src", "ten.png");
  } else if (playerDeck[0].value === 9){
    $("#playerValImg").attr("src", "jack.png");
  }else if (playerDeck[0].value === 10){
    $("#playerValImg").attr("src", "queen.jpg");
  } else if (playerDeck[0].value === 11){
    $("#playerValImg").attr("src", "king.jpg");
  }else if (playerDeck[0].value === 12){
    $("#playerValImg").attr("src", "ace.jpg");
  }

  if(oppoDeck[0].suit === 'Spades'){
    $("#oppoSuitImg").attr("src", "spades.jpg");
  } else if (oppoDeck[0].suit === 'Diamonds'){
    $("#oppoSuitImg").attr("src", "diamonds.jpg");
  } else if (oppoDeck[0].suit === 'Clubs'){
    $("#oppoSuitImg").attr("src", "clubs.png");
  } else if (oppoDeck[0].suit === 'Hearts'){
    $("#oppoSuitImg").attr("src", "hearts.png");
  }

  if(oppoDeck[0].suit === 'Spades'){
    $("#oppoSuitImg2").attr("src", "spades.jpg");
  } else if (oppoDeck[0].suit === 'Diamonds'){
    $("#oppoSuitImg2").attr("src", "diamonds.jpg");
  } else if (oppoDeck[0].suit === 'Clubs'){
    $("#oppoSuitImg2").attr("src", "clubs.png");
  } else if (oppoDeck[0].suit === 'Hearts'){
    $("#oppoSuitImg2").attr("src", "hearts.png");
  }

    if(oppoDeck[0].value === 0){
    $("#oppoValImg").attr("src", "two.png");
  } else if (oppoDeck[0].value === 1){
    $("#oppoValImg").attr("src", "three.png");
  } else if (oppoDeck[0].value === 2){
    $("#oppoValImg").attr("src", "four.png");
  } else if (oppoDeck[0].value === 3){
    $("#oppoValImg").attr("src", "five.png");
  }else if (oppoDeck[0].value === 4){
    $("#oppoValImg").attr("src", "six.jpg");
  } else if (oppoDeck[0].value === 5){
    $("#oppoValImg").attr("src", "seven.jpg");
  } else if (oppoDeck[0].value === 6){
    $("#oppoValImg").attr("src", "eight.jpg");
  }else if (oppoDeck[0].value === 7){
    $("#oppoValImg").attr("src", "nine.png");
  } else if (oppoDeck[0].value === 8){
    $("#oppoValImg").attr("src", "ten.png");
  } else if (oppoDeck[0].value === 9){
    $("#oppoValImg").attr("src", "jack.png");
  }else if (oppoDeck[0].value === 10){
    $("#oppoValImg").attr("src", "queen.jpg");
  } else if (oppoDeck[0].value === 11){
    $("#oppoValImg").attr("src", "king.jpg");
  }else if (oppoDeck[0].value === 12){
    $("#oppoValImg").attr("src", "ace.jpg");
  }

    $( '#stageText' ).text( 'Player shows ' + playerDeck[4].faceValue + ' of ' + playerDeck[4].suit + ' and Opponent shows ' + oppoDeck[4].faceValue + ' of ' + oppoDeck[4].suit );


  // $( '#playerCardBox' ).text( playerDeck[0].name );
  // $( '#oppoCardBox' ).text( oppoDeck[0].name );

  if (playerDeck[0].value > oppoDeck[0].value){
    $( '#outcomeText' ).text( 'You won the battle!' );
    wageredCards.push(playerDeck[0]);
    wageredCards.push(oppoDeck[0]);
    $( '#playerWagerList' ).text( wageredCards[0].display );
    $( '#oppoWagerList' ).text( wageredCards[1].display );
    playerDeck.push(wageredCards[0], wageredCards[1]);
    oppoDeck.splice(0, 1);
    playerDeck.splice(0, 1);
    wageredCards = [];
    playerPoints++;
  }

  else if (playerDeck[0].value < oppoDeck[0].value){
    $( '#outcomeText' ).text( 'You lost the battle!' );
    wageredCards.push(playerDeck[0]);
    wageredCards.push(oppoDeck[0]);
    $( '#playerWagerList' ).text( wageredCards[0].display );
    $( '#oppoWagerList' ).text( wageredCards[1].display );
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
      $( '#playerWagerList' ).text( wageredCards[0].display + ', ' );
      $( '#playerWagerList' ).append( wageredCards[1].display + ', ' );
      $( '#playerWagerList' ).append( wageredCards[2].display + ', ' );
      $( '#playerWagerList' ).append( wageredCards[3].display );
      $( '#oppoWagerList' ).text( wageredCards[4].display + ', ' );
      $( '#oppoWagerList' ).append( wageredCards[5].display + ', ' );
      $( '#oppoWagerList' ).append( wageredCards[6].display + ', ' );
      $( '#oppoWagerList' ).append( wageredCards[7].display );
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

  $( '#stackList' ).text( playerDeck[0].display );
  for (var i = 1; i < playerDeck.length; i++){
    $( '#stackList' ).append( ', ' + playerDeck[i].display );
  }
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

$( '#stackList' ).text( playerDeck[0].display );
for (var i = 1; i < playerDeck.length; i++){
    $( '#stackList' ).append( ', ' + playerDeck[i].display );
}

var nameDeck = [];

var getNames = function(){
  nameDeck = [];
  for(var i = 0; i < playerDeck.length; i++){
    nameDeck.push(playerDeck[i].name);
  }
};

getNames();













