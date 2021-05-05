//lvl 1
function activateCheat() {
        $("h1").text("Level Two")
            $("p").text("'ArrowDown', 'ArrowDown', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'")
        ('.lvlOne').addClass('.lvlTwo').removeClass('.lvlOne');

    }
    //lvl 2
    function activateCheat2() {

        $("h1").text("Level Three")
        $("p").text("'ArrowDown', 'ArrowDown', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowLeft', 'ArrowLeft', 'ArrowRight', 'b', 'a'")
        ('.lvlOne').addClass('.lvlThree').removeClass('.lvlTwo');

    }
    //lvl3
function activateCheat3() {

    $("h1").text("Level Four")
    $("p").text("'ArrowUp', 'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowLeft', 'ArrowRight', 'ArrowRight', 'b', 'a'")
    ('.lvlOne').addClass('.lvlFour').removeClass('.lvlOne');

}




//lvl 1
var pattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
var current = 0;

var keyHandler = function (event) {
    // If the key isn't in the pattern, or isn't the current key in the pattern, reset
    if (pattern.indexOf(event.key) < 0 || event.key !== pattern[current]) {
        current = 0;
        return;
    }
    // Update how much of the pattern is complete
    current++;
    // If complete, activate and reset
    if (pattern.length === current) {
        current = 0;
        activateCheat();
    }
};

//lvl 2
    var pattern2 = ['ArrowDown', 'ArrowDown', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    var current2 = 0;

    var keyHandler2 = function (event) {
        // If the key isn't in the pattern, or isn't the current key in the pattern, reset
        if (pattern2.indexOf(event.key) < 0 || event.key !== pattern2[current2]) {
            current2 = 0;
            return;
        }
        // Update how much of the pattern is complete
        current2++;
        // If complete, activate and reset
        if (pattern2.length === current2) {
            current2 = 0;
            activateCheat3();
        }
    };

    //lvl 3
    var pattern3 = ['ArrowUp', 'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowLeft', 'ArrowRight', 'ArrowRight', 'b', 'a'];
    var current3 = 0;

    var keyHandler3 = function (event) {
        // If the key isn't in the pattern, or isn't the current key in the pattern, reset
        if (pattern3.indexOf(event.key) < 0 || event.key !== pattern3[current3]) {
            current3 = 0;
            return;
        }
        // Update how much of the pattern is complete
        current3++;
        // If complete, activate and reset
        if (pattern3.length === current3) {
            current3 = 0;
            activateCheat4();
        }
    };




document.addEventListener('keydown', keyHandler, false);
document.addEventListener('keydown', keyHandler2, false);
document.addEventListener('keydown', keyHandler3, false);
