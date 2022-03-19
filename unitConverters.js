const displayerMKm =document.querySelector('#display-m-km');
const displayerMDm =document.querySelector('#display-m-dm');
const displayerMCm =document.querySelector('#display-m-cm');
const displayerMmm =document.querySelector('#display-m-mm');
const displayerMum =document.querySelector('#display-m-um');

const displayercmKm =document.querySelector('#display-cm-km');
const displayercmDm =document.querySelector('#display-cm-dm');
const displayercmM =document.querySelector('#display-cm-m');
const displayercmMm =document.querySelector('#display-cm-mm');
const displayercmUm =document.querySelector('#display-cm-um');

const displayerkmm =document.querySelector('#display-km-m');
const displayerkmcm =document.querySelector('#display-km-cm');
const displayerkmMm =document.querySelector('#display-km-mm');
const displayerkmDm =document.querySelector('#display-km-dm');
const displayerkmum =document.querySelector('#display-km-um');

const choiceunitConvertor = document.querySelector('#timeConvertor-choice');

const displayerresultDiv = document.querySelector('.result-card');



function reset() {
    let displayscreens = document.querySelectorAll("#input-res-section div");
    for (let i = 0; i < displayscreens.length; i++){
         displayscreens[i].style.display = 'none';
    }

}

function convertmKM(){
    const inputmKm = document.querySelector("#input-res-section #display-m-km input");
    
    const convertbtn = document.querySelector('#display-m-km button');

    let input="";
    inputmKm.addEventListener("input",(event)=>{
        input = event.target.value;

    });
    convertbtn.addEventListener('click',(event)=>{
        if(input.length>0){
            const km = input/1000;
            document.querySelector('#display-m-km p').innerHTML = `KM: ${km}`;

        }
    });

}

function convertmDM(){
    const inputmDm = document.querySelector("#input-res-section #display-m-dm input");
    
    const convertbtn = document.querySelector('#display-m-dm button');

    let input="";
    inputmDm.addEventListener("input",(event)=>{
        input = event.target.value;

    });
    convertbtn.addEventListener('click',(event)=>{
        if(input.length>0){
            const dm = input*10;
            document.querySelector('#display-m-dm p').innerHTML = `DM: ${dm}`;

        }
    });

}

function convertmCM(){
    const inputmDm = document.querySelector("#input-res-section #display-m-cm input");
    
    const convertbtn = document.querySelector('#display-m-cm button');

    let input="";
    inputmDm.addEventListener("input",(event)=>{
        input = event.target.value;

    });
    convertbtn.addEventListener('click',(event)=>{
        if(input.length>0){
            const cm = input*100;
            document.querySelector('#display-m-cm p').innerHTML = `CM: ${cm}`;

        }
    });

}

function convertmMM(){
    const inputmDm = document.querySelector("#input-res-section #display-m-mm input");
    
    const convertbtn = document.querySelector('#display-m-mm button');

    let input="";
    inputmDm.addEventListener("input",(event)=>{
        input = event.target.value;

    });
    convertbtn.addEventListener('click',(event)=>{
        if(input.length>0){
            const mm = input*100;
            document.querySelector('#display-m-mm p').innerHTML = `MM: ${mm}`;

        }
    });

}

function convertmUM(){
    const inputm = document.querySelector("#input-res-section #display-m-um input");
    
    const convertbtn = document.querySelector('#display-m-um button');

    let input="";
    inputm.addEventListener("input",(event)=>{
        input = event.target.value;

    });
    convertbtn.addEventListener('click',(event)=>{
        if(input.length>0){
            const um = input*100;
            document.querySelector('#display-m-um p').innerHTML = `uM: ${um}`;

        }
    });

}

function convertcmKM(){
    const inputm = document.querySelector("#input-res-section #display-cm-km input");
    
    const convertbtn = document.querySelector('#display-cm-km button');

    let input="";
    inputm.addEventListener("input",(event)=>{
        input = event.target.value;

    });
    convertbtn.addEventListener('click',(event)=>{
        if(input.length>0){
            const Km = input*100;
            document.querySelector('#display-cm-km p').innerHTML = `KM: ${Km}`;

        }
    });

}

function convertcmDM(){
    const inputm = document.querySelector("#input-res-section #display-cm-dm input");
    
    const convertbtn = document.querySelector('#display-cm-dm button');

    let input="";
    inputm.addEventListener("input",(event)=>{
        input = event.target.value;

    });
    convertbtn.addEventListener('click',(event)=>{
        if(input.length>0){
            const Dm = input*100;
            document.querySelector('#display-cm-dm p').innerHTML = `DM: ${Dm}`;

        }
    });

}

function convertcmM(){
    const inputm = document.querySelector("#input-res-section #display-cm-m input");
    
    const convertbtn = document.querySelector('#display-cm-m button');

    let input="";
    inputm.addEventListener("input",(event)=>{
        input = event.target.value;

    });
    convertbtn.addEventListener('click',(event)=>{
        if(input.length>0){
            const m = input/100;
            document.querySelector('#display-cm-m p').innerHTML = `M: ${m}`;

        }
    });

}

