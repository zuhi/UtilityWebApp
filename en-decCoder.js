const displayerEncodeDecode = document.querySelector("#display-encode-decode");
const displayerbase64decode = document.querySelector("#display-base64-decode");
const displayerbase64encode =document.querySelector("#display-base64-encode");
const displayermd5hash = document.querySelector("#display-md5-hashgenerator");
const displayersha1hash = document.querySelector("#display-sha1-hashgenerator");
const displayersha256hash = document.querySelector("#display-sha256-hashgenerator");
const displayersha512hash = document.querySelector("#display-sha512-hashgenerator");

const displayerresultDiv = document.querySelector('.result-card');

const selectedencoderdecoder = document.querySelector("#decoder-choice");

function reset() {
    let displayscreens = document.querySelectorAll("#display-encode-decode,#display-base64-decode,#display-base64-encode,#display-md5-hashgenerator,#display-sha1-hashgenerator,#display-sha256-hashgenerator,#display-sha512-hashgenerator");
    for (let i = 0; i < displayscreens.length; i++){
         displayscreens[i].style.display = 'none';
    }
}

function enodedecodeURL(){
    const urlbox = document.querySelector("#url-box");
    const encodeBtn = document.querySelector("#encode-btn");
    const decodeBtn = document.querySelector("#decode-btn");
    const result = document.querySelector("#resultencodedecode");

    let url ="";
    urlbox.addEventListener("input",(event)=>{
        url = event.target.value;
        if(url.length>0){
            encodeBtn.addEventListener("click",()=>{
                result.value = encodeURIComponent(url);
                });
            
                decodeBtn.addEventListener("click",()=>{
                    result.value = decodeURIComponent(url);
             });

        }
    });


}

function base64decodeString(){
    const base64decoder = document.querySelector("#base64decode-input");

    base64decoder.addEventListener("change",(event)=>{
         let stringtoword =  CryptoJS.enc.Base64.parse(event.target.value);
         let base64decodedString = CryptoJS.enc.Utf8.stringify(stringtoword);
         if(base64decodedString.length>0)
          {
              document.querySelector("#base64decode-result-display").innerHTML = base64decodedString.toString();
          }  

    });

}

function base64encodeString(){
    const base64encoder = document.querySelector("#base64encode-input");

    base64encoder.addEventListener("change",(event)=>{
         let stringtoword = CryptoJS.enc.Utf8.parse(event.target.value);
         let base64string = CryptoJS.enc.Base64.stringify(stringtoword);
         if(base64string.length>0)
          {
              document.querySelector("#base64encode-result-display").innerHTML = base64string.toString();
          }
         
        

    });

}

function hashgenerator(algorithm){
    if(algorithm==='md5'){
        console.log('md5');
        const md5hashSelector = document.querySelector("#md5-input");
        md5hashSelector.addEventListener("input",(event)=>{
            document.querySelector("#md5-hashed-result-display").innerHTML = CryptoJS.MD5(event.target.value).toString();

        });

    }
    else if(algorithm==='sha1'){
        console.log('sha1');
        const sha1hashSelector = document.querySelector("#sha1-input");
        sha1hashSelector.addEventListener("input",(event)=>{
            document.querySelector("#sha1-hashed-result-display").innerHTML = CryptoJS.MD5(event.target.value).toString();

        });

    }
    else if(algorithm==='sha256'){
        console.log('sha256');
        const sha256hashSelector = document.querySelector("#sha256-input");
        sha256hashSelector.addEventListener("input",(event)=>{
            document.querySelector("#sha256-hashed-result-display").innerHTML  = CryptoJS.SHA256(event.target.value).toString();

        });

    }
    else if(algorithm==='sha512'){
        console.log('sha512');
        const sha512hashSelector = document.querySelector("#sha512-input");
        sha512hashSelector.addEventListener("input",(event)=>{
            document.querySelector("#sha512-hashed-result-display").innerHTML  = CryptoJS.SHA512(event.target.value).toString();

        });

    }
    
}

selectedencoderdecoder.addEventListener("change",(event)=>{
    reset();
    displayerresultDiv.style.display='flex';
    if(event.target.value==="url-encode-decode"){
        displayerEncodeDecode.style.display="flex";
        displayerEncodeDecode.style.flexDirection="column";
        displayerEncodeDecode.style.justifyContent = "space-between";
        
        enodedecodeURL();
    }
    else if(event.target.value==="base64-decode"){
        displayerbase64decode.style.display="flex";
        displayerbase64decode.style.flexDirection="column";
        displayerbase64decode.style.justifyContent = "space-around";

        base64decodeString();

    }
    else if(event.target.value==="base64-encode"){
        displayerbase64encode.style.display="flex";
        displayerbase64encode.style.flexDirection="column";
        displayerbase64encode.style.justifyContent = "space-around";
        base64encodeString();

    }
    else if(event.target.value==="md5-hashgenerator"){
        displayermd5hash.style.display="flex";
        displayermd5hash.style.flexDirection="column";
        displayermd5hash.style.justifyContent = "space-around";
        hashgenerator("md5");

    }
    else if(event.target.value==="sha1-hashgenerator"){
        displayersha1hash.style.display="flex";
        displayersha1hash.style.flexDirection="column";
        displayersha1hash.style.justifyContent = "space-around";
        hashgenerator("sha1");

    }
    else if(event.target.value==="sha256-hashgenerator"){
        displayersha256hash.style.display="flex";
        displayersha256hash.style.flexDirection="column";
        displayersha256hash.style.justifyContent = "space-around";
        hashgenerator("sha256");

    }
    else{
        displayersha512hash.style.display="flex";
        displayersha512hash.style.flexDirection="column";
        displayersha512hash.style.justifyContent = "space-around";
        hashgenerator("sha512");

    }
})
