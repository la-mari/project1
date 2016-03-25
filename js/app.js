//Global variables
var faceValue;
var wageredCards = [];
var playerPoints = 0;
var oppoPoints = 0;
var pUp1 = false;

var buttonToggle = function(){
  $("#playWar").toggleClass("playWarOff");
};

//Win condition
var winTerms = function() {
  if (playerDeck.length === 52){
    window.alert('you win!!');
  } else if (oppoDeck.length === 52){
    window.alert('you lose!!');
  }
  };

var warFail = function() {
  if (playerDeck.length <= 5){
    window.alert('you lose!!');
  } else if (oppoDeck.length <= 5){
    window.alert('you win!!');
  }
};

//Store
var storeFxn = function(){
  $('#powerup1').on('click', function(){
    if(playerPoints >= 10){
      window.alert('Powerup purchased!');
      playerPoints = playerPoints - 10;
      $('#playerPointDisplay').text(playerPoints + ' points');
      $('#pUp1Button').removeClass('hidden').addClass('visible');
      return playerPoints;
    }
  });

  $('#powerup2').on('click', function(){
      if(playerPoints >= 25){
        window.alert('Powerup purchased!');
        playerPoints = playerPoints - 25;
        $('#playerPointDisplay').text(playerPoints + ' points');
        $('#pUp2Button').removeClass('hidden').addClass('visible');
        return playerPoints;
    }
  });

   $('#powerup3').on('click', function(){
      if(playerPoints >= 50){
        window.alert('Powerup purchased!');
        playerPoints = playerPoints - 50;
        $('#playerPointDisplay').text(playerPoints + ' points');
        $('#pUp3Button').removeClass('hidden').addClass('visible');
        return playerPoints;
    }
  });

};

//Powerup 1 function
var usePUp1 = function(){
 $('#pUp1Button').on('click', function(){
    playerDeck.push(oppoDeck[0]);
    oppoDeck.splice(0, 1);
    $('#pUp1Button').removeClass('visible').addClass('hidden');
    $( '#stageText' ).text( 'Player stole a' + oppoDeck[0].faceValue + '!' );
    $( '#playerStackSize' ).text( 'Player stack: ' + playerDeck.length + ' cards' );
    $( '#oppoStackSize' ).text( 'Computer stack: ' + oppoDeck.length + ' cards' );

    $( '#stackList' ).text( playerDeck[0].display );
    for (var i = 1; i < playerDeck.length; i++){
      $( '#stackList' ).append( ', ' + playerDeck[i].display );
    }
    $( '#outcomeText' ).text( 'Powerup Used!' );
  }
);};

var usePUp2 = function(){
 $('#pUp2Button').on('click', function(){
    playerDeck.push(oppoDeck[0], oppoDeck[1], oppoDeck[2]);
    oppoDeck.splice(0, 3);
    $('#pUp2Button').removeClass('visible').addClass('hidden');
    $( '#stageText' ).text( "Player stole computer's " + oppoDeck[0].faceValue + ', ' + oppoDeck[1].faceValue + ', and ' + oppoDeck[2].faceValue + '!' );
    $( '#playerStackSize' ).text( 'Player stack: ' + playerDeck.length + ' cards' );
    $( '#oppoStackSize' ).text( 'Computer stack: ' + oppoDeck.length + ' cards' );

    $( '#stackList' ).text( playerDeck[0].display );
    for (var i = 1; i < playerDeck.length; i++){
      $( '#stackList' ).append( ', ' + playerDeck[i].display );
    }
    $( '#outcomeText' ).text( 'Powerup Used!' );
  }
);};

var usePUp3 = function(){
 $('#pUp3Button').on('click', function(){
    playerDeck.push(oppoDeck[0], oppoDeck[1], oppoDeck[2], oppoDeck[3], oppoDeck[4], oppoDeck[5], oppoDeck[6], oppoDeck[7], oppoDeck[8], oppoDeck[9] );
    oppoDeck.splice(0, 10);
    $('#pUp3Button').removeClass('visible').addClass('hidden');
    $( '#stageText' ).text( "Player stole computer's " + oppoDeck[0].faceValue + ', ' + oppoDeck[1].faceValue + ', ' + oppoDeck[2].faceValue + oppoDeck[3].faceValue + ', ' + oppoDeck[4].faceValue + ', ' + oppoDeck[5].faceValue + ', ' + oppoDeck[6].faceValue + ', ' + oppoDeck[7].faceValue + oppoDeck[8].faceValue + ', and ' + oppoDeck[9].faceValue + '!' );
    $( '#playerStackSize' ).text( 'Player stack: ' + playerDeck.length + ' cards' );
    $( '#oppoStackSize' ).text( 'Computer stack: ' + oppoDeck.length + ' cards' );

    $( '#stackList' ).text( playerDeck[0].display );
    for (var i = 1; i < playerDeck.length; i++){
      $( '#stackList' ).append( ', ' + playerDeck[i].display );
    }
    $( '#outcomeText' ).text( 'NUKE!' );
  }
);};

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
    $("#playerSuitImg").attr("src", "img/spades.png");
  } else if (playerDeck[0].suit === 'Diamonds'){
    $("#playerSuitImg").attr("src", "img/diamonds.png");
  } else if (playerDeck[0].suit === 'Clubs'){
    $("#playerSuitImg").attr("src", "img/clubs.png");
  } else if (playerDeck[0].suit === 'Hearts'){
    $("#playerSuitImg").attr("src", "img/hearts.png");
  }

    if(playerDeck[0].suit === 'Spades'){
    $("#playerSuitImg2").attr("src", "img/spades.png");
  } else if (playerDeck[0].suit === 'Diamonds'){
    $("#playerSuitImg2").attr("src", "img/diamonds.png");
  } else if (playerDeck[0].suit === 'Clubs'){
    $("#playerSuitImg2").attr("src", "img/clubs.png");
  } else if (playerDeck[0].suit === 'Hearts'){
    $("#playerSuitImg2").attr("src", "img/hearts.png");
  }

  if(playerDeck[0].value === 0){
    $("#playerValImg").attr("src", "img/two.png");
  } else if (playerDeck[0].value === 1){
    $("#playerValImg").attr("src", "img/three.png");
  } else if (playerDeck[0].value === 2){
    $("#playerValImg").attr("src", "img/four.png");
  } else if (playerDeck[0].value === 3){
    $("#playerValImg").attr("src", "img/five.png");
  }else if (playerDeck[0].value === 4){
    $("#playerValImg").attr("src", "img/six.jpg");
  } else if (playerDeck[0].value === 5){
    $("#playerValImg").attr("src", "img/seven.jpg");
  } else if (playerDeck[0].value === 6){
    $("#playerValImg").attr("src", "img/eight.jpg");
  }else if (playerDeck[0].value === 7){
    $("#playerValImg").attr("src", "img/nine.png");
  } else if (playerDeck[0].value === 8){
    $("#playerValImg").attr("src", "img/ten.png");
  } else if (playerDeck[0].value === 9){
    $("#playerValImg").attr("src", "img/jack.png");
  }else if (playerDeck[0].value === 10){
    $("#playerValImg").attr("src", "img/queen.jpg");
  } else if (playerDeck[0].value === 11){
    $("#playerValImg").attr("src", "img/king.jpg");
  }else if (playerDeck[0].value === 12){
    $("#playerValImg").attr("src", "img/ace.jpg");
  }

  if(oppoDeck[0].suit === 'Spades'){
    $("#oppoSuitImg").attr("src", "img/spades.png");
  } else if (oppoDeck[0].suit === 'Diamonds'){
    $("#oppoSuitImg").attr("src", "img/diamonds.png");
  } else if (oppoDeck[0].suit === 'Clubs'){
    $("#oppoSuitImg").attr("src", "img/clubs.png");
  } else if (oppoDeck[0].suit === 'Hearts'){
    $("#oppoSuitImg").attr("src", "img/hearts.png");
  }

  if(oppoDeck[0].suit === 'Spades'){
    $("#oppoSuitImg2").attr("src", "img/spades.png");
  } else if (oppoDeck[0].suit === 'Diamonds'){
    $("#oppoSuitImg2").attr("src", "img/diamonds.png");
  } else if (oppoDeck[0].suit === 'Clubs'){
    $("#oppoSuitImg2").attr("src", "img/clubs.png");
  } else if (oppoDeck[0].suit === 'Hearts'){
    $("#oppoSuitImg2").attr("src", "img/hearts.png");
  }

    if(oppoDeck[0].value === 0){
    $("#oppoValImg").attr("src", "img/two.png");
  } else if (oppoDeck[0].value === 1){
    $("#oppoValImg").attr("src", "img/three.png");
  } else if (oppoDeck[0].value === 2){
    $("#oppoValImg").attr("src", "img/four.png");
  } else if (oppoDeck[0].value === 3){
    $("#oppoValImg").attr("src", "img/five.png");
  }else if (oppoDeck[0].value === 4){
    $("#oppoValImg").attr("src", "img/six.jpg");
  } else if (oppoDeck[0].value === 5){
    $("#oppoValImg").attr("src", "img/seven.jpg");
  } else if (oppoDeck[0].value === 6){
    $("#oppoValImg").attr("src", "img/eight.jpg");
  }else if (oppoDeck[0].value === 7){
    $("#oppoValImg").attr("src", "img/nine.png");
  } else if (oppoDeck[0].value === 8){
    $("#oppoValImg").attr("src", "img/ten.png");
  } else if (oppoDeck[0].value === 9){
    $("#oppoValImg").attr("src", "img/jack.png");
  }else if (oppoDeck[0].value === 10){
    $("#oppoValImg").attr("src", "img/queen.jpg");
  } else if (oppoDeck[0].value === 11){
    $("#oppoValImg").attr("src", "img/king.jpg");
  }else if (oppoDeck[0].value === 12){
    $("#oppoValImg").attr("src", "img/ace.jpg");
  }

  if (playerDeck.length >= 5 && oppoDeck.length >= 5){
    console.log('Player reveals ' + playerDeck[4].name);
    console.log('Opponent reveals ' + oppoDeck[4].name);

    $( '#stageText' ).text( 'Player shows ' + playerDeck[4].faceValue + ' of ' + playerDeck[4].suit + ' and Opponent shows ' + oppoDeck[4].faceValue + ' of ' + oppoDeck[4].suit );

    if (playerDeck[4].value > oppoDeck[4].value){
      $( '#outcomeText' ).text( 'YOU WON the war!' );

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
      $( '#outcomeText' ).text( 'YOU LOST the war!' );

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
      warFail();
      console.log('DOUBLE WAR!');
      $( '#outcomeText' ).text(  'DOUBLE WAR!' );
      oppoDeck.splice(0, 5);
      playerDeck.splice(0, 5);
    }

  $('#stackList').each(function () {
    $(this).html($(this).html().replace(/(\♥)/g, '<span style="color: #ff0000;">$1</span>'));
  });
  $('#stackList').each(function () {
    $(this).html($(this).html().replace(/(\♦)/g, '<span style="color: #ff0000;">$1</span>'));
  });

  $('#playerWagerList').each(function () {
      $(this).html($(this).html().replace(/(\♥)/g, '<span style="color: #ff0000;">$1</span>'));
  });
  $('#oppoWagerList').each(function () {
    $(this).html($(this).html().replace(/(\♦)/g, '<span style="color: #ff0000;">$1</span>'));
  });

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
}

  getNames();

  $( '#stackList' ).text( playerDeck[0].display );
  for (var i = 1; i < playerDeck.length; i++){
    $( '#stackList' ).append( ', ' + playerDeck[i].display );
  }

    var lineStack = playerDeck.length;
  if(lineStack < 5){
    $( '#playerStackSize' ).text( 'Player stack: ' + playerDeck.length + '            ' );
    $( '#oppoStackSize' ).text( 'Computer stack: ' + oppoDeck.length );
    $( '#playerStackSize' ).append('<li>__</li>');
  }else if(lineStack < 10){
    $( '#playerStackSize' ).text( 'Player stack: ' + playerDeck.length + '            ' );
    $( '#oppoStackSize' ).text( 'Computer stack: ' + oppoDeck.length );
    $( '#playerStackSize' ).append('<li>_____</li>');
  }else if(lineStack < 20){
    $( '#playerStackSize' ).text( 'Player stack: ' + playerDeck.length + '            ' );
    $( '#oppoStackSize' ).text( 'Computer stack: ' + oppoDeck.length );
    $( '#playerStackSize' ).append('<li>__________</li>');
  }else if(lineStack < 30){
    $( '#playerStackSize' ).text( 'Player stack: ' + playerDeck.length + '            ' );
    $( '#oppoStackSize' ).text( 'Computer stack: ' + oppoDeck.length );
    $( '#playerStackSize' ).append('<li>__________ _____</li>');
  }else if(lineStack < 40){
    $( '#playerStackSize' ).text( 'Player stack: ' + playerDeck.length + '            ' );
    $( '#oppoStackSize' ).text( 'Computer stack: ' + oppoDeck.length );
    $( '#playerStackSize' ).append('<li>__________ __________</li>');
  }else if(lineStack < 50){
    $( '#playerStackSize' ).text( 'Player stack: ' + playerDeck.length );
    $( '#oppoStackSize' ).text( 'Computer stack: ' + oppoDeck.length );
    $( '#playerStackSize' ).append('<li>__________ __________ _____<li>');
  }else if(lineStack < 55){
    $( '#playerStackSize' ).text( 'Player stack: ' + playerDeck.length );
    $( '#oppoStackSize' ).text( 'Computer stack: ' + oppoDeck.length );
    $( '#playerStackSize' ).append('<li>__________ __________ __________<li>');
  }


