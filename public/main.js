const btnWord1 = document.querySelector("#btn-word1");
const btnWord2 = document.querySelector("#btn-word2");

let word1 = new String;
let word2 = new String;

let word1Print = document.querySelector("#chosen-word");
let word2Print = document.querySelector("#guessed-word");

const array1 = [];
const array2 = [];


btnWord1.addEventListener("click", () => {
    word1 = document.querySelector(".chosen").value;
    console.log(word1, word1.length);
    
    word1Print.append(word1);

});

const newArray = [];

function check(word1, word2) {

    for (let i=0; i < word1.length; i++) {
        //console.log(word1[i]);
        array1.push(word1[i]);
    }

    console.log(array1);

    for (let i=0; i < word2.length; i++) {

        //console.log(word2[i]);
        array2.push(word2[i]);

    }

    console.log(array2);


    


};



btnWord2.addEventListener("click", () => {
    word2 = document.querySelector(".guess").value;
    console.log(word2, word2.length);

    word2Print.append(word2);

    check(word1, word2);

});



