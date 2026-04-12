
let randomNumber= parseInt(Math.random() * 10 + 1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessNumber = document.querySelector('.guesses');
const RemainingNumber = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver =document.querySelector('.resultParas')

const para = document.createElement('p');

let previousGuess =[]   //is array mein wo value store hogi jo user input kary ga or batye ga k yeh value phely input ho chuki hai.
let numAttempt = 1;     // start toh 1 say he hoga na
let playGame = true;

if(playGame){
   submit.addEventListener('click',function(event){
     event.preventDefault();     // form submit hoga, lekin page reload nahi hoga
     const guess = parseInt(userInput.value);
     validateGuess(guess);
   })
}
  
function validateGuess(guess){
 // yeh method is liye banaya k yeh user k input ko check kary ga k wo valid hai ya nhii etc wo koi string pass toh nhii kar raha
 if(isNaN(guess)){
    alert('please enter a valid number')
 }
  if(guess <=0){
    alert('please enter a number wchich is greater than 0')
 }
  if(guess > 100){
    alert('please enter a number wchich is less than 100')
 } else{
     previousGuess.push(guess);
     if(numAttempt === 11){
       displayGuess(guess);
       displayMessage(`Game is over .ramdom number was : ${randomNumber}`)
       gameEnd();
     }else{
        displayGuess(guess);
        checkGuess(guess);
     }
 }

}

function checkGuess(guess){
// yahn par user k guess ko check kiya jye ga
 if (guess=== randomNumber){
    displayMessage('congratulations you guessed the right number')
    gameEnd();
 }else if(guess < randomNumber){
    displayMessage('The number is too low')
 }else if(guess > randomNumber){
    displayMessage('The number is too High')
 }
}

function displayGuess(guess){
// or yahn guess display hoga
// displayguess mein user ki input ki value ko ab update karen gy
 userInput.value ='';
 guessNumber.innerHTML +=`${guess},  `
 numAttempt ++;
RemainingNumber.innerHTML = `${10 - numAttempt}`;

}
function displayMessage(message){
//yahn message display hoga lower value ya phir high value etc
lowOrHi.innerHTML =`<h2>${message}</h2>`
}
function gameEnd(){
userInput.value = '';
  userInput.setAttribute('disabled', '');
  para.classList.add('button');
  para.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild('p');
  playGame = false;
  newGame();
}
function newGame(){
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    previousGuess = [];
    numAttempt = 1;
    guessNumber.innerHTML = '';
    remaining.innerHTML = `${10 - numGuess } `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}