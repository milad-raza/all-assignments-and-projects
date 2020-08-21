var min = 0;
var sec = 0;
var mil = 0;
var mini = document.getElementById("min");
var seci = document.getElementById("sec");
var mili = document.getElementById("mil");
var interval;
var write = document.getElementById("write1");

function timer(){
    mil++
    mili.innerHTML = mil;

    if(mil>=100){
        sec++
        seci.innerHTML = sec;
        
        mil = 0;
      
    }
   
    else if(sec>=60){
        min++
        sec = 0;
        mini.innerHTML = min;
        
        }
      
}

function start(){
    interval = setInterval(timer,10)
    document.getElementById("st").disabled = true;
}   
function pause(){
    clearInterval(interval)
    document.getElementById("st").disabled = false;  
    wr();
   
}

function reset(){
    min=0;
    sec=0;
    mil=0;
    mini.innerHTML=min;
    seci.innerHTML=sec;
    mili.innerHTML=mil;
    pause()
    document.getElementById("st").disabled = false;    
}

function wr(){
 
    write1.innerHTML = ("<h3>"+min+":"+sec+":"+mil+"</h3>");


}