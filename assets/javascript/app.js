$(document).ready(function(){
    $("#startButton").click(function(){
        $("#option1").append("<button><span>1</span></button>");
        $("#option2").append("<button><span>2</span></button>");
        $("#option3").append("<button><span>3</span></button>");
        $("#option4").append("<button><span>4</span></button>");
        $("#startButton").hide();
    });
});

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
        alert("Ohhhhh shit");
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
//countdown();
// after startQuiz is pressed:
    // load new question in div
    // load options 1-4 in buttons
    // begin timer

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
