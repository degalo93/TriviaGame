//$(document).ready(function()) {

$("#start").on("click", startgame);


var Tgame = {
    correctAnswers = 0,
    incorrectAnswers = 0,
    unanswered = 0,
    time = 30,
    timerClock = false,
    clock = " ",


    questions = {
        question1: "What is The powerhouse of the cell?",
        question2: "What is the atomic symbol of silver",
        question3: "What does ATP stand for",
        question4: " What is the first element in the periodic table ",
    },
    options = {
        question1: ["ribosome", "DNA", "mitochondria", "hydrogen"],
        question2: ["aa", "ab", "ga", 'ag'],
        question3: ["adenosine triphosphate", "Attention triad power", "atacking three pandas", "Association of Tennis Professional"],
        question4: ["1", " H", "Hi", "He"]

    },
    answers = {
        question1: "mitochondria ",
        question2: "ag",
        question3: "adenosine triphosphate",
        question4: "H",
    },
    startgame: function() {
        Tgame.correctAnswers = 0;
        Tgame.incorrectAnswers = 0;
        Tgame.unanswered = 0;
        clearInterval(clock);
    },
}