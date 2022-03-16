# wordgame

const btnWord1 = document.querySelector("#btn-word1");
const btnWord2 = document.querySelector("#btn-word2");

let word1 = new String;
let word2 = new String;

let word1Print = document.querySelector("#chosen-word");
let word2Print = document.querySelector("#guessed-word");
let errorPrint = document.querySelector("#error-length");


btnWord1.addEventListener("click", () => {
    word1 = document.querySelector(".chosen").value.toLowerCase();
    console.log(word1, word1.length);
    btnWord1.disabled = true;
    word1Print.append(word1);

});

const newArray = [];

export function check(word1, word2) {

    const array1 = word1.split("");
    const array2 = word2.split("");



for (let i=0; i< array1.length; i++) {
    if (array1[i] === array2[i]) {
        let obj = {letter: array2[i], result: "correct"};
        newArray.splice(i, 0, obj);
        array1.splice(i, 1, 2);
        array2.splice(i, 1, 2);
    } else {
        if  (array1[i] !== array2[i]) {
            let obj3 = {letter: array2[i], result: "incorrect"};
            newArray.splice(i, 0, obj3);
           
        } 
    }
}

//for (let i=0; i< array1.length; i++) {

//}

for (let i=0; i< array1.length; i++) {
    if (array1[i] !== array2[i] && array1.includes(array2[i])) {
        let obj2 = {letter: array2[i], result: "misplaced"};
        newArray.splice(i, 1, obj2); 


    }
}
        

return newArray;
}




btnWord2.addEventListener("click", () => {
    word2 = document.querySelector(".guess").value.toLowerCase();
    if (word1.length != word2.length) {
        errorPrint.append("Words have to have same length.")
    } else {
    console.log(word2, word2.length);
    btnWord2.disabled = true;
    word2Print.append(word2);
    check(word1, word2);
    console.log(newArray);
    }
});



// newArray.includes({letter: array2[i], result: "correct"})
