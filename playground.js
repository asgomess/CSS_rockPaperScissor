window.addEventListener("load", () => {

    const app = document.createElement("div");
    app.classList.add("container-app");
    document.body.appendChild(app);

    const game = document.createElement("div");
    game.classList.add("game");

    // ------------------CREATING PLAYERS-------------------

    const player1 = document.createElement("div");
    player1.classList.add("player1");
    const player1Img = document.createElement("img");
    player1Img.id = "player1";
 
    player1Img.alt = "Player 1 ";
    player1.appendChild(player1Img);

    const player2 = document.createElement("div");
    player2.classList.add("player2");
    const player2Img = document.createElement("img");
    player2Img.id = "player2";
    player2Img.alt = "Player 2";
    player2.appendChild(player2Img);

    // ------------------ADDING PLAYERS TO GAME------------------- 
    game.appendChild(player1);
    game.appendChild(player2);

    // ------------------ADDING GAME TO APP-CONTAINER-------------------
    app.appendChild(game);

    // ------------------BUTTON PLAYROUND-------------------
    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");
    const playBtn = document.createElement("button");
    playBtn.textContent = "PLAY ROUND";
    buttonContainer.appendChild(playBtn);
    app.appendChild(buttonContainer);

    // ------------------POP-UP FOR WINNER-------------------
    const roundResult = document.createElement("div");
    roundResult.id = "roundResult";      // you can style #roundResult in CSS
    document.body.appendChild(roundResult);

    // ------------------LOGIC-------------------
    const moves = ["rock", "paper", "scissors"];

    function getRandomMove() {
        const index = Math.floor(Math.random() * moves.length);
        return moves[index];
    }

    function determineWinner(p1Move, p2Move) {
        if (p1Move === p2Move) return "Draw!";
        if (
            (p1Move === "rock" && p2Move === "scissors") ||
            (p1Move === "paper" && p2Move === "rock") ||
            (p1Move === "scissors" && p2Move === "paper")
        ) {
            return "Player 1 wins!";
        } else {
            return "Player 2 wins!";
        }
    }

    // ------------------EVENT LISTENER PLAYROUND-------------------
    playBtn.addEventListener("click", () => {
        const p1Move = getRandomMove();
        player1Img.src = `./assets/${p1Move}.png`;
        player1Img.classList.add("active");

        const p2Move = getRandomMove();
        player2Img.src = `./assets/${p2Move}.png`;
        player2Img.classList.add("active");

        const winnerText = determineWinner(p1Move, p2Move);

    setTimeout(() => {
        const winnerText = determineWinner(p1Move, p2Move);

        roundResult.textContent = winnerText;
        roundResult.style.display = "block";

        
        setTimeout(() => {
            roundResult.style.display = "none";
        }, 1500);

    }, 1000); 




    });

});
