$(document).ready(function(){
    $(".game-screen").hide();

    $("#startButton").click(function(){
        // hide the start button
        $(".loading-screen").hide();
        // display the question, choices, and timer
        $(".game-screen").show();
        loadQuestion();
        updateScore();
        countDown();
    });


    // Countdown function for each question
    var time = 15;
    var intervalId;

    function countDown() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    }
    function decrement() {
        time--;
        $("#timer").html("<h2>" + time + "</h2>");
        if (time === 0) {
            timesUp();
            // show correct answer
            // update score
            //check if end of quiz
            // display next question button or final score
        }
    }

    function timesUp() {
        $("#timer").html("<h2>" + "Time's Up!" + "</h2>");
        //alert("The correct answer was " + questions[i].answer);
        clearInterval(intervalId);
        questionIndex++;
        loadQuestion();
        time = 15;
        countDown();
    }

    // after startQuiz is pressed:
        // load new question in div
        // load options 1-4 in buttons
        // begin timer

    var questions = {
             q1: ["What color is an orange?", ["orange", "pink", "blue", "white"], "0"],
             q2: ["Where does food go?", ["on your clothes", "in the trash", "in your mouth", "everywhere"], "3"],
             q3: ["Who do you think you are?", ["a mistake", "who my mom thinks I am", "Chewbacca", "an impotent wizard"], "1"],
             q4: ["Why do you have a tongue?", ["to be sassy", "to keep my mouth shut", "for my teeth to bite", "dirty reasons"], "0"],
             q5: ["When will this quiz be over?", ["never", "just around the corner", "it is", "what's the rush?"], "1"]
        };

    var score = 0;
    var questionIndex = 0;
    var questionsArray = [questions.q1, questions.q2, questions.q3, questions.q4, questions.q5];

    function loadQuestion() {

        // for (var i = 0; i < questions.length; i++) {

        //         var currentQuestion = questions[i].question;
        //         $("#question").html(currentQuestion);

        //         var choices = questions[i].choices;
        //         $("#choice1").html(choices[0]);
        //         $("#choice2").html(choices[1]);
        //         $("#choice3").html(choices[2]);
        //         $("#choice4").html(choices[3]);
        // }

        // using class example from true/false game
        if (questionIndex <= (questionsArray.length - 1)) {
            $("#question").html(questionsArray[questionIndex][0]);
            $("#choice1").html(questionsArray[questionIndex][1][0]);
            $("#choice2").html(questionsArray[questionIndex][1][1]);
            $("#choice3").html(questionsArray[questionIndex][1][2]);
            $("#choice4").html(questionsArray[questionIndex][1][3]);
        } else {
            $("#question").html("Game Over");
            $("#score").html("Final score: " + score + " out of " + questionsArray.length);
            // stop the clock?!?
        }
    }

    function updateScore () {
        $("#score").html(score + " of " + questionsArray.length);
    }

    // function checkAnswer() {
    //     if (data-choice === questionsArray[questionIndex][2]) {
    //         alert("works");
    //         score++
    //         questionIndex++
    //     } else {
    //         // alert incorrect answer
    //         // show correct answer
    //         questionIndex++;
    //     }
    // }
    $("button").click(function() {
        // definitely didn't make this line by myself
        var data = $.parseJSON($(this).attr('data-choice'));
        if (data == questionsArray[questionIndex][2]) {
            alert("yes");
            score++;
            updateScore();
        } else {
            alert("no");
        }
        questionIndex++;
        loadQuestion();
        time = 15;
        countDown();
      });
    // checkAnswer();
});
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