function convertcmMM(){
    const inputm = document.querySelector("#input-res-section #display-cm-mm input");
    
    const convertbtn = document.querySelector('#display-cm-mm button');

    let input="";
    inputm.addEventListener("input",(event)=>{
        input = event.target.value;

    });
    convertbtn.addEventListener('click',(event)=>{
        if(input.length>0){
            const mm = input/1000;
            document.querySelector('#display-cm-mm p').innerHTML = `MM: ${mm}`;

        }
    });

}

function convertcmUM(){
    const inputm = document.querySelector("#input-res-section #display-cm-um input");
    
    const convertbtn = document.querySelector('#display-cm-um button');

    let input="";
    inputm.addEventListener("input",(event)=>{
        input = event.target.value;

    });
    convertbtn.addEventListener('click',(event)=>{
        if(input.length>0){
            const um = input*1000000;
            document.querySelector('#display-cm-um p').innerHTML = `UM: ${um}`;

        }
    });

}

function convertkmM(){
    const inputm = document.querySelector("#input-res-section #display-km-m input");
    
    const convertbtn = document.querySelector('#display-km-m button');

    let input="";
    inputm.addEventListener("input",(event)=>{
        input = event.target.value;

    });
    convertbtn.addEventListener('click',(event)=>{
        if(input.length>0){
            const km = input*1000;
            document.querySelector('#display-km-m p').innerHTML = `KM: ${km}`;

        }
    });

}

function convertkmcm(){
    const inputm = document.querySelector("#input-res-section #display-km-cm input");
    
    const convertbtn = document.querySelector('#display-km-cm button');

    let input="";
    inputm.addEventListener("input",(event)=>{
        input = event.target.value;

    });
    convertbtn.addEventListener('click',(event)=>{
        if(input.length>0){
            const cm = input*100000;
            document.querySelector('#display-km-cm p').innerHTML = `CM: ${cm}`;

        }
    });

}

function convertkmMM(){
    const inputm = document.querySelector("#input-res-section #display-km-mm input");
    
    const convertbtn = document.querySelector('#display-km-mm button');

    let input="";
    inputm.addEventListener("input",(event)=>{
        input = event.target.value;

    });
    convertbtn.addEventListener('click',(event)=>{
        if(input.length>0){
            const mm = input*1000000;
            document.querySelector('#display-km-mm p').innerHTML = `MM: ${mm}`;

        }
    });

}

function convertkmDM(){
    const inputm = document.querySelector("#input-res-section #display-km-dm input");
    
    const convertbtn = document.querySelector('#display-km-dm button');

    let input="";
    inputm.addEventListener("input",(event)=>{
        input = event.target.value;

    });
    convertbtn.addEventListener('click',(event)=>{
        if(input.length>0){
            const dm = input*10000;
            document.querySelector('#display-km-dm p').innerHTML = `DM: ${dm}`;

        }
    });

}

function convertkmuM(){
    const inputm = document.querySelector("#input-res-section #display-km-um input");
    
    const convertbtn = document.querySelector('#display-km-um button');

    let input="";
    inputm.addEventListener("input",(event)=>{
        input = event.target.value;

    });
    convertbtn.addEventListener('click',(event)=>{
        console.log('UM');
        if(input.length>0){
            const um = input*1000000000;
            document.querySelector('#display-km-um p').innerHTML = `uM: ${um}`;

        }
    });

}



choiceunitConvertor.addEventListener('change',(event)=>{
    reset();

    displayerresultDiv.style.display ='flex';

    if(event.target.value==='m-km-convertor'){
        displayerMKm.style.display='flex';
        convertmKM();

    }
    else if(event.target.value==='m-dm-convertor'){
        displayerMDm.style.display='flex';
        convertmDM();

    }
    else if(event.target.value==='m-cm-convertor'){
        displayerMCm.style.display='flex';
        convertmCM();

    }
    else if(event.target.value==='m-mm-convertor'){
        displayerMmm.style.display='flex';
        convertmMM();

    }
    else if(event.target.value==='m-um-convertor'){
        displayerMum.style.display='flex';
        convertmUM();


    }
    else if(event.target.value==='cm-km-convertor'){
        displayercmKm.style.display = 'flex';
        convertcmKM();

    }
    else if(event.target.value==='cm-dm-convertor'){
        displayercmDm.style.display = 'flex';
        convertcmDM();

    }
    else if(event.target.value==='cm-m-convertor'){
        displayercmM.style.display = 'flex';
        convertcmM();

    }
    else if(event.target.value==='cm-mm-convertor'){
        displayercmMm.style.display = 'flex';
        convertcmMM();

    }
    else if(event.target.value==='cm-um-convertor'){
        displayercmUm.style.display = 'flex';
        convertcmUM();

    }
    else if(event.target.value==='km-m-convertor'){
        displayerkmm.style.display = 'flex';
        convertkmM();
        
    }
    else if(event.target.value==='km-cm-convertor'){
        displayerkmcm.style.display ='flex';
        convertkmcm();
        
        
    }
    else if(event.target.value==='km-mm-convertor'){
        displayerkmMm.style.display ='flex';
        convertkmMM();
        
    }
    else if(event.target.value==='km-dm-convertor'){
        displayerkmDm.style.display = 'flex';
        convertkmDM();
        
    }
    else if(event.target.value==='km-um-convertor'){
        
        displayerkmum.style.display ='flex';
        convertkmuM();
    }
});