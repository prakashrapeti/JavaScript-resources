const score = JSON.parse(localStorage.getItem('score')) ||{wins : 0,
    losses : 0,
    ties :0};
    updatescore();
    /*if(score === null){
        score = {
            wins : 0,
            losses : 0,
            ties : 0
        }}*/
    
    
    let isAutoPlaying = false;
    let intervalId;
    function autoplay(){
        if(!isAutoPlaying){
            intervalId = setInterval(() => {
                const playerMove = pickComputerMove();
                playerGame(playerMove)
              
            },1000);
            isAutoPlaying = true;
        }else{
            clearInterval(intervalId);
            isAutoPlaying = false;

        }
       
    }

    document.querySelector('.js-rock-button')
    .addEventListener('click', () => {
        playerGame('rock');
    });

    document.querySelector('.js-paper-button')
    .addEventListener('click', () => {
        playerGame('paper');
    });

    document.querySelector('.js-scissors-button')
    .addEventListener('click', () => {
        playerGame('scissors')
    })

    document.body.addEventListener('keydown', (event)=> {
        if(event.key === 'r'){
            playerGame('rock');
        } else if (event.key ==='p'){
            playerGame('paper')
        }else if (event.key === 's'){
            playerGame('scissors');
        }
    })
    
   function playerGame(playerMoves){
    const computerMove=pickComputerMove();

    let result = '';
    if(playerMoves === 'scissors'){
        if(computerMove === 'rock'){
        result = 'you lose';

        } else if(computerMove === 'paper'){
        result = 'you win';
        } else if(computerMove === 'scissors'){
        result = 'tie';
        }

       
    }else if(playerMoves ==='paper'){ 
        if(computerMove === 'rock'){
            result = 'you win';
        } else if(computerMove === 'paper'){
            result = 'tie'
        } else if(computerMove === 'scissors'){
            result = 'you lose';
            }
          
    }else if(playerMoves === 'rock'){
        if(computerMove === 'rock'){
            result = 'tie';

        } else if(computerMove === 'paper'){
            result = 'you lose';
        } else if(computerMove === 'scissors'){
            result = 'you win';
        }
       
    }
    if(result === 'you win'){
        score.wins += 1;

    }else if(result === 'you lose'){
        score.losses += 1;

    }else if(result === 'tie'){
        score.ties += 1;

    }
    localStorage.setItem('score',JSON.stringify(score));
    
    updatescore();

    document.querySelector('.js-result')
    .innerHTML = result;

    document.querySelector('.js-moves')
    .innerHTML = ` you 
<img src="./images/${playerMoves}-emoji.png" class="image">
<img src="./images/${computerMove}-emoji.png" class="image">
computer`;

    
}
 function updatescore(){
        document.querySelector(".js-scorebutton").innerHTML = `Wins : ${score.wins},losses :${score.losses},ties : ${score.ties}`;
      

    }
   
function pickComputerMove(){
    
    const randomNumber = Math.random();
   
    let computerMove = '';
    if(randomNumber>=0 && randomNumber<=1/3 ){
        computerMove='rock';
    } else if (randomNumber >=1/3 && randomNumber <=2/3){
        computerMove='paper';
    } else if (randomNumber >= 2/3 && randomNumber <=1){
        computerMove='scissors';
    }

   return computerMove;
}