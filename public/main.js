let NumberOfWords = 6;
let NumberOfChars = 5;

let gameDiv = document.getElementById("game");

for (let i = 0; i < NumberOfWords; i++) {
  let wordDiv = document.createElement("div");
  wordDiv.className = "word";

  for (let j = 0; j < NumberOfChars; j++) {
    let charDiv = document.createElement("div");
    charDiv.className = "letter";
    wordDiv.appendChild(charDiv);
  }
  gameDiv.appendChild(wordDiv);
}

let curWord = 0;
let curChar = 0;

document.addEventListener("keydown", async function (event) {
  let wordDiv = gameDiv.children[curWord]; //get word

  if (event.code == "Backspace") {
    let charDel = wordDiv.children[curChar - 1];
    charDel.innerHTML = " ";
    curChar--;
  } else if (event.code == "Enter") {
    if (curChar == NumberOfChars) {
      getCurrentword();
      console.log("batata pressed enter ");
      curWord++;
      curChar = 0;
    }
  } else if (curChar < NumberOfChars) {
    let charArr = wordDiv.children[curChar];
    charArr.innerHTML = event.key;
    curChar++;
  }
});

function getCurrentword() {
  let word = "";
  let wordDiv = gameDiv.children[curWord]; // Current word
  for (let i = 0; i < NumberOfChars; i++) {
    let charDiv = wordDiv.children[i]; // Current char
    word = word + charDiv.innerHTML;
  }
  console.log(word);
}
