const displayWordLength = document.querySelector('#display-word-length');
const displayNumberofWords = document.querySelector('#display-word-count');
const displayReverse = document.querySelector('#display-reverse-word');
const displayFindReplace = document.querySelector('#display-find-replace');
const displayUpperCase= document.querySelector('#display-uppercase');
const displaySmallCase = document.querySelector('#display-lowercase');

const userChoiceUtility = document.querySelector('#textTool-choice');

const displayerresultDiv = document.querySelector('.result-card');

function reset(){

    let displayscreens = document.querySelectorAll("#result-section [id^='display-']");
    for (let i = 0; i < displayscreens.length; i++){
         displayscreens[i].style.display = 'none';
    }


}
function wordLength(){
    const input = document.querySelector('#display-word-length input');

    const btn = document.querySelector('#display-word-length button');

    let word='';

    input.addEventListener('input',(event)=>{
        word = event.target.value;

    });

    btn.addEventListener('click',(event)=>{
        if(word.length>0){
            document.querySelector('#display-word-length p').innerHTML = `Word Length: ${word.length}`;
        }

    });
}

function wordCount(){
    const input = document.querySelector('#display-word-count input');
    console.log('Word Count');

    const btn = document.querySelector('#display-word-count button');

    let sentence='';

    input.addEventListener('input',(event)=>{
        sentence = event.target.value;

    });


    btn.addEventListener('click',(event)=>{
        if(sentence.length>0){
            let count = sentence.split(" ").length;
            console.log("Count: ");
            console.log(count);
            if(sentence.length>0){
                document.querySelector('#display-word-count p').innerHTML = `Word Count: ${count}`;

            }      
        }

    });
}

function reverseSentence(){
    const input = document.querySelector('#display-reverse-word input');

    const btn = document.querySelector('#display-reverse-word button');

    let word='';

    input.addEventListener('input',(event)=>{
        word = event.target.value;

    });

    btn.addEventListener('click',(event)=>{
        if(word.split(" ").length>1){
            document.querySelector('#display-reverse-word p').innerHTML = `Reverse : ${word.split(" ").reverse().join(' ')}`;
        }
        else if(word.split(" ").length==1){
            document.querySelector('#display-reverse-word p').innerHTML = `Reverse : ${word.split("").reverse().join('')}`;

        }

    });

}

function findReplace(){

    const inputSentence = document.querySelector('#display-find-replace #sentence');
    const inputReplace = document.querySelector('#display-find-replace #replace');
    const inputFind = document.querySelector('#display-find-replace #find');

    const btn = document.querySelector('#display-find-replace button');

    let sentence='', replaceWord ='', findWord ='';


    inputSentence.addEventListener('input',(event)=>{
        sentence = event.target.value;

    });

    inputReplace.addEventListener('input',(event)=>{
        replaceWord = event.target.value;

    });

    inputFind.addEventListener('input',(event)=>{
        findWord = event.target.value;

    });

    btn.addEventListener('click',(event)=>{
        console.log('shy');
        if(sentence.length>0 && replaceWord.length>0 && findWord.length>0){
            document.querySelector('#display-find-replace p').innerHTML = `Replaced : ${sentence.replace(findWord,replaceWord)}`;
        }

    });
    
}

function convertupperCase(){
    const input = document.querySelector('#display-uppercase input');

    const btn = document.querySelector('#display-uppercase button');

    let word='';

    input.addEventListener('input',(event)=>{
        word = event.target.value;

    });

    btn.addEventListener('click',(event)=>{
        if(word.length>0){
            document.querySelector('#display-uppercase p').innerHTML = `uppercase : ${word.toUpperCase()}`;
        }

    });

}

function convertlowerCase(){
    const input = document.querySelector('#display-lowercase input');

    const btn = document.querySelector('#display-lowercase button');

    let word='';

    input.addEventListener('input',(event)=>{
        word = event.target.value;

    });

    btn.addEventListener('click',(event)=>{
        if(word.length>0){
            document.querySelector('#display-lowercase p').innerHTML = `Lowercase : ${word.toLowerCase()}`;
        }

    });

}


userChoiceUtility.addEventListener('change',(event)=>{
    reset();

    displayerresultDiv.style.display ='flex';

    if(event.target.value==='word-length'){
        console.log('huhs');
        displayWordLength.style.display = 'flex';
        wordLength();

    }
    else if(event.target.value==='count-word'){
        displayNumberofWords.style.display = 'flex';
        wordCount();

    }
    else if(event.target.value==='reverse'){
        displayReverse.style.display = 'flex';
        reverseSentence();

    }
    else if(event.target.value==='find-replace'){
        displayFindReplace.style.display = 'flex';
        findReplace();

    }
    else if(event.target.value==='uppercase'){
        displayUpperCase.style.display = 'flex';
        convertupperCase();

    }
    else if(event.target.value==='lowercase'){
        displaySmallCase.style.display = 'flex';
        convertlowerCase();

    }
});