$('#stackList').each(function () {
  $(this).html($(this).html().replace(/(\♥)/g, '<span style="color: #ff0000;">$1</span>'));
});
$('#stackList').each(function () {
  $(this).html($(this).html().replace(/(\♦)/g, '<span style="color: #ff0000;">$1</span>'));
});

$('#playerWagerList').each(function () {
    $(this).html($(this).html().replace(/(\♥)/g, '<span style="color: #ff0000;">$1</span>'));
});
$('#oppoWagerList').each(function () {
  $(this).html($(this).html().replace(/(\♦)/g, '<span style="color: #ff0000;">$1</span>'));
});


$('#playerPointDisplay').text(playerPoints + ' points');
};

//Play a battle
var playHand = function(){

        //suits and value image swapping
  if(playerDeck[0].suit === 'Spades'){
    $("#playerSuitImg").attr("src", "img/spades.png");
  } else if (playerDeck[0].suit === 'Diamonds'){
    $("#playerSuitImg").attr("src", "img/diamonds.png");
  } else if (playerDeck[0].suit === 'Clubs'){
    $("#playerSuitImg").attr("src", "img/clubs.png");
  } else if (playerDeck[0].suit === 'Hearts'){
    $("#playerSuitImg").attr("src", "img/hearts.png");
  }

    if(playerDeck[0].suit === 'Spades'){
    $("#playerSuitImg2").attr("src", "img/spades.png");
  } else if (playerDeck[0].suit === 'Diamonds'){
    $("#playerSuitImg2").attr("src", "img/diamonds.png");
  } else if (playerDeck[0].suit === 'Clubs'){
    $("#playerSuitImg2").attr("src", "img/clubs.png");
  } else if (playerDeck[0].suit === 'Hearts'){
    $("#playerSuitImg2").attr("src", "img/hearts.png");
  }

  if(playerDeck[0].value === 0){
    $("#playerValImg").attr("src", "img/two.png");
  } else if (playerDeck[0].value === 1){
    $("#playerValImg").attr("src", "img/three.png");
  } else if (playerDeck[0].value === 2){
    $("#playerValImg").attr("src", "img/four.png");
  } else if (playerDeck[0].value === 3){
    $("#playerValImg").attr("src", "img/five.png");
  }else if (playerDeck[0].value === 4){
    $("#playerValImg").attr("src", "img/six.jpg");
  } else if (playerDeck[0].value === 5){
    $("#playerValImg").attr("src", "img/seven.jpg");
  } else if (playerDeck[0].value === 6){
    $("#playerValImg").attr("src", "img/eight.jpg");
  }else if (playerDeck[0].value === 7){
    $("#playerValImg").attr("src", "img/nine.png");
  } else if (playerDeck[0].value === 8){
    $("#playerValImg").attr("src", "img/ten.png");
  } else if (playerDeck[0].value === 9){
    $("#playerValImg").attr("src", "img/jack.png");
  }else if (playerDeck[0].value === 10){
    $("#playerValImg").attr("src", "img/queen.jpg");
  } else if (playerDeck[0].value === 11){
    $("#playerValImg").attr("src", "img/king.jpg");
  }else if (playerDeck[0].value === 12){
    $("#playerValImg").attr("src", "img/ace.jpg");
  }

  if(oppoDeck[0].suit === 'Spades'){
    $("#oppoSuitImg").attr("src", "img/spades.png");
  } else if (oppoDeck[0].suit === 'Diamonds'){
    $("#oppoSuitImg").attr("src", "img/diamonds.png");
  } else if (oppoDeck[0].suit === 'Clubs'){
    $("#oppoSuitImg").attr("src", "img/clubs.png");
  } else if (oppoDeck[0].suit === 'Hearts'){
    $("#oppoSuitImg").attr("src", "img/hearts.png");
  }

  if(oppoDeck[0].suit === 'Spades'){
    $("#oppoSuitImg2").attr("src", "img/spades.png");
  } else if (oppoDeck[0].suit === 'Diamonds'){
    $("#oppoSuitImg2").attr("src", "img/diamonds.png");
  } else if (oppoDeck[0].suit === 'Clubs'){
    $("#oppoSuitImg2").attr("src", "img/clubs.png");
  } else if (oppoDeck[0].suit === 'Hearts'){
    $("#oppoSuitImg2").attr("src", "img/hearts.png");
  }

    if(oppoDeck[0].value === 0){
    $("#oppoValImg").attr("src", "img/two.png");
  } else if (oppoDeck[0].value === 1){
    $("#oppoValImg").attr("src", "img/three.png");
  } else if (oppoDeck[0].value === 2){
    $("#oppoValImg").attr("src", "img/four.png");
  } else if (oppoDeck[0].value === 3){
    $("#oppoValImg").attr("src", "img/five.png");
  }else if (oppoDeck[0].value === 4){
    $("#oppoValImg").attr("src", "img/six.jpg");
  } else if (oppoDeck[0].value === 5){
    $("#oppoValImg").attr("src", "img/seven.jpg");
  } else if (oppoDeck[0].value === 6){
    $("#oppoValImg").attr("src", "img/eight.jpg");
  }else if (oppoDeck[0].value === 7){
    $("#oppoValImg").attr("src", "img/nine.png");
  } else if (oppoDeck[0].value === 8){
    $("#oppoValImg").attr("src", "img/ten.png");
  } else if (oppoDeck[0].value === 9){
    $("#oppoValImg").attr("src", "img/jack.png");
  }else if (oppoDeck[0].value === 10){
    $("#oppoValImg").attr("src", "img/queen.jpg");
  } else if (oppoDeck[0].value === 11){
    $("#oppoValImg").attr("src", "img/king.jpg");
  }else if (oppoDeck[0].value === 12){
    $("#oppoValImg").attr("src", "img/ace.jpg");
  }

    $( '#stageText' ).text( 'Player shows ' + playerDeck[0].faceValue + ' of ' + playerDeck[0].suit + ' and Opponent shows ' + oppoDeck[0].faceValue + ' of ' + oppoDeck[0].suit );


  // $( '#playerCardBox' ).text( playerDeck[0].name );
  // $( '#oppoCardBox' ).text( oppoDeck[0].name );

  if (playerDeck[0].value > oppoDeck[0].value){
    $( '#outcomeText' ).text( 'YOU WON the battle!' );
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
    $( '#outcomeText' ).text( 'YOU LOST the battle!' );
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
  warFail();
    console.log('WAR!');
    $( '#outcomeText' ).text(  'WAR!' );
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
 winTerms();

  getNames();

  $( '#playerStackSize' ).text( 'Player stack: ' + playerDeck.length + ' cards' );
  $( '#oppoStackSize' ).text( 'Computer stack: ' + oppoDeck.length + ' cards' );

  var lineStack = playerDeck.length;
  if(lineStack < 5){
    $( '#playerStackSize' ).text( 'Player stack: ' + playerDeck.length + '            ' );
    $( '#oppoStackSize' ).text( 'Computer stack: ' + oppoDeck.length );
    $( '#playerStackSize' ).append('<li>__</li>');
  }else if(lineStack < 10){
    $( '#playerStackSize' ).text( 'Player stack: ' + playerDeck.length + '            ' );
    $( '#oppoStackSize' ).text( 'Computer stack: ' + oppoDeck.length );
    $( '#playerStackSize' ).append('<li>_____</li>');
  }else if(lineStack < 20){
    $( '#playerStackSize' ).text( 'Player stack: ' + playerDeck.length + '            ' );
    $( '#oppoStackSize' ).text( 'Computer stack: ' + oppoDeck.length );
    $( '#playerStackSize' ).append('<li>__________</li>');
  }else if(lineStack < 30){
    $( '#playerStackSize' ).text( 'Player stack: ' + playerDeck.length + '            ' );
    $( '#oppoStackSize' ).text( 'Computer stack: ' + oppoDeck.length );
    $( '#playerStackSize' ).append('<li>__________ _____</li>');
  }else if(lineStack < 40){
    $( '#playerStackSize' ).text( 'Player stack: ' + playerDeck.length + '            ' );
    $( '#oppoStackSize' ).text( 'Computer stack: ' + oppoDeck.length );
    $( '#playerStackSize' ).append('<li>__________ __________</li>');
  }else if(lineStack < 50){
    $( '#playerStackSize' ).text( 'Player stack: ' + playerDeck.length );
    $( '#oppoStackSize' ).text( 'Computer stack: ' + oppoDeck.length );
    $( '#playerStackSize' ).append('<li>__________ __________ _____<li>');
  }else if(lineStack < 55){
    $( '#playerStackSize' ).text( 'Player stack: ' + playerDeck.length );
    $( '#oppoStackSize' ).text( 'Computer stack: ' + oppoDeck.length );
    $( '#playerStackSize' ).append('<li>__________ __________ __________<li>');
  }

  $( '#stackList' ).text( playerDeck[0].display );
  for (var i = 1; i < playerDeck.length; i++){
    $( '#stackList' ).append( ', ' + playerDeck[i].display );

  $('#playerPointDisplay').text(playerPoints + ' points');
  }

$('#stackList').each(function () {
  $(this).html($(this).html().replace(/(\♥)/g, '<span style="color: #ff0000;">$1</span>'));
});
$('#stackList').each(function () {
  $(this).html($(this).html().replace(/(\♦)/g, '<span style="color: #ff0000;">$1</span>'));
});

$('#playerWagerList').each(function () {
    $(this).html($(this).html().replace(/(\♥)/g, '<span style="color: #ff0000;">$1</span>'));
});
$('#oppoWagerList').each(function () {
  $(this).html($(this).html().replace(/(\♦)/g, '<span style="color: #ff0000;">$1</span>'));
});
};

//Play button on screen
$('#playBattle').on('click', function(){
  playHand();
});

$('#playWar').on('click', function(){
  playWar();
});

//GUI
$( '#playerStackSize' ).text( 'Player stack: ' + playerDeck.length );
$( '#oppoStackSize' ).text( 'Computer stack: ' + oppoDeck.length );

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

  $('#stackList').each(function () {
    $(this).html($(this).html().replace(/(\♥)/g, '<span style="color: #ff0000;">$1</span>'));
  });
  $('#stackList').each(function () {
    $(this).html($(this).html().replace(/(\♦)/g, '<span style="color: #ff0000;">$1</span>'));
  });

  $('#playerWagerList').each(function () {
      $(this).html($(this).html().replace(/(\♥)/g, '<span style="color: #ff0000;">$1</span>'));
  });
  $('#oppoWagerList').each(function () {
    $(this).html($(this).html().replace(/(\♦)/g, '<span style="color: #ff0000;">$1</span>'));
  });

hidden = true;
$('#storeThumbId').on('click', function(){
  if(hidden === false) {
    $('#storeMenu').slideUp('slow');
    hidden = true;
  } else {
    $('#storeMenu').slideDown('slow');
    hidden = false;
  }

winTerms();
});

storeFxn();
usePUp1();
usePUp2();
usePUp3();



