const btnWord1 = document.querySelector("#btn-word1");
const btnWord2 = document.querySelector("#btn-word2");

let word1 = new String;
let word2 = new String;

let word1Print = document.querySelector("#chosen-word");
let word2Print = document.querySelector("#guessed-word");

const array1 = [];
const array2 = [];


btnWord1.addEventListener("click", () => {
    word1 = document.querySelector(".chosen").value.toLowerCase();
    console.log(word1, word1.length);
    btnWord1.disabled = true;
    word1Print.append(word1);

});

const newArray = [];

export function check(word1, word2) {

    for (let i=0; i < word1.length; i++) {
        array1.push(word1[i]);
    }

    for (let i=0; i < word2.length; i++) {
        array2.push(word2[i]);
    }

    for (let i=0; i< array1.length; i++) {
        if (array1[i] === array2[i]) {
            let obj = {letter: array2[i], result: "correct"};
            newArray.push(obj);
        } else if (array1.includes(array2[i])) {
            let obj2 = {letter: array2[i], result: "misplaced"};
            newArray.push(obj2);
        } else {
            let obj3 = {letter: array2[i], result: "incorrect"};
            newArray.push(obj3);
        }
    }
    
    console.log(newArray);
};


btnWord2.addEventListener("click", () => {
    word2 = document.querySelector(".guess").value.toLowerCase();
    console.log(word2, word2.length);
    btnWord2.disabled = true;
    word2Print.append(word2);
    check(word1, word2);

});



// newArray.includes({letter: array2[i], result: "correct"})