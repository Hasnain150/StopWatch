const timer=document.querySelector("h1");
let [hours,minutes,seconds]=[0,0,0];
let x=null;
timer.innerHTML=`00 : 00 : 00`;

function timerRunning(){
    seconds++;
    if(seconds==60){
        seconds=0;
        minutes++;
        if(minutes==60){
            minutes=0;
            hours++;
        }
    }
    let h;
    let m;
    let s;
    hours<10 ? h=`0`+hours:h=hours;
    minutes<10 ? m=`0${minutes}`:m=minutes;
    seconds<10 ? s=`0${seconds}`:s=seconds;
    timer.innerHTML=`${h} : ${m} : ${s}`;
}

function startWatch(){
  if(x!==null){
    clearInterval(x);
  }
  x=setInterval(timerRunning,1000);
}
function stopWatch(){
    clearInterval(x);
}
function resetWatch(){
    clearInterval(x);
    [hours,minutes,seconds]=[0,0,0];
    timer.innerHTML=`00 : 00 : 00`;

}


const playBtn=document.querySelector("#playBtn");
const stopBtn=document.querySelector("#stopBtn");
const resetBtn=document.querySelector("#resetBtn");

playBtn.addEventListener("click",startWatch);
stopBtn.addEventListener("click",stopWatch);
resetBtn.addEventListener("click",resetWatch);

setInterval(() => {
    
}, 500);