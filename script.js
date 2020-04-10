var sec_sound = new Howl({src:["./sec.mp3"]});
var min_sound = new Howl({src:["./min.mp3"]});
var alert_sound = new Howl({src:["./alert.mp3"]});
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

  var sec = 0;
  timer = setInterval(function (){
    sec += 1;
    document.getElementById("time").innerHTML =
      ("0" + parseInt(sec/60)).slice(-2) + ":" + ("0" + parseInt(sec%60)).slice(-2);

    if(sec % 60 == 0 && document.getElementById("sound-min-enable").checked){
      min_sound.stop();
      min_sound.play();
    }
    else if(sec % n == 0){
      alert_sound.stop();
      alert_sound.play();
    }
    else if(sec % 1 == 0 && document.getElementById("sound-sec-enable").checked){
      sec_sound.stop();
      sec_sound.play();
    }
  }, 1000);

}

function stop(){
  if(!running){
    return;
  }
  running = false;

  alert("Timer stopped.");
  document.getElementById("time").innerHTML = "00:00";
  clearInterval(timer);
}
