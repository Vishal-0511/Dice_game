function handleClick(randomNumber1,randomNumber2){
    
    var x, y;
    x = "images" + "/" + "dice" + randomNumber1 + ".png"
    y = "images" + "/" + "dice" + randomNumber2 + ".png"
    
    document.getElementsByClassName("img")['0'].setAttribute("src", x)
    document.getElementsByClassName("img")['1'].setAttribute("src", y)
    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 1 Wins 🚩"
    }
    else if (randomNumber1 < randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 2 Wins 🚩"
    }
    else {
        document.querySelector("h1").innerHTML = "Draw"
    }

}    
function clicked(){
    var randomNumber1 = Math.floor((Math.random()) * 6) + 1;
    var randomNumber2 = Math.floor((Math.random()) * 6) + 1;
    handleClick(randomNumber1,randomNumber2)
    
}    

document.querySelector ("button").addEventListener("click",clicked)

