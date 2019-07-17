const message = document.querySelector(".message");
const button = document.querySelectorAll(".play");
const coinArray = ["Heads", "Tails"];
let score = [0, 0];

const tossCoin =  function (e) {
    let playerGuess = e.target.innerHTML;
    let computerToss = Math.floor(Math.random()*2);
    let computerGuess = coinArray[computerToss];
    let outPut = "";
    if(playerGuess === computerGuess){
        outPut += "Player Wins";
        score[0]++;
    }else if(playerGuess === "Reset") {
        outPut = "";
        score = [0, 0];
    }else{
        outPut += "Computer Wins";
        score[1]++;
    }

    message.innerHTML = `${outPut} <br>
    Player: ${score[0]} <br>
    Computer: ${score[1]}`
};


for(let i = 0; i < button.length; i++){
    //console.log(button[i])
    button[i].addEventListener("click", tossCoin);
}

