var username = prompt("What is the capital of North Korea?");
alert("Mission accomplished!! The world is safe for today!!");

var sampleNumber = "North Korea";
console.log("Ask the user for the country responsible for hack");
var guess = prompt("Which country has insterted a dangerous code into this computer?")

  console.log("compare the guess to ours");
  var guessIsCorrect = (sampleNumber == guess);
  var username = prompt("What is your name?");
  var message = "hello " +username+"! You picked " +guess+".";

  console.log("build a message to show the user.");
  message += guessIsCorrect ? "You guessed the right country!" : "You did not guess the country.";
  alert(message);



  var sampleNumber = "Sony";
  var sampleNumber1 = "Sony Pictures";
  console.log("Ask the user for the correct studio hacked");
  var guess = prompt("Which studio has lost all access to their personel file?");

    console.log("compare the guess to ours");
    var guessIsCorrect = (sampleNumber == guess || sampleNumber1 == guess);
    var message = "You answered "+guess+".";

    console.log("build a message to show the user.");
    message += guessIsCorrect ? "You guessed the correct studio!" : "You did not guess the studio.";
    alert(message);


    var sampleNumber = "President";
    console.log("Ask the user for the president");
    var guess = prompt("Who has lost access to Xbox live?");

      console.log("compare the guess to ours");
      var guessIsCorrect = (sampleNumber == guess || "the president" == guess || "The President" == guess);
      var message =  "You answered "+guess+".";

      console.log("build a message to show the user.");
      message += guessIsCorrect ? "You guessed the correct person!" : "You did not guess the correct person.";
      alert(message);

      var sampleNumber= 7;
      console.log("ask user to guess the number");
      var guess = parseInt(prompt("Please guess a number between 1 and 10:"));
      console.log("Compare the guessed number to ours");
      var guessIsCorrect = (sampleNumber == guess);
      if (guessIsCorrect){
        alert("Psychic!! You guessed the number .");
      }
      else if (guess < sampleNumber){
        alert("Your guess is too low ");
      } else if (guess > sampleNumber){
        alert("Your guess is too high");
      }

      console.log("Give the user message if the are right or wrong")
      //message += guessIsCorrect ? "Psychic!! You guessed the number ." : " Bummer!! You did not guess the number .";
      //alert(message);

      console.log("Give user how many guesses they made before getting the correct answer");

  //  if (!guessIsCorrect & ((guess - sampleNumber )))
