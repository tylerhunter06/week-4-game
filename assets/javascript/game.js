$(document).ready(function() {

    var wins = 0;
    var losses = 0;

    function newGame() {

        var output = 0;
        $(".output").html(output);

        var targetNumber = Math.floor(Math.random() * (120/*max*/ - 19/*min*/ + 1)) + 19/*min*/;
        $(".targetNumber").html(targetNumber);

        var crystalOne = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        var crystalTwo = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        var crystalThree = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        var crystalFour = Math.floor(Math.random() * (12 - 1 + 1)) + 1;

        $(".crystalOne").click(function() {
            output += crystalOne;
            $(".output").text(output);
            checker();
        });

        $(".crystalTwo").click(function() {
            output += crystalTwo;
            $(".output").text(output);
            checker();
        });

        $(".crystalThree").click(function() {
            output += crystalThree;
            $(".output").text(output);
            checker();
        });

        $(".crystalFour").click(function() {
            output += crystalFour;
            $(".output").text(output);
            checker();
        });

        function checker() {
            if (output == targetNumber) {
                wins += 1;
                $(".wins").text(wins);
                output = 0;
                crystalOne = 0;
                crystalTwo = 0;
                crystalThree = 0;
                crystalFour = 0;
                newGame()
            }

            if (output > targetNumber) {
                losses += 1;
                $(".losses").text(losses);
                output = 0;
                crystalOne = 0;
                crystalTwo = 0;
                crystalThree = 0;
                crystalFour = 0;
                newGame()
            }
        }
    };

    newGame();

});