var sound = new Audio("./sound.mp3");
let min_sec = 0.15
var timer;
var running;
function start(){
  if(running){
    return;
  }
  running = true;

  // Get every n seconds.
  var n = Number(document.getElementById("seconds").value);
  if(isNaN(n)){
    alert("Oops! Don't input anything but numbers!");
    running = false;
    return;
  }
  if(n < min_sec){
    alert("Oops! this numbers too small!");
    running = false;
    return;
  }

  // Loop Timer
  timer = setInterval(function (){
    console.log("sounded");
    // Play the sound from the beginning.
    sound.pause();
    sound.currentTime = 0;
    sound.play();
  }, 1000*n);
}

function stop(){
  if(!running){
    return;
  }
  running = false;

  alert("Timer stopped.");
  clearInterval(timer);
}
