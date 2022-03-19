const displayerRGBtoHEX = document.querySelector("#display-rgb-hex");
const displayerHEXtoRGB = document.querySelector("#display-hex-rgb");

const displayerresultDiv = document.querySelector('.result-card');

const selectedColorCovertor = document.querySelector("#convertor-choice");


function reset() {
    displayerRGBtoHEX.style.display='none';
    displayerHEXtoRGB.style.display='none';
}

function convertRGBtoHEX(){
    const readRedComponent = document.querySelector("#r-input");
    const readBlueComponent = document.querySelector("#b-input");
    const readGreenConponent = document.querySelector("#g-input");
    
    const dislayDivRGBtoHEX = document.querySelector("#rgbtohex-result-display");
    const displayColorRGBtoHEX = document.querySelector('#rgbtohex-color-display');

    const convertButton = document.querySelector(".button1");

    let red = "";
    let blue ="";
    let green ="";

    readRedComponent.addEventListener("input",(event)=>{
         red = event.target.value;
         console.log(red);
    });

    readBlueComponent.addEventListener("input",(event)=>{
        blue= event.target.value;
        console.log(blue);
    });

    readGreenConponent.addEventListener("input",(event)=>{
        green = event.target.value;
    });
   
    convertButton.addEventListener("click",()=>{
        if(red.length>0 && blue.length>0 && green.length>0){
            console.log(red);
            console.log(blue);
            const convertor= (color)=>{
                let hexadecimal = parseInt(color,10).toString(16);
                if(hexadecimal.length==1){
                    return "0"+hexadecimal;
                  }
                  return hexadecimal;
            }

            dislayDivRGBtoHEX.innerHTML = 'Hex: '+'#'+convertor(red)+convertor(green)+convertor(blue);
            displayColorRGBtoHEX.style.background = '#'+convertor(red)+convertor(green)+convertor(blue);

        }

    });

}

function convertHEXtoRGB(){
    const readHEXinput = document.querySelector("#hex-input");

    const displayDivHEXtoRGB = document.querySelector('#hextorgb-result-display');
    const displayColorHEXtoRGB = document.querySelector('#hextorgb-color-display');

    const convertButton = document.querySelector(".button2");

    let hexString="";
    readHEXinput.addEventListener("input",(event)=>{
        hexString= event.target.value;
    });
    console.log(hexString);

    convertButton.addEventListener("click",(event)=>{
        if(hexString.length>0){
            let red = parseInt(hexString[1]+hexString[2],16);
            let green = parseInt(hexString[3]+hexString[4],16);
            let blue = parseInt(hexString[5]+hexString[6],16);

            console.log(red);
            console.log(hexString);

            displayDivHEXtoRGB.innerHTML = 'R :'+red+','+'G :'+green+','+'B :'+blue;
            displayColorHEXtoRGB.style.background = `rgb(${red}, ${green}, ${blue})`;
            // 


        }
    });





}

selectedColorCovertor.addEventListener("change",(event)=>{
    reset();
    displayerresultDiv.style.display ='flex';
    if(event.target.value==="rgb-hex-convertor"){
        displayerRGBtoHEX.style.display='flex';
        convertRGBtoHEX();

    }
    else{
        displayerHEXtoRGB.style.display='flex';
        convertHEXtoRGB();
    }
});

