$(document).ready(function(){
    // Hide the questions/answers until "Start Game" is pressed.
    $(".game-screen").hide();
    $("body").addClass('bg1');
    // Load/Start quiz on button press
    $("#startButton").click(function(){
        // hide the "Start Game" button
        $(".loading-screen").hide();
        $("body").removeClass('bg1').addClass('bg2');
        // Display the question, choices, and timer
        $(".game-screen").show();
        loadQuestion();
        updateScore();
        countDown();
        gameOver = false;
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
        }
    }
    function timesUp() {
        $("#timer").html("<h2>" + "Time's Up!" + "</h2>");
        //$("#message").html("The correct answer was " + correctAnswer);
        clearInterval(intervalId);
        questionIndex++;
        loadQuestion();
        time = 15;
        countDown();
    }

    var questions = {
             q1: ["How many teams are in RBI Baseball?", ["10", "26", "8", "30"], "0"],
             q2: ["Where should you aim your pitches?", ["down the middle", "in the dirt", "outside", "at the batter's head!"], "3"],
             q3: ["Who is the most worthless player?", ["Rich Gedman", "Rafael Santana", "Tommy Herr", "Tom Brookens"], "1"],
             q4: ["Why should you play this game?", ["homerun derby", "it's the American pasttime", "to procrastinate", "you shouldn't"], "0"],
             q5: ["When should you take out Willie Randolph?", ["are you nuts?", "oh, give him one at-bat", "A.S.A.P.", "after he makes a fool of himself"], "1"],
             q6: ["What does every batter do after an out?", ["cry", "disappear", "walk off", "nothing"], "0"],
             q7: ["What team does Spilman play for?", ["the Mets", "the Red Sox", "the Giants", "the Twins"], "2"],
             q8: ["Can pitchers hit homeruns?", ["it's a mystery", "only in-the-park", "nope", "yes, through the wall only"], "3"],
             q9: ["What is Jones' first name?", ["Ruppert", "Doyle", "Mookie", "Wally"], "0"],
             q10: ["What makes players so adorable in this game?", ["the crying", "they're plump", "they only run when they cry", "they're hideous"], "1"]
        };

    var score = 0;
    var questionIndex = 0;
    var questionsArray = [questions.q1, questions.q2, questions.q3, questions.q4, questions.q5, questions.q6, questions.q7, questions.q8, questions.q9, questions.q10];

    function loadQuestion() {

        // using class example from true/false game
        if (questionIndex <= (questionsArray.length - 1)) {
            $("#question").html("<h2>" + questionsArray[questionIndex][0] + "</h2>");
            $("#choice1").html(questionsArray[questionIndex][1][0]);
            $("#choice2").html(questionsArray[questionIndex][1][1]);
            $("#choice3").html(questionsArray[questionIndex][1][2]);
            $("#choice4").html(questionsArray[questionIndex][1][3]);
        } else {
            $("#question").html("Game Over");
            $("#score").html("<h2>" + "Final score: " + score + " out of " + questionsArray.length + "</h2>");
            $("#timer").html("<h2>" + "Game Over" + "</h2>");
            $("#timer").hide();
        }
    }

    function updateScore () {
        $("#score").html("<h2>" + score + " of " + questionsArray.length + "</h2>");
    }

    $("button").click(function() {
        // definitely didn't make this line by myself
        var data = $.parseJSON($(this).attr('data-choice'));
        if (data == questionsArray[questionIndex][2]) {
            alert("Correct!");
            //$("#message").html("Correct!");
            // verify EXACT correct answer;
            score++;
            updateScore();
        } else {
            alert("Incorrect!");
            //$("#message").html("Incorrect!");
            // show EXACT correct answer
        }
        // Move on to next question with reset timer
        questionIndex++;
        // setTimeout(loadQuestion, 3000);
        loadQuestion();
        time = 15;
        setTimeout(countDown, 3000);
        //countDown();
      });
});