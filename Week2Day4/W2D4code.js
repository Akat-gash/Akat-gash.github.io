
/////////////ANSWER TO QUESTION 1 //////////////////////
String.prototype.filterfunc = function (bannedarr) {

    var splittedarray = this.split(" ");

    var arr = splittedarray.filter(word => !bannedarr.includes(word));
    return arr.join(' ');

};

var x = "good bad angel evil saint";
console.log(x.filterfunc(["bad", "evil"]));

/////////////ANSWER TO QUESTION 2 //////////////////////
Array.prototype.bubbleSort = function () {
    let len = this.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (this[j] > this[j + 1]) {
                let tmp = this[j];
                this[j] = this[j + 1];
                this[j + 1] = tmp;
            }
        }
    }
    return this;
};
console.log([6, 4, 0, 3, -2, 1].bubbleSort());

//////////////ANSWER TO QUESTION 3 //////////////////////
var Person = function () { };
Person.prototype.initialize = function (name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.describe = function () {
    return this.name + ", " + this.age + ", years old";
}

var Teacher = function () { };
Teacher.prototype = new Person();
Teacher.prototype.teach = function (subject) {
    console.log(this.name + " is now teaching " + subject);
}

var teacher1 = new Teacher();
teacher1.initialize("Meron", 25);
teacher1.teach("JavaScript");

