const stopwatch = document.querySelector('#stopwatch-timer');

const startButton = document.querySelector('#start');
const resetButton = document.querySelector('#reset');
const stopButton = document.querySelector('#stop');

let [h,m,s,ms] = [0,0,0,0];

let updateStopwatch = null;


function displayTimer() {
    ms += 1;
    if(ms===1000){
        s +=1;
        ms=0;
    }
    if(s===60){

        m += 1;
        s=0;
    }
    if(m===60){
        h += 1;
        m=0;
    }

    stopwatch.innerHTML = `${h}:${m}:${s}:${ms}`;
}


startButton.addEventListener('click',()=>{

    updateStopwatch= setInterval(displayTimer,1);

});

resetButton.addEventListener('click',()=>{
    [h,m,s,ms] =[0,0,0,0];
    clearInterval(updateStopwatch);
    stopwatch.innerHTML = `${h}:${m}:${s}:${ms}`;

});

stopButton.addEventListener('click',()=>{
    clearInterval(updateStopwatch);
});

