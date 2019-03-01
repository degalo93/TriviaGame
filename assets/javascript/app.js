//$(document).ready(function()) {

$("#start").on("click", startgame);



var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;
var time = 30;
var timerClock = false;
var clock = " ";

var questions = {
    question1: "hello",
    question2: "alright",
    question3: "ok",
    question4: "not another q",
};
var options = {
    question1: "hello",
    question2: "alright",
    question3: "ok",
    question4: "cool"

};
var answers = {
    question1: "hello",
    question2: "alright",
    question3: "ok",
    question4: "cool"
};