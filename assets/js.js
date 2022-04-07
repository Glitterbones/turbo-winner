var questionCard = document.querySelector("#question-card")
var resultsCard = document.querySelector("#results-card")
var startButton = document.querySelector(".start-btn");
var nextButton = document.querySelector(".next-btn");
var startCard = document.querySelector("#start-card");
var optButton = document.querySelectorAll(".btn")
var question = document.querySelector("#question")
var choices = document.querySelector("#choices");
var option1 = document.querySelector("#Answer A");
var option2 = document.querySelector("#Answer B");
var option3 = document.querySelector("#Answer C");
var option4 = document.querySelector("#Answer D");
var currentTime = document.querySelector("#current-time");
var timeCount = document.querySelector(".timer");
var qindex = 0
var points = 0
var timer = 30





var questions = [
{
        title: "Where was Buddah born?",
        choiceA: ["Japan", "Nepal", "Thailand ", "india"],
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
  

startButton.addEventListener("click", startQuiz) 

function startQuiz() {
  nextQuestion()
  startCounter(30);
}

function nextQuestion() {
  question.textContent = questions[qindex].title
  AnswerA.textContent = questions[qindex].choiceA[0]
  AnswerB.textContent = questions[qindex].choiceA[1]
  AnswerC.textContent = questions[qindex].choiceA[2]
  AnswerD.textContent = questions[qindex].choiceA[3]

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
          alert("Time's up!")
          location.href = "./highscore.html"
      }
  }, 1000)
}