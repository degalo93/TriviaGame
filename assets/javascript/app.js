$(document).ready(function() {
    var opts = [{
            q: "Beryllium has an atomic number of what ? ",
            opt: ["4", "18", "6", "88"],
            a: 3,

        },
        {
            q: "What is the chemical formula of alcohol that is consumed by people?",
            opt: ["C2H5OH", "OH", "OUCHMYHEAD", "OHNO"],
            a: 0,

        },
        {
            q: "What does ATP stand for ",
            opt: ["Association of tennis professionals", "Art to paint", "advance technology program", "adenosine triphosphate"],
            a: 3,

        },
        {
            q: " Analysis of DNA sequences suggests that eukaryotic mitochondrial genomes primarily originated from?",
            opt: ["fungi", "protozoa", "algae", "bacteria"],
            a: 3,

        },
        {
            q: "Heres a free question! The answer is the last one",
            opt: ["1", "8", "what", "I am the right answer "],
            a: 3,

        }
    ];

    var amountCorrect = 0;
    var amountWrong = 0;
    var unanswer = 0;
    var timer = 30;
    var intervalId;
    var userGuess = "";
    var running = false;
    var qCount = opts.length;
    var choose;
    var index;
    var newArray = [];
    var holder = [];



    $("#reset").hide();

    $("#start").on("click", function() {
        $("#start").hide();
        displayq();
        runTimer();
        for (var i = 0; i < opts.length; i++) {
            holder.push(opts[i]);
        }
    })

    function runTimer() {
        if (!running) {
            intervalId = setInterval(decrement, 1000);
            running = true;
        }
    }

    function decrement() {
        $("#timeleft").html("<h3>Time remaining: " + timer + "</h3>");
        timer--;

        if (timer === 0) {
            unanswer++;
            stop();
            $("#ablock").html("<p>Time is up! The correct a is: " + choose.opt[choose.a] + "</p>");
            hidepicture();
        }
    }


    function stop() {
        running = false;
        clearInterval(intervalId);
    }

    function displayq() {

        index = Math.floor(Math.random() * opts.length);
        choose = opts[index];


        $("#qblock").html("<h2>" + choose.q + "</h2>");
        for (var i = 0; i < choose.opt.length; i++) {
            var userChoice = $("<div>");
            userChoice.addClass("achoice");
            userChoice.html(choose.opt[i]);

            userChoice.attr("data-guessvalue", i);
            $("#ablock").append(userChoice);

        }




        $(".achoice").on("click", function() {

            userGuess = parseInt($(this).attr("data-guessvalue"));

            if (userGuess === choose.a) {
                stop();
                amountCorrect++;
                userGuess = "";
                $("#ablock").html("<p>Correct!</p>");
                hidepicture();

            } else {
                stop();
                amountWrong++;
                userGuess = "";
                $("#ablock").html("<p>Wrong! The correct a is: " + choose.opt[choose.a] + "</p>");
                hidepicture();
            }
        })
    }


    function hidepicture() {
        $("#ablock").append("<img src=" + choose.photo + ">");
        newArray.push(choose);
        opts.splice(index, 1);

        var hidpic = setTimeout(function() {
            $("#ablock").empty();
            timer = 20;


            if ((amountWrong + amountCorrect + unanswer) === qCount) {
                $("#qblock").empty();
                $("#qblock").html("<h3>Game Over!  Here's how you did: </h3>");
                $("#ablock").append("<h4> Correct: " + amountCorrect + "</h4>");
                $("#ablock").append("<h4> Incorrect: " + amountWrong + "</h4>");
                $("#ablock").append("<h4> Unanswered: " + unanswer + "</h4>");
                $("#reset").show();
                amountCorrect = 0;
                amountWrong = 0;
                unanswer = 0;

            } else {
                runTimer();
                displayq();

            }
        }, 3000);


    }

    $("#reset").on("click", function() {
        $("#reset").hide();
        $("#ablock").empty();
        $("#qblock").empty();
        for (var i = 0; i < holder.length; i++) {
            opts.push(holder[i]);
        }
        runTimer();
        displayq();

    })

})