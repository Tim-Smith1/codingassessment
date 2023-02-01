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
var timer = 883; 
var questionEl = document.querySelector("#questionEl");
var questionCounter = 0;
var questions = [
    {
      question: "Commmonly used data type DO NOT include?",
      choices: ['strings', 'alerts', 'boolean', 'numbers'],
      correctAnswer: '1',
    },
    {
      question: "The condition in a if/else statement is enclosed within _?",
      choices: ['quotes', 'parentheses', 'curly brackets', 'underscores'],
      correctAnswer: 'curly brackets',
    }, 
    { question: "What does CSS stand for?",
      choices: ['Calm Sleeping Cats', 'Crazy Sea Shells', 'Corn Stalk Strands', 'Cascading Style Sheets'],
      correctAnswer: 'Cascading Style Sheets',  
    },
    { question: "What does CSfghbfghjS stand for?",
      choices: ['Calm Sleeping Cats', 'Crazy Sea Shells', 'Corn Stalk Strands', 'Cascading Style Sheets'],
      correctAnswer: '3',  
    }
  ];

startBtn.addEventListener("click", function () {
  document.querySelector('#questions').textContent=questions[0].question;
  
  //document.querySelector('.btns').textContent=choices;
  var gameTimer = setInterval(function () {
        timer--;
        timerSpan.textContent = timer;
        if (timer <= 0) {
            clearInterval(gameTimer)
        }
    }, 1000);
    showQuestions();
})

function showQuestions() {
questionEl.textContent=questions[questionCounter].question;
btn1.textContent=questions[questionCounter].choices[0];
btn2.textContent=questions[questionCounter].choices[1];
btn3.textContent=questions[questionCounter].choices[2];
btn4.textContent=questions[questionCounter].choices[3];
  //document.querySelector('.questions')
  //event.preventDefault();
  //console.log(event)
}

questionCounter++
if (questionCounter==questions.length){
  showResults()
}

///choice1.addEventListener("click", showQuestions);


// ideally hide and unhide question cycyling through

//////junkyard///////
// Array.from(questions).forEach(function(questions) {
//   element.addEventListener('click', myFunction);
// });



////////////////////////

//Psuedo code porvided bt Sam Adams TA///
//click button to start     /
    //event listener       /
    //a timer will start  /
//user is presented with a question
//user selects one multiple choice question
    //IF answer is wrong, decrement the timer
        //Display that the user choice was incorrect, then move to next question
    //IF answer is correct
        //Display that the user choice was correct(textContent)
        //Increment the score++
    //FOR loop to loop through the questions array
//When timer hits 0 OR no more questions in array
    //THEN clear interval
    //THEN allow user to input initials
    //THEN link to highscores page(two separate HTML pages, index.html and hiscores.html)
    //Save data to local storage(setItem, getItem)

//startQuiz() function changes content
    //hide the start screen
    //unhide the questions section
    //start the timer
    //show the starting time
    //call getQuestion()
//getQuestion() function get current question object from questions array
    //change content of the page
    //getElementbyId, change textContent
    //loop over choices create a button for each choice
    //after creating all the elements we appendChild
//questionClick() function that checks choice user clicked
    //first we check that the event.target matches an answer choice
    //check event.target.value matches the questions[currentIndex].answer

  //   var questions = [
  //     {
  //         question: "What does HTML stand for?",
  //         choices: ["Hyper text Martian language", "Hyper text markup language"],
  //         answer: "Hyper text markup language",
  //     },
  //     {
  //         question: "What does CSS stand for?",
  //         choices: ["Cats stay sleeping", "Cascading style sheets"],
  //         answer: "Cascading style sheets",
  //     }
  // ]