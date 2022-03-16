export function checkWords(word1, word2) {
  const newArray = [];
  const array1 = word1.split("");
  const array2 = word2.split("");

  let obj = {};

  for (let i = 0; i < array2.length; i++) {
    if (array1[i] === array2[i]) {
      obj = { letter: array2[i], result: "correct" };
      newArray.splice(i, 0, obj);
      array1.splice(i, 1);
      //array2.splice(i, 1);
    } else {
      obj = { letter: array2[i], result: "incorrect" };
      newArray.splice(i, 0, obj);
    }
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1.includes(array2[i]) && array1[i] !== array2[i]) {
      obj = { letter: array2[i], result: "misplaced" };
      newArray.splice(i, 1, obj);
      array1.splice(i, 1);
    }
  }

  let ul = document.querySelector(".word-compared");

  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i].result === "correct") {
      let li = document.createElement("li");
      ul.appendChild(li);
      li.innerHTML = newArray[i].letter + "&nbsp;";
      li.classList.add("correct");
    } else if (newArray[i].result === "incorrect") {
      let li = document.createElement("li");
      ul.appendChild(li);
      li.innerHTML = newArray[i].letter + "&nbsp;";
      li.classList.add("incorrect");
    } else {
      let li = document.createElement("li");
      ul.appendChild(li);
      li.innerHTML = newArray[i].letter + "&nbsp;";
      li.classList.add("mis");
    }
  }

  console.log(newArray);
  return newArray;
}
