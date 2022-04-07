var startButton = document.querySelector(".start-btn");
var nextButton = document.querySelector(".next-btn");
var startCard = document.querySelector("#start-card");
var questionCard = document.querySelector("#question-card")
var resultsCard = document.querySelector("#results-card")
var optButton = document.querySelectorAll(".btn")
var question = document.querySelector("#question")
var choices = document.querySelector("#choices");
var option1 = document.querySelector("#AnswerA");
var option2 = document.querySelector("#AnswerB");
var option3 = document.querySelector("#AnswerC");
var option4 = document.querySelector("#AnswerD");
var currentTime = document.querySelector("#current-time");
var timeCount = document.querySelector(".timer");
var saveScore = document.querySelector("#save-btn");
var points = 0
var qindex = 0
var timer = 60


var questions = [
{
        title: "Where was Buddah born?",
        choiceA: ["Japan", "Nepal", "Thailand ", "india", ],
        answer: "Nepal"
    },

    {
      title: "What was Buddah Born as?",
      choiceA: ["An Orphan", "A Monk", "Priest", "Prince"],
      answer: "Prince"
  },
{
  title: "What is the holy book of buddah?",
  choiceA: ["His Diary", "50 shades of grey", "The Quran", "There is not one"],
  answer: "There is not one"

},
      
{
  title: "What was the name of Buddahs child?",
  choiceA: ["He did not have any", "Maya", "Rahula", "Nanda"],
  answer: "Rahula"

},
]
  

// Start quiz
startButton.addEventListener("click", startQuiz)


function startQuiz() {
    startCard.style.display = "none"
    questionCard.style.display = "block"
    nextQuestion()
    startCounter(60);
}


function nextQuestion() {
    question.textContent = questions[qindex].title
    option1.textContent = questions[qindex].choiceA[0]
    option2.textContent = questions[qindex].choiceA[1]
    option3.textContent = questions[qindex].choiceA[2]
    option4.textContent = questions[qindex].choiceA[3]

}

console.log(optButton)
optButton.forEach(button => {
    button.addEventListener("click", function (event) {
        console.log(this.textContent)
        if (this.textContent === questions[qindex].answer) {
            console.log(true)
            points++
            console.log(points)
            qindex++
        }

        nextQuestion()
    })
})


function startCounter(seconds) {
    let timeCount = seconds;

    const timer = setInterval(() => {
        console.log(timeCount);
        timeCount--;
        currentTime.textContent = "Time:" + timeCount;
        if (timeCount === 0) {
            clearInterval(timer);
            alert("END!")
            location.href = "./highscore.html"
        }
    }, 1000)
}






