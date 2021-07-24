
/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, found) {
    if (expected === found) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + found;
    }
}

function isEqual(expected, found) {

    // if length is not equal
    if (expected.length != found.length) {
        return "TEST FAILED. Expected " + expected + " found " + found;
    } else {
        // comapring each element of array
        for (var i = 0; i < expected.length; i++) {
            if (expected[i] != found[i])
                return "TEST FAILED. Expected " + expected + " found " + found;
        }
        return "TEST SUCCEEDED";
    }
}


/* max function takes two arguments and returns the maximum value */
function max(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    };
}
console.log("The maximum value between 2 and 3 is 3: "+myFunctionTest(3, max(2, 3)));
console.log("The maximum value between 2 and 3 is 2: "+myFunctionTest(2, max(2, 3)));


/* maxofThree function takes 3 numbers as arguments and returns the largest */
function maxOfThree(a, b, c) {
    return max(max(a, b), c);
}
console.log("The maximum value between 2, 3 and 4 is 4: "+myFunctionTest(4, maxOfThree(2,3,4)));
console.log("The maximum value between 2 and 3 is 2: "+myFunctionTest(2, maxOfThree(2,3,4)));


/* isVowel function in which it checks if the 
given string value is vowel and has length of 1*/
function isVowel(s) {
    var b = s.toUpperCase();
    if (b.length == 1 && (b === "A" || b === "O" || b === "I" || b === "E" || b === "U")) {
        return true;
    } else {
        return false;
    }
}

console.log("Expected output of isVowel(e) is true: " + myFunctionTest(true, isVowel("e")));
console.log("Expected output of isVowel(E) is true: " + myFunctionTest(true, isVowel("E")));
console.log("Expected output of isVowel(d) is false: " + myFunctionTest(false, isVowel("d")));
console.log("Expected output of isVowel(D) is false: " + myFunctionTest(false, isVowel("D")));
/* sum function sums all the given array list and returns the sum value */
function sum(x) {
    let sum = 0;
    for (let i = 0; i < x.length; i++) {
        sum = sum + x[i];
    }
    return sum;
}
console.log("The sum of array [1,2,3,4,5] is 15: " + myFunctionTest(15, sum([1, 2, 3, 4, 5])));
console.log("The sum of array [1,2,3,4,5] is 17: " + myFunctionTest(17, sum([1, 2, 3, 4, 5])));


/* multiply function multiplies all the member in the array*/
function multiply(x) {
    let product = 1;
    for (let i = 0; i < x.length; i++) {
        product = product * x[i];
    }
    return product;
}
console.log("The product of array [1,2,3,4,5] is 120: " + myFunctionTest(120, multiply([1, 2, 3, 4, 5])));
console.log("The product of array [1,2,3,4,5] is 100: " + myFunctionTest(100, multiply([1, 2, 3, 4, 5])));


/* reverse function returns a reversed string of the given String*/
function reverse(s) {
    let reversedString = "";
    for (let i = s.length - 1; i >= 0; i--) {
        reversedString = reversedString + s[i];
    }
    return reversedString;
}

console.log("The reversed string of " + "Hello" + " is olleh: " + myFunctionTest("olleh", reverse("hello")));
console.log("The reversed string of " + "Hello" + " is oleh: " + myFunctionTest("oleh", reverse("hello")));



/* findLongestWord function returns the word with longest length from a given array of words*/
function findLongestWord(x) {
    let leng = 0;
    let max = x[0];
    let maxlength = x[0].length;
    for (let i = 1; i < x.length; i++) {
        if (leng < x[i].length) {
            leng = x[i].length;
        }
    }
    return leng;
}
console.log("The longest length from the given array has 9: " + myFunctionTest(9, findLongestWord(["sam", "samsam", "samsamsam"])));
console.log("The longest length from the given array has 34: " + myFunctionTest(34, findLongestWord(["sam", "samsam", "samsamsam"])));



function filterLongWords(x, i) {
    let newarray = [];
    for (let y = 0; y < x.length; y++) {
        if (x[y].length > i) {
            newarray.push(x[y]);
        }
    }
    return newarray;
}

console.log("The filtered array of words are [samsam, samuel]: " + isEqual(["samsam", "samuel"], filterLongWords(["sam", "samsam", "samuel", "ok"], 3)));
console.log("The filtered array of words are [sam, samuel]: " + isEqual(["sam", "samuel"], filterLongWords(["sam", "samsam", "samuel", "ok"], 3)));



        // The following code is for answer for question number 8 (a,b,c)
        const a = [1,3,5,3,3]; 
        const b = a.map(function(elem, i, array) {
          return elem * 10;
        })
        document.writeln(b.toString() + "<br/>");
        const c = a.filter(function(elem, i, array){
          return elem == 3;});
        document.writeln(c.toString() + "<br/>");
        const d = a.reduce(function(prevValue, elem, i, array){
          return prevValue * elem;
        });
        document.writeln(d+ "<br/>");
        
        const d2 = a.find(function(elem) {return elem > 1;}); //3
        const d3 = a.findIndex(function(elem) {return elem > 1;}); //1
        document.writeln(d2+ "<br/>");
        document.writeln(d3);
        