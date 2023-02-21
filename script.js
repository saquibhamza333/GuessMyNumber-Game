'use strict';
// console.log(document.querySelector(".message").textContent);
//  document.querySelector('.message').textContent=" 🎉 Correct Number!";
//  document.querySelector('.number').textContent = 13;
//  document.querySelector('.score').textContent = 20;
//  document.querySelector('.guess').value =20;
let sceretNumber=Math.trunc(Math.random()*20)+1;
let highscore=0;
let score =20;
const displayMessage = function(message){
     document.querySelector('.message').textContent=message;

}


document.querySelector('.check').addEventListener('click',function(){
    
const guess=Number(document.querySelector('.guess').value);
// whwn there is no output
    if(!guess){
       displayMessage("⛔ No Number !" );
    }
    // when guess is correct
    else if(guess===sceretNumber){
        displayMessage(" 🎉 Correct Number!");
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width='30rem';
        document.querySelector('.number').textContent=sceretNumber;

        if(score>highscore){
            highscore=score;
            document.querySelector('.highscore').textContent=highscore;
        }

    }

// if guess is not secret number

else if(guess!==sceretNumber){
          if(score>1){
         displayMessage( guess>sceretNumber? "📈 Too High":"📉 Too Low");
          score--;
          document.querySelector('.score').textContent =score;
    }
         else{
        
        document.querySelector('.score').textContent =0;
         displayMessage("💥 you lost the game");
     

    }
        
}

// //   when guess is too low
//     else if(guess<sceretNumber){
//           if(score>1){
//          document.querySelector('.message').textContent="📉 Too Low";
//         score--;
//           document.querySelector('.score').textContent =score;
//     }
//          else{
        
//         document.querySelector('.score').textContent =0;
//          document.querySelector('.message').textContent="💥 you lost the game";
     

//     }
        
//     }
//     // when guess is too high
//     else if(guess>sceretNumber){
//         if(score>1){
//         document.querySelector('.message').textContent="📈 Too High";
//          score--;
//         document.querySelector('.score').textContent =score;
//         }
//          else{
        
//         document.querySelector('.score').textContent =0;
//          document.querySelector('.message').textContent=" 💥 you lost the game";
        

//     }
//     }
});

document.querySelector('.again').addEventListener('click',function(){
     score=20;
     document.querySelector('.score').textContent =score;
     document.querySelector('body').style.backgroundColor = '#222';
     document.querySelector('.number').textContent='?';
     sceretNumber=Math.trunc(Math.random()*20)+1;
     displayMessage("Start guessing...");
     document.querySelector('.guess').value ='';
    document.querySelector('.number').style.width='15rem';


})
