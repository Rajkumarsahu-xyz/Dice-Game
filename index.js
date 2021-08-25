var randomNumber1;
var r1 = (Math.ceil(Math.random(randomNumber1)*6)) ;

var randomDiceImg1 = "dice" + r1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomDiceImg1);


var randomNumber2;
var r2 = (Math.ceil(Math.random(randomNumber1)*6)) ;

var randomDiceImg2 = "dice" + r2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomDiceImg2);

if(r1>r2)
document.querySelector("h1").innerHTML = "🚩Player1 Wins";
else if(r1<r2)
document.querySelector("h1").innerHTML = "Player2 Wins🚩";
else
document.querySelector("h1").innerHTML = "Draw!";