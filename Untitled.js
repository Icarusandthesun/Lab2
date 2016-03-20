function askQuestion(question, answer){
  var guess = prompt(question);

   if (guess.toLowerCase() == answer.toLowerCase()){
    alert("Congratulations, you are correct!");
  } else {
    alert("Sorry, wrong answer.");
    }
    document.getElementById("guess").innerHTML += "<br>"+question+"-";
    document.getElementById("guess").innerHTML+="<span class='answer'>"+answer+"</span>";      
};
askQuestion("What is the capital of North Korea?","Pyongyang");
askQuestion("Which country has insterted a dangerous code into this computer?","North Korea");
askQuestion("Which studio has lost all access to their personel file?","Sony");
askQuestion("Who has lost access to Xbox live?","The President");
