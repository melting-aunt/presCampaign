function finishFunction() {
    alert("Your experience interacting with my quiz has, sadly for you, come to an end.")
}

function checkAnswers() {
    var score = 0;
    // assign the quiz elements to the quiz variable
    quiz = document.forms.Quiz.elements;
    // this accesses the DOM - a version of HTML that javascript can understand. We are calling the form named quiz and all of its elements. this assigns the answers to the questions
    answer1 = quiz.prosperity.value;
    // check the answer to the first question
    if (answer1 == "3") {
        //add 1 to the score
        score = score + 1;
    }
    answer2 = quiz.approval.value;
    if (answer2 == "100") {
        score = score + 1;
    }
    answer3 = quiz.enemies.value;
    if (answer3 == "False") {
        score = score + 1;
    }

    if (score == 3){
        alert ("You scored " + score + ". Acceptable, I suppose. You're on thin fucking ice though")
    }
    else {
        alert ("Your score is " + score + ". Do you really think that's good enough? Proud of it are you? Yeah? Pathetic. Embarrassing")
    }
}