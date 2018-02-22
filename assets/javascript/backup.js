// $(document).ready(function(){
//     $(".game-screen").hide();
//     $("#startButton").click(function(){
//         // $("#option1").append("<button><span>1</span></button>");
//         // $("#option2").append("<button><span>2</span></button>");
//         // $("#option3").append("<button><span>3</span></button>");
//         // $("#option4").append("<button><span>4</span></button>");
//         $(".loading-screen").hide();
//         $(".game-screen").show();
//     });
// });

//Countdown function for each question
// var time = 5;
// var intervalId;

// function countDown() {
//     clearInterval(intervalId);
//     intervalId = setInterval(decrement, 1000);
// }
// function decrement() {
//     time--;
//     $("#timer").html("<h2>" + time + "</h2>");
//     if (time === 0) {
//         alert("Time's up");
//         timesUp();
//         // show correct answer
//         // update score
//         //check if end of quiz
//         // display next question button or final score
//     }
// }
// function timesUp() {
//     clearInterval(intervalId);
// }

// after startQuiz is pressed:
    // load new question in div
    // load options 1-4 in buttons
    // begin timer
    var questions = {
        q1: ["question goes here", ["choice # 1", "choice # 2", "choice # 3", "choice # 4"], "choice # 1"],
        q2: ["question goes here", ["choice # 1", "choice # 2", "choice # 3", "choice # 4"], "choice # 1"],
        q3: ["question goes here", ["choice # 1", "choice # 2", "choice # 3", "choice # 4"], "choice # 1"],
        q4: ["question goes here", ["choice # 1", "choice # 2", "choice # 3", "choice # 4"], "choice # 1"],
        q5: ["question goes here", ["choice # 1", "choice # 2", "choice # 3", "choice # 4"], "choice # 1"]
    };

    var questionIndex = 0;
    var score = 0;
    var questionsArray = [questions.q1, questions.q2, questions.q3, questions.q4, questions.q5];

    function loadQuestion() {
        if (questionIndex <= (questionsArray.length - 1)) {
            $("#question").html(questionsArray[questionIndex][0]);
        } else {
            document.querySelector("#question").innerHTML = "Game Over!";
            document.querySelector("#progress").innerHTML = "Final Score: " + score + " out of " + questionsArray.length;
        }
    }

    function updateScore() {
        document.querySelector("#progress").innerHTML = "Score: " + score;
    }

    loadQuestion();
    updateScore();

    document.onkeyup = function(event) {
        if (questionIndex === questionsArray.length) {
            return;
        }
    }

    loadQuestion();
    // for (i = 0; i < questions.length, i++) {
    //     var question = questions[i];
    //     $("#question").html(question);
    //     var options = questions[i].choices;
    //     $("#choice").html(options);
    // }
    // when option is chosen
        // check option
            // verify correct answer or display correct answer
            // update score
            // check if end of quiz
            // display next question button or score

    // when time runs out
        // display correct answer
        // update score
        // check if end of quiz
        // display next question button orscore

    // next question function (same as line 11?)
        // load question
        // load options
        // reset timer
