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






