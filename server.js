const express = require("express");
const app = express();

const toWin = "HAPPY";

app.get("/wordle/:guess", function (req, res) {
  const userGuess = req.params.guess.toUpperCase();
  let arr = ["", "", "", "", "",];

  let map = {
    H: 1,
    A: 1,
    P: 2,
    Y: 1,
  };
  for (let i = 0; i < userGuess.length; i++) {
    if (userGuess[i] === toWin[i]) {
      arr[i] = "green";
      let curLetter = userGuess[i];
      map[curLetter]--;
    }
  }

  res.send("Param recieved: " + userGuess);
});

app.listen(3000);
