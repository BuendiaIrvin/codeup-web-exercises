    function activateCheat() {
        document.body.style.backgroundImage = "url('images/IMG_1707 (1).jpg')";


        var audio = new Audio('mp3/final_6090474458f0c1010c549607_181973.mp3');
        audio.play();

    }

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

document.addEventListener('keydown', keyHandler, false);
