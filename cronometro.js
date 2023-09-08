var minutos=00
var seconds=00
var tens=00
var appendminutos=document.getElementById('minutos')
var appendseconds=document.getElementById('seconds')
var appendtens=document.getElementById('tens')
var interval;


function start(){
    clearInterval(interval);
    interval=setInterval(startTimer,10);
    
}
function pausa(){
    clearInterval(interval);
}
function reset(){
    clearInterval(interval);
    tens="00";
    seconds="00";
    minutos="00";
    appendminutos.innerHTML=minutos;
    appendseconds.innerHTML=seconds;
    appendtens.innerHTML=tens;
}
function startTimer(){
    tens++;
    if(tens<=9){
        appendtens.innerHTML= 0 + tens
    }
    if(tens>9){
        appendtens.innerHTML= tens;
    }
    if(tens>99){
        console.log("seconds");
        seconds++;
        appendseconds.innerHTML= "0" + seconds
        tens=0
        appendtens.innerHTML=tens

    }
    if(seconds>9){
        appendseconds.innerHTML=seconds
    }
    if(seconds>59){
        console.log('minutos');
        minutos++;
        appendminutos.innerHTML="0" + minutos;
        seconds=0
        appendseconds.innerHTML= "0" + seconds;
    }
    if(minutos>9){
        appendminutos.innerHTML=minutos
    }
}

