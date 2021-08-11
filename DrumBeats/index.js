function handClick() {
    var audio;
    var itsName = this.innerHTML;
    annimation(itsName);
    switch (itsName) {
        case 'w':
            audio = new Audio('./sounds/tom-1.mp3');
            audio.play();
            break;
        case 's':
            audio = new Audio('./sounds/tom-2.mp3');
            audio.play();
            break;
        case 'a':
            audio = new Audio('./sounds/tom-3.mp3');
            audio.play();
            break;
        case 'd':
            audio = new Audio('./sounds/tom-4.mp3');
            audio.play();
            break;
        case 'j':
            audio = new Audio('./sounds/kick-bass.mp3');
            audio.play();
            break;
        case 'k':
            audio = new Audio('./sounds/crash.mp3');
            audio.play();
            break;
        case 'l':
            audio = new Audio('./sounds/snare.mp3');
            audio.play();
            break;
    }
}

document.addEventListener("keypress", function(event) { //it allows to see the event which is being done

    // alert("A key has been pressed..!!");
    var pressedKey = event.key;
    annimation(pressedKey);
    switch (pressedKey) {
        case 'w':
            audio = new Audio('./sounds/tom-1.mp3');
            audio.play();
            break;
        case 's':
            audio = new Audio('./sounds/tom-2.mp3');
            audio.play();
            break;
        case 'a':
            audio = new Audio('./sounds/tom-3.mp3');
            audio.play();
            break;
        case 'd':
            audio = new Audio('./sounds/tom-4.mp3');
            audio.play();
            break;
        case 'j':
            audio = new Audio('./sounds/kick-bass.mp3');
            audio.play();
            break;
        case 'k':
            audio = new Audio('./sounds/crash.mp3');
            audio.play();
            break;
        case 'l':
            audio = new Audio('./sounds/snare.mp3');
            audio.play();
            break;
    }
})




var noOfButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < noOfButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", handClick);

    //be patient and think
}

function annimation(currKey) {
    var actBtn = document.querySelector("." + currKey);
    actBtn.classList.add("pressed");

    setTimeout(function() {
        actBtn.classList.remove("pressed")
    }, 100);
}