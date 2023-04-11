let playerOne = Math.floor(Math.random() * 6 + 1)
let playerTwo = Math.floor(Math.random() * 6 + 1)


document.querySelector(".img1").setAttribute("src", "images/dice"+playerOne.toString()+".png")
document.querySelector(".img2").setAttribute("src", "images/dice"+playerTwo.toString()+".png")


if(playerOne == playerTwo){
	document.getElementsByTagName("h1")[0].innerHTML = "Draw!";
}

if(playerOne > playerTwo){
	document.getElementsByTagName("h1")[0].innerHTML = "player 1 wins";
}

if(playerOne < playerTwo){
	document.getElementsByTagName("h1")[0].innerHTML = "player 2 wins";
}