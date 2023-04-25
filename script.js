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
    answer4 = quiz.qualities.value;
    if (answer4 == "Shit for brains") {
        score = score + 1;
    }
    answer5 = quiz.easy.value;
    if (answer5 == "Sunday morning") {
        score = score + 1;
    }
    answer6 = quiz.debates.value;
    if (answer6 == "1") {
        score = score + 1;
    }
    answer7 = quiz.wealth.value;
    if (answer7 == "All of the above") {
        score = score + 1;
    }
    answer8 = quiz.belize.value;
    if (answer8 == "Belmopan") {
        score = score + 1;
    }
    answer9 = quiz.election.value;
    if (answer9 == "No-one - revolution laughs in the face of your decadent, imperialist Western 'democratic' ways") {
        score = score + 1;
    }

    if (score == 9){
        alert ("You scored " + score + ". Acceptable, I suppose. You're on thin ice though");
    }
    else if (score == 6){
        alert ("You scored " + score + "/9, which isn't very good, but I am morally obliged to say 'Nice'");
    }
    else {
        alert ("Your score is " + score + ". Do you really think that's good enough? Proud of it are you? Yeah? Pathetic. Embarrassing");
    }
}