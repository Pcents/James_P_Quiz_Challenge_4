// my start button is connected to my html
var startButton = document.querySelector("#start-button");
    // console.log(startButton);
var questionContainerEl = document.querySelector("#question-container")
var questionDisplay = document.querySelector("#question-display");
    // console.log(questionDisplay);
var questionResults = document.getElementById("#question-results");
var questionEl = document.querySelector('#question-display')

var answerButtonsEl = document.querySelector('.answer-buttons')

let questionIndex = 0;

let questionOrder= ""

//these are our indexes

var questions = 
[{
    question:"this is the question/object",
    choiceskey: ["a", "b", "c", "d"],
    correctkey: "b",

},{
    question:"this is the question/object",
    choiceskey: ["a", "b", "c", "d"],
    correctkey: "c",
     
},{
    question:"this is the question/object",
    choiceskey: ["a", "b", "c", "d"],
    correctkey: "d",
     
},
{
    question:"this is the question/object",
    choiceskey: ["a", "b", "c", "d"],
    correctkey: "b",
     
}
]


startButton.addEventListener("click", startGame)
    
//  onclick="document.write(displayQuestion)"
//  console.log(displayQuestion())
//  questionDisplay.textContent=displayQuestion()

function startGame(){
    console.log('start')
    startButton.classList.add('hide')
    questionContainerEl.classList.remove('hide')
    displayQuestion()
    // questionOrder = questions.sort(() => Math.floor(Math.random * 4))
    // questionIndex = 0

}
function selectAnswer(){
console.log(this)
}

// on click display array 0
function displayQuestion() {
//    should
console.log(questions[questionIndex].question)

   questionEl.textContent=questions[questionIndex].question;
//    document.body.append(questionEl);
// empty container before creating new ones with for loop
    answerButtonsEl.innerHTML="";
    for (var i = 0; i < questions[questionIndex].choiceskey.length; i++){
        var button = document.createElement("button");
        button.textContent=questions[questionIndex].choiceskey[i];
        button.value=questions[questionIndex].choiceskey[i];
        button.onclick=selectAnswer;
        answerButtonsEl.append(button)
    }
    


}
function showQuestion(question) {
    
}
