/* Opgave 1*/

let myBall=document.getElementById('ballOne');
let myBuhButton=document.getElementById('buhOneButton');

myBuhButton.addEventListener('click',()=>{
    myBall.classList.toggle('animateRight');
    });



/*opgave 2*/

let myBalls=document.getElementsByClassName('balls');
let myBuhTwoButton=document.getElementById('buhTwoButton');

myBuhTwoButton.addEventListener('click',()=>{
    for(const balls of myBalls)
    balls.classList.toggle('animateRight');
    });

/*opgave 3*/

const myhardBalls = document.getElementsByClassName('hardBalls');
let mybuhThreeButton = document.getElementById('buhThreeButton');

mybuhThreeButton.addEventListener('click',()=>{
    let direction = "right";

    for(const OneSingleBalls of myhardBalls){

    if(direction == "right"){
        OneSingleBalls.classList.toggle('animateRight');
        direction = "left";
        
        }
    else{ 
        OneSingleBalls.classList.toggle('animateLeft');
        direction = "right";
     
    }}
    });

    // for(const hardBalls of myhardBalls)
    // hardBalls.classList.toggle('animateRight');

    // if(const hardBalls of myhardBalls)
    // hardBalls.classList.toggle('animateLeft');

    // });




