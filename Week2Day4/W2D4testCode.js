//1. Filtering banned words test code
const bannedWords1 = ['evil', 'sad', 'bad'];
const bannedWords2 = ['sad'];
describe("Filter", function () {
    let expected1 = "Meron is good friend";
    let expected2 = "Meron might feel happy right now!";

    it(`The result after filtering the words [${bannedWords1}] from the string is ... ${expected1}`, function () {
        assert.equal("Meron is good evil sad friend".filterfunc(bannedWords1), expected1);
    });

    it(`The result after filtering the words [${bannedWords2}] from the string is ... ${expected2}`, function () {
        assert.equal("Meron might feel sad happy right now!".filterfunc(bannedWords2), expected2);
    });
});



//2 Sorting elements of an array test code

const arr1 = [6, 4, 0, 3, -2, 1];
const arr2 = [-100, 1221, -89, 1, 0]
describe("bubbleSort", function () {
    let expected1 = [-2, 0, 1, 3, 4, 6];
    let expected2 = [-100, -89, 0, 1, 1221];
    it(`The result of sorting the items in [${arr1}] is ....[${expected1}]`, function () {
        assert.deepEqual(arr1.bubbleSort(), expected1);
    });
    it(`The result of sorting the items in [${arr2}] is ....[${expected2}]`, function () {
        assert.deepEqual(arr2.bubbleSort(), expected2);
    });
});