import check from "./main.js";

//Test for words cykla and hallå

let word1 = "cykla";
let word2 = "hallå";

// Fourth letter in both word is correct, on the same place in both
test("Check if letter is correct", () => {
    const word = check(word1, word2);
    expect(word[3]).toBe({ letter: 'L', result: 'correct' });
});

// Letters in both words are not the same
test("Check if letter is incorrect", () => {
    const word = check(word1, word2);
    expect(word[0]).toBe({ letter: 'H', result: 'incorrect' });
    expect(word[2]).toBe({ letter: 'L', result: 'incorrect' });
    expect(word[4]).toBe({ letter: 'Å', result: 'incorrect' });
});

// Second letter in the guessed word is correct but not on the right place
test("Check if letter is misplaced", () => {
    const word = check(word1, word2);
    expect(word[1]).toBe({ letter: 'A', result: 'misplaced' });
});