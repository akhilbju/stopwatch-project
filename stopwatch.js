let start=document.querySelector('.button-start');
let stop=document.querySelector('.button-stop');
let reset=document.querySelector('.button-reset');
let div=document.querySelector('.div');
let show;
let seconds = 0;
let minutes = 0;
let hours = 0;
let play=false;

function startstopfunction() {
if(play){
//function startfunction(){
    show=setInterval(showfunction,10);

}
//}
else{

//function stopfunction(){
    clearInterval(show);
//}
}
play=!play;
}

function resetfunction(){
    clearInterval(show);
    hours = 0;
    minutes = 0;
    seconds = 0;
    document.querySelector('.timer').innerHTML = "00:00:00"
    start.disabled = false;
    stop.disabled = false;
    reset.disabled = true;
}


function showfunction(){
    document.querySelector('.timer').innerHTML = 
    pad(hours) + ":" + pad(minutes) + ":" + pad(seconds);
      seconds++;
      if (seconds == 60) {
        seconds = 0;aa
        minutes++;
      }
      if (minutes == 60) {
        minutes = 0;
        hours++;
      }
}
function pad(n) {
    return n < 10 ? "0" + n : n;
  }



  stop.disabled = true;
  reset.disabled = true;