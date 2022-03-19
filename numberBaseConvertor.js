const displayBinaryDecimal = document.querySelector('#display-binary-decimal');
const displayBinaryHex = document.querySelector('#display-binary-hex');
const displayBinarOctal = document.querySelector('#display-binary-octal');

const displayDecimalBinary = document.querySelector('#display-decimal-binary');
const displayDecimalOctal = document.querySelector('#display-decimal-octal');
const displayDecimalHex = document.querySelector('#display-decimal-hex');

const displayHexBinary = document.querySelector('#display-hex-binary');
const displayHexDecimal = document.querySelector('#display-hex-decimal');
const displayHexOctal = document.querySelector('#display-hex-octal');

const displayOctalBinary = document.querySelector('#display-octal-binary');
const displayOctalHex = document.querySelector('#display-octal-hex');
const displayOctalDecimal = document.querySelector('#display-octal-decimal');

const displayerresultDiv = document.querySelector('.result-card');


const choiceSelected = document.querySelector('#baseConvertor-choice');

function reset(){

    let displayscreens = document.querySelectorAll("#result-section div");
    for (let i = 0; i < displayscreens.length; i++){
         displayscreens[i].style.display = 'none';
    }


}

function convertBinaryDecimal(){
    console.log('hi');
    const inputbinary = document.querySelector("#result-section #display-binary-decimal");
    
    const convertbtn = document.querySelector('#display-binary-decimal button');

    let binary="";
    inputbinary.addEventListener("input",(event)=>{
        binary = event.target.value;

    });
    convertbtn.addEventListener('click',()=>{
        if(binary.length>0){
            const decimal = parseInt(binary, 2);
            document.querySelector('#display-binary-decimal p').innerHTML = `Decimal: ${decimal}`;

        }
    });
}

function convertBinaryHex(){
    const inputbinary = document.querySelector("#result-section #display-binary-hex");
    
    const convertbtn = document.querySelector('#display-binary-hex button');

    let binary="";
    inputbinary.addEventListener("input",(event)=>{
        binary = event.target.value;

    });
    convertbtn.addEventListener('click',()=>{
        if(binary.length>0){
            const hex = parseInt(binary, 2).toString(16);
            document.querySelector('#display-binary-hex p').innerHTML = `Hex: ${hex}`;

        }
    });
}

function convertBinaryOctal(){
    const inputbinary = document.querySelector("#result-section #display-binary-octal");
    
    const convertbtn = document.querySelector('#display-binary-octal button');

    let binary="";
    inputbinary.addEventListener("input",(event)=>{
        binary = event.target.value;

    });
    convertbtn.addEventListener('click',()=>{
        if(binary.length>0){
            const octal = parseInt(binary, 2).toString(8);
            document.querySelector('#display-binary-octal p').innerHTML = `Octal: ${octal}`;

        }
    });
}

function convertBinaryOctal(){
    const inputbinary = document.querySelector("#result-section #display-binary-octal");
    
    const convertbtn = document.querySelector('#display-binary-octal button');

    let binary="";
    inputbinary.addEventListener("input",(event)=>{
        binary = event.target.value;

    });
    convertbtn.addEventListener('click',()=>{
        if(binary.length>0){
            const octal = parseInt(binary, 2).toString(8);
            document.querySelector('#display-binary-octal p').innerHTML = `Octal: ${octal}`;

        }
    });
}

function convertDecimalBinary(){
    const inputbinary = document.querySelector("#result-section #display-decimal-binary");
    
    const convertbtn = document.querySelector('#display-decimal-binary button');

    let decimal="";
    inputbinary.addEventListener("input",(event)=>{
        decimal = event.target.value;

    });
    convertbtn.addEventListener('click',()=>{
        if(decimal.length>0){
            const binary = parseInt(decimal, 10).toString(2);
            document.querySelector('#display-decimal-binary p').innerHTML = `Binary: ${binary}`;

        }
    });
}

function convertDecimalHex(){
    const inputbinary = document.querySelector("#result-section #display-decimal-hex");
    
    const convertbtn = document.querySelector('#display-decimal-hex button');

    let decimal="";
    inputbinary.addEventListener("input",(event)=>{
        decimal = event.target.value;

    });
    convertbtn.addEventListener('click',()=>{
        if(decimal.length>0){
            const hex = parseInt(decimal, 10).toString(2);
            document.querySelector('#display-decimal-hex p').innerHTML = `Hex: ${hex}`;

        }
    });
}

function convertDecimalOctal(){
    const inputbinary = document.querySelector("#result-section #display-decimal-octal");
    
    const convertbtn = document.querySelector('#display-decimal-octal button');

    let decimal="";
    inputbinary.addEventListener("input",(event)=>{
        decimal = event.target.value;

    });
    convertbtn.addEventListener('click',()=>{
        if(decimal.length>0){
            const octal = parseInt(decimal, 10).toString(2);
            document.querySelector('#display-decimal-octal p').innerHTML = `Octal: ${octal}`;

        }
    });
}

function convertHexDecimal(){
    const inputbinary = document.querySelector("#result-section #display-hex-decimal");
    
    const convertbtn = document.querySelector('#display-hex-decimal button');

    let hex="";
    inputbinary.addEventListener("input",(event)=>{
        hex = event.target.value;

    });
    convertbtn.addEventListener('click',()=>{
        if(hex.length>0){
            const decimal = parseInt(hex, 16).toString(10);
            document.querySelector('#display-hex-decimal p').innerHTML = `Decimal: ${decimal}`;

        }
    });
}

function convertHexBinary(){
    const input = document.querySelector("#result-section #display-hex-binary");
    
    const convertbtn = document.querySelector('#display-hex-binary button');

    let hex="";
    input.addEventListener("input",(event)=>{
        hex = event.target.value;

    });
    convertbtn.addEventListener('click',()=>{
        if(hex.length>0){
            const binary= parseInt(hex, 16).toString(2);
            document.querySelector('#display-hex-binary p').innerHTML = `Binary: ${binary}`;

        }
    });
}

function convertHexOctal(){
    const input = document.querySelector("#result-section #display-hex-octal");
    
    const convertbtn = document.querySelector('#display-hex-octal button');

    let hex="";
    input.addEventListener("input",(event)=>{
        hex = event.target.value;

    });
    convertbtn.addEventListener('click',()=>{
        if(hex.length>0){
            const octal = parseInt(hex, 16).toString(8);
            document.querySelector('#display-hex-octal p').innerHTML = `Octal: ${octal}`;

        }
    });
}

function convertOctalBinary(){
    const inputbinary = document.querySelector("#result-section #display-octal-binary");
    
    const convertbtn = document.querySelector('#display-octal-binary button');

    let octal="";
    inputbinary.addEventListener("input",(event)=>{
        octal = event.target.value;

    });
    convertbtn.addEventListener('click',()=>{
        if(octal.length>0){
            const binary = parseInt(octal, 8).toString(2);
            document.querySelector('#display-octal-binary p').innerHTML = `Binary: ${binary}`;

        }
    });
}

function convertOctalHex(){
    const inputbinary = document.querySelector("#result-section #display-octal-hex");
    
    const convertbtn = document.querySelector('#display-octal-hex button');

    let octal="";
    inputbinary.addEventListener("input",(event)=>{
        octal = event.target.value;

    });
    convertbtn.addEventListener('click',()=>{
        if(octal.length>0){
            const hex = parseInt(octal, 8).toString(16);
            document.querySelector('#display-octal-hex p').innerHTML = `Hex: ${hex}`;

        }
    });
}

function convertOctalDecimal(){
    const inputbinary = document.querySelector("#result-section #display-octal-decimal");
    
    const convertbtn = document.querySelector('#display-octal-decimal button');

    let octal="";
    inputbinary.addEventListener("input",(event)=>{
        octal = event.target.value;

    });
    convertbtn.addEventListener('click',()=>{
        if(octal.length>0){
            const decimal = parseInt(octal, 8).toString(10);
            document.querySelector('#display-octal-decimal p').innerHTML = `Decimal: ${decimal}`;

        }
    });
}



choiceSelected.addEventListener('change',(event)=>{
    reset();

    displayerresultDiv.style.display ='flex';

    if(event.target.value==='binary-decimal'){
        displayBinaryDecimal.style.display ='flex';
        convertBinaryDecimal();

    }
    else if(event.target.value==='binary-hex'){
        displayBinaryHex.style.display = 'flex';
        convertBinaryHex();

    }
    else if(event.target.value==='binary-octal'){
        displayBinarOctal.style.display = 'flex';
        convertBinaryOctal();

    }
    else if(event.target.value==='decimal-binary'){
        displayDecimalBinary.style.display ='flex';
        convertDecimalBinary();

    }
    else if(event.target.value==='decimal-hex'){
        displayDecimalHex.style.display = 'flex';
        convertDecimalHex();

    }
    else if(event.target.value==='decimal-octal'){
        displayDecimalOctal.style.display = 'flex';
        convertDecimalOctal();

    }
    else if(event.target.value==='hex-binary'){
        displayHexBinary.style.display = 'flex';
        convertHexBinary();

    }
    else if(event.target.value==='hex-decimal'){
        displayHexDecimal.style.display = 'flex';
        convertHexDecimal();

    }
    else if(event.target.value==='hex-octal'){
        displayHexOctal.style.display = 'flex';
        convertHexOctal();

    }
    else if(event.target.value==='octal-binary'){
        displayOctalBinary.style.display = 'flex';
        convertOctalBinary();

    }
    else if(event.target.value==='octal-hex'){
        displayOctalHex.style.display = 'flex';
        convertOctalHex();

    }
    else if(event.target.value==='octal-decimal'){
        displayOctalDecimal.style.display = 'flex';
        convertOctalDecimal();

    }

});