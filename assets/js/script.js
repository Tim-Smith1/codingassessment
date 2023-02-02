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
var timer = 333; 
var questionEl = document.querySelector("#questionEl");
var questionCounter = 0;
var showScore = document.querySelector("#score")

var openingPage = document.querySelector("#openingPage")
var questionsPage = document.querySelector("#questionPage")
var lastPage = document.querySelector("#lastPage")

var questions = [
    {
      question: "Commmonly used data type DO NOT include?",
      choices: ['strings', 'alerts', 'boolean', 'numbers'],
      correctAnswer: 'alerts',
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
    { question: "What does JS stand for?",
      choices: ['Junky Sand', 'Jumping Shells', 'Junk Sleep', 'JavaScript'],
      correctAnswer: 'JavaScript',  
    },
  ];

///diplay block/show
 questionPage.style.display = "none"
openingPage.style.display = "block"
 lastPage.style.display = "none"


startBtn.addEventListener("click", function () {
  questionPage.style.display = "block"
  openingPage.style.display = "none"
  document.querySelector('#questions').textContent=questions[0].question;
  
  
   //lastPage.style.display = "none"
   showQuestions();

  document.querySelector('#btns').textContent; //=choices
  var gameTimer = setInterval(function () {
        timer--;
        timerSpan.textContent = timer;
        if (timer < 0) {
            clearInterval(gameTimer)
        }
    }, 1000);

    //showQuestions()
    
    //console.log(showQuestions);
    
    //endgame not working yet.
    // function endGame (){
    //   if (timer < 0 || questionCounter > 4) {
    //       console.log('endgame');
    //   }
    // }
})

function showQuestions() {
questionEl.textContent=questions[questionCounter].question;
btn1.textContent=questions[questionCounter].choices[0];
btn2.textContent=questions[questionCounter].choices[1];
btn3.textContent=questions[questionCounter].choices[2];
btn4.textContent=questions[questionCounter].choices[3];
}


//Evaluating write and wrong answers.
function evalquestion(answer) {
  //console.log(answer)
  if (answer === questions[questionCounter].correctAnswer) {
    console.log('correct');
  } else {
//Decrement timer if wrong    
    timer -= 30;
    console.log('wrong');
  }
//advance to next question
  questionCounter++
	 if (questionCounter<questions.length){
    //if there is nomore time or questions endgame
    //endGame();
	 }

  //showQuestions();
}

document.querySelector('#btns').addEventListener('click', function (e) {
  var btnValue = e.target.textContent
  if (e.target.matches('button')){
    evalquestion(btnValue)
    //console.log(e.target.textContent);
  }
  //advance to next question
//showQuestions();
  // if (evalValue === 'wrong') {
  //   questionCounter -= 30;
  // }
})

function endGame (){
  clearInterval(timer);
  // openingPage.style.display = "none"
  // questionPage.style.display = "none"
   lastPage.style.display = "block"

  // if (timer < 0 || questionCounter > 3) {
  //     // clearInterval (gameTimer);
  //   console.log('endgame');
  // }
}

// function score () {
//   var Score  
// }

///choice1.addEventListener("click", showQuestions);


// ideally hide and unhide question cycyling through

//////junkyard///////
// Array.from(questions).forEach(function(questions) {
//   element.addEventListener('click', myFunction);
// });
//document.querySelector('#questions')
  //event.preventDefault();
  //console.log(event)
  //questionCounter++


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