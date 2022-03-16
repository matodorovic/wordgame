import { checkWords } from "../check.js";

const btnWord1 = document.querySelector("#btn-word1");
const btnWord2 = document.querySelector("#btn-word2");

let word1 = new String();
let word2 = new String();

let word1Print = document.querySelector("#chosen-word");
let word2Print = document.querySelector("#guessed-word");
let errorPrint = document.querySelector("#error-length");

btnWord1.addEventListener("click", () => {
  word1 = document.querySelector(".chosen").value.toLowerCase();
  if (!word1) {
    errorPrint.innerHTML = "U need to write a word to continue."
  } else {
  errorPrint.innerHTML = "";
  console.log(word1, word1.length);
  btnWord1.disabled = true;
  word1Print.append("*****");
  document.querySelector(".chosen").value = null;
  }
  
});

btnWord2.addEventListener("click", () => {
  word2 = document.querySelector(".guess").value.toLowerCase();
  if (word1 === word2) {
    document.querySelector("#won-msg").innerHTML = "Congratulations u won!";
  } else if (word1.length != word2.length) {
    errorPrint.innerHTML = "Words have to have same length.";
  } else {
    errorPrint.innerHTML = "";
    console.log(word2, word2.length);
    btnWord2.disabled = true;
    word2Print.append(word2);
    checkWords(word1, word2);
  }
  document.querySelector(".guess").value = null;
});
