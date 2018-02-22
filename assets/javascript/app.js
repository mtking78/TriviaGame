$(document).ready(function(){
    $(".game-screen").hide();

    $("#startButton").click(function(){
        // hide the start button
        $(".loading-screen").hide();
        // display the question, choices, and timer
        $(".game-screen").show();
        loadQuestion();
        countDown();
    });


    // Countdown function for each question
    var time = 5;
    var intervalId;

    function countDown() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    }
    function decrement() {
        time--;
        $("#timer").html("<h2>" + time + "</h2>");
        if (time === 0) {
            alert("Time's up");
            timesUp();
            // show correct answer
            // update score
            //check if end of quiz
            // display next question button or final score
        }
    }

    function timesUp() {
        clearInterval(intervalId);
    }

    // after startQuiz is pressed:
        // load new question in div
        // load options 1-4 in buttons
        // begin timer

    var questions = [
        {
            question: "question goes here",
            choices: ["choice # 0", "choice # 1", "choice # 2", "choice # 3"],
            answer: 0
        },
        {
            question: "question goes here",
            choices: ["choice # 0", "choice # 1", "choice # 2", "choice # 3"],
            answer: 0
        },
        {
            question: "question goes here",
            choices: ["choice # 0", "choice # 1", "choice # 2", "choice # 3"],
            answer: 0
        },
        {
            question: "question goes here",
            choices: ["choice # 0", "choice # 1", "choice # 2", "choice # 3"],
            answer: 0
        },
        {
            question: "question goes here",
            choices: ["choice # 0", "choice # 1", "choice # 2", "choice # 3"],
            answer: 0
        }
    ];

    function loadQuestion() {

        for (var i = 0; i < questions.length; i++) {

                var currentQuestion = questions[i].question;
                $("#question").html(currentQuestion);

                var choices = questions[i].choices;
                $("#choice1").html(choices[0]);
                $("#choice2").html(choices[1]);
                $("#choice3").html(choices[2]);
                $("#choice4").html(choices[3]);
        }
    }

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
