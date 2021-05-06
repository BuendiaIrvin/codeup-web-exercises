    //lvl 1
    function activateCheat() {
    $("body").css("background-color", "hotpink");
    $("h1").text("Level Two")
    $("h4").text("Don't let me distract you")
            $("p").text("'ArrowDown', 'ArrowDown', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'")
        ('.lvlOne').addClass('.lvlTwo').removeClass('.lvlOne');

    }
    //lvl 2
    function activateCheat2() {
        $("body").css("background-color", "orangered");
        $("h1").text("Level Three")
        $("h4").text("Yaaawnn.. these are the easy ones")
        $("p").text("'ArrowUp', 'ArrowDown', 'ArrowUp', 'ArrowDown', 'ArrowUp', 'ArrowDown', 'ArrowRight', 'ArrowRight', 'b', 'a'")
        ('.lvlOne').addClass('.lvlThree').removeClass('.lvlTwo');

    }
    //lvl3
    function activateCheat3() {
    $("body").css("background-color", "red");
    $("h1").text("Level Four")
    $("h4").text("oh, ok.... I see you")
    $("p").text("'ArrowLeft', 'ArrowDown', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'")
    ('.lvlOne').addClass('.lvlFour').removeClass('.lvlOne');
    }
    //lvl4
    function activateCheat4() {
        $("body").css("background-color", "black");
        $("h1").text("Level Five")
        $("h4").text("Lets start picking it up.")
        $("p").text("'ArrowLeft', 'ArrowDown', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'")
        ('.lvlOne').addClass('.lvlFive').removeClass('.lvlOne');
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
            activateCheat2();
        }
    };

    //lvl 3
    var pattern3 = ['ArrowUp', 'ArrowDown', 'ArrowUp', 'ArrowDown', 'ArrowUp', 'ArrowDown', 'ArrowRight', 'ArrowRight', 'b', 'a'];
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
            activateCheat3();
        }
    };

    //lvl4

var pattern4 = ['ArrowLeft', 'ArrowDown', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
var current4 = 0;

var keyHandler4 = function (event) {
    // If the key isn't in the pattern, or isn't the current key in the pattern, reset
    if (pattern4.indexOf(event.key) < 0 || event.key !== pattern4[current4]) {
        current4 = 0;
        return;
    }
    // Update how much of the pattern is complete
    current4++;
    // If complete, activate and reset
    if (pattern4.length === current4) {
        current4 = 0;
        activateCheat4();
    }
};






document.addEventListener('keydown', keyHandler, false);
document.addEventListener('keydown', keyHandler2, false);
document.addEventListener('keydown', keyHandler3, false);
document.addEventListener('keydown', keyHandler4, false);
