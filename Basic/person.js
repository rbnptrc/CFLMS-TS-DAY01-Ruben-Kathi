var Person = /** @class */ (function () {
    function Person(name, age, jobTitle) {
        this.name = "";
        this.age = "";
        this.jobTitle = "";
        this.name = name;
        this.age = age;
        this.jobTitle = jobTitle;
    }
    Person.prototype.sentence = function () {
        return "Hello there, My Name is " + this.name + " and I am " + this.age + " years old, and I am a " + this.jobTitle;
    };
    return Person;
}());
var display = new Person("Mark", "25", "Devloper");
//console.log(display.sentence());
document.getElementById("print").innerHTML = display.sentence();
