//Pseudo code

//start button /
//timer /
// 5 questions with multiple choice awnsers
        //advance to next question
//test if awnser is corect or not
   // if yes adavnce to next question
   // if not reduce time available
// end game when timer is done or all questions are awnsered correctly
// save score 

var startBtn = document.querySelector("#start");
var timerSpan = document.querySelector("#timer");
var timer = 3; 
var nextBtn = "";
var questions = [
    {
      question: "Commmonly used data type DO NOT include?",
      answers: {
        a: 'strings',
        b: 'alerts',
        c: 'boolean',
        d: 'numbers'
      },
      correctAnswer: 'b'
    },
    {
      question: "The condition in a if/else statement is enclosed within _?",
      answers: {
        a: 'quotes',
        b: 'parentheses',
        c: 'curly brackets',
        d: 'underscores'
      },
      correctAnswer: 'c'
    }
  ];

startBtn.addEventListener("click", function () {
    var gameTimer = setInterval(function () {
        timer--;
        timerSpan.textContent = timer;
        if (timer <= 0) {
            clearInterval(gameTimer)
        }

    }, 1000)
})

