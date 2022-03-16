import { checkWords } from "../check.js";

//Test for words cykla and hallå

let word1 = "cykla";
let word2 = "hallå";

// Fourth letter in both word is correct, on the same place in both
test("Check if letter is correct", () => {
    const arr = checkWords(word1, word2);
    expect(arr).toContainEqual({ letter: 'l', result: 'correct' });
});

// Letters in both words are not the same
test("Check if letter is incorrect", () => {
    const arr = checkWords(word1, word2);
    expect(arr).toContainEqual({ letter: 'h', result: 'incorrect' });
    expect(arr).toContainEqual({ letter: 'l', result: 'incorrect' });
});

// Second letter in the guessed word is correct but not on the right place
test("Check if letter is misplaced", () => {
    const arr = checkWords(word1, word2);
    expect(arr).toContainEqual({ letter: 'a', result: 'misplaced' });
});

// Tests two words which letters repeats itself in the word guessed but are once in chosen word
test("Check if guessed word with repeiting letters doesn't get misplaced on a repeating letter ", () => {
    const arr = checkWords("extra", "xanax");
    expect(arr).toContainEqual({ letter: 'x', result: 'misplaced' });
    expect(arr).toContainEqual({ letter: 'a', result: 'misplaced' });
    expect(arr).toContainEqual({ letter: 'n', result: 'incorrect' });
    expect(arr).toContainEqual({ letter: 'a', result: 'incorrect' });
    expect(arr).toContainEqual({ letter: 'x', result: 'incorrect' });
}); 