

function sayThatWasEasy() { 
    var thatWasEasy = new Audio("not_easy.mp3");
    thatWasEasy.play();
}

$("#easy").on("click", sayThatWasEasy);