let randomNumber=Math.floor(Math.random()*100)+1;

const randomNumberShow=document.querySelector('.randomNumberShow');
const guesses=document.querySelector('.guesses');
const lastResult=document.querySelector('.lastResult');
const lowOrHi=document.querySelector('.lowOrHi');

const submitGuess=document.querySelector('.submitGuess');
const guessİnput=document.querySelector('.guessİnput');


let guessCount=1;
let resetButton;

function checkGuess(){
    const userGuess=Number(guessİnput.value);
    if(guessCount===1){
        guesses.textContent='Önceki sonuçlar :';
    }
    guesses.textContent +=userGuess +' ';
    if(userGuess===randomNumber){
        lastResult.textContent='!! Tebrikler Kazandınızz !!';
        lastResult.style.backgroundColor='green';
        lowOrHi.textContent='';
        setGameOver();
    }
    else if(guessCount===10){
        lastResult.textContent='!! Game Over !!';
        lastResult.style.backgroundColor='red';
        lowOrHi.textContent='';
        setGameOver();
    }
    else{
        lastResult.textContent='Yanlış Tahmin';
        lastResult.style.backgroundColor='red';
        if(userGuess<randomNumber){
            lowOrHi.textContent='Düşük Tahmin Ettiniz !';
        }
        else if(userGuess>randomNumber){
            lowOrHi.textContent='Yüksek Tahmin Ettiniz!';
        }
    }
    guessCount++;
    guessİnput.value='';
    guessİnput.focus();
}
   submitGuess.addEventListener('click',checkGuess);

   function setGameOver(){
      guessİnput.disabled=true;
      submitGuess.disabled=true;
      randomNumberShow.textContent=randomNumber;
      resetButton=document.createElement('button');
      resetButton.classList.add('resetButton');
      resetButton.textContent='Yeniden Oyuna Başla'
      document.querySelector('.buttonWrapper').appendChild(resetButton);
      resetButton.addEventListener('click',resetGame);
   }

   function resetGame(){
      let guessCount=1;

      guessİnput.disabled=false;
      submitGuess.disabled=false;
      guessİnput.value='';
      guessİnput.focus();
      lastResult.style.backgroundColor='transparent';

      const resultsElements=document.querySelectorAll('.resultsElements p');

      for(const i of resultsElements){
        i.textContent='';
      }
      randomNumberShow.textContent='?';
      resetButton.parentNode.removeChild(resetButton);
      randomNumber=Math.floor(Math.random()*100)+1;    
   }
   resetGame().addEventListener('click',checkGuess);
