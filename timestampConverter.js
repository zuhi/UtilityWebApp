const displayerEpochTime = document.querySelector("#display-epoch-time");
const displayerTimetoEpoch = document.querySelector("#display-time-epoch");

const selectedTimeConvertor = document.querySelector("#timeConvertor-choice");

const epochClock = document.querySelector(".epoch-time-clock");

const clock = document.querySelector(".time-clock");

const displayerresultDiv = document.querySelector('.result-card');


function reset(){
    displayerEpochTime.style.display= 'none';
    displayerTimetoEpoch.style.display ='none';
}


function epochTimeConvertor(){
    const epochInput = document.querySelector('#epoch-input');

    const epochTimebtn = document.querySelector('.button');

    const displayYear = document.querySelector('#y');
    const displayMonth = document.querySelector('#mm');
    const displayDay = document.querySelector('#day');
    const displayHour = document.querySelector('#hr');
    const displayMin = document.querySelector('#min');
    const displaySec = document.querySelector('#sec');

    let epoch="";
    epochInput.addEventListener("input",(event)=>{

        epoch = event.target.value;

    });

    epochTimebtn.addEventListener("click",(event)=>{
        if(epoch.length>0){
            let convertedDate = new Date(parseInt(epoch));
            console.log(convertedDate.getFullYear());
            displayYear.value = convertedDate.getFullYear();
            displayMonth.value = convertedDate.getMonth();
            displayDay.value = convertedDate.getDay()+1;
            displayHour.value = convertedDate.getHours();
            displayMin.value = convertedDate.getMinutes();
            displaySec.value = convertedDate.getSeconds();
        }

    });


}

function timeEpochConvertor(){
    const inputYear = document.querySelector('#display-time-epoch input#y');
    const inputMonth = document.querySelector('#display-time-epoch input#mm');
    const inputDay = document.querySelector('#display-time-epoch input#day');
    const inputHour = document.querySelector('#display-time-epoch input#hr');
    const intputMin = document.querySelector('#display-time-epoch input#min');
    const inputSec = document.querySelector('#display-time-epoch input#sec');

    const convertDatetoEpochbtn = document.querySelector('#display-time-epoch #button');

    const displayEpoch = document.querySelector('#timetoepoch-result-display');

    let year="", month="", day="",hr="",min="",sec="";

    inputYear.addEventListener("input",(event)=>{
        year = event.target.value;
    });

    inputMonth.addEventListener("input",(event)=>{
        month = event.target.value;
    });

    inputDay.addEventListener("input",(event)=>{
        day = event.target.value;
    });

    inputHour.addEventListener("input",(event)=>{
        hr = event.target.value;
    });

    intputMin.addEventListener("input",(event)=>{
        min = event.target.value;
    });

    inputSec.addEventListener("input",(event)=>{
        sec = event.target.value;
    });

    convertDatetoEpochbtn.addEventListener("click",(event)=>{
        if(year.length>0 && month.length>0 && day.length>0 && hr.length>0 && min.length>0 && sec.length>0){
            let convertDate = new Date(year, month, day, hr, min, sec );
            displayEpoch.innerHTML = `Epoch : ${Date.parse(convertDate)}`;

        }

    });


}

function clockEpoch(){
    epochClock.innerHTML = `Current Epoch Time:${Date.parse(new Date())}`;


}

function liveclock() {
    clock.innerHTML = `${new Date().toString()}`;

}

setInterval(clockEpoch,1000);
setInterval(liveclock,1000);



selectedTimeConvertor.addEventListener("change",(event)=>{
    reset();

    displayerresultDiv.style.display ='flex';

    if(event.target.value==="epoch-time-convertor"){
        displayerEpochTime.style.display = 'flex';
        epochTimeConvertor();

    }
    else{
        displayerTimetoEpoch.style.display ='flex';
        timeEpochConvertor();

    }

});


