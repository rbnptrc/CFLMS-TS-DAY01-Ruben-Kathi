var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age, jobTitle) {
        this.name = "";
        this.age = "";
        this.jobTitle = "";
        this.name = name;
        this.age = age;
        this.jobTitle = jobTitle;
        /*arr.push(this);   */
    }
    Person.prototype.sentence = function () {
        return "Hello there, My Name is " + this.name + " and I am " + this.age + " years old, and I am a " + this.jobTitle;
    };
    return Person;
}());
var display = new Person("Mark", "25", "Devloper");
//console.log(display.sentence());
document.getElementById("print1").innerHTML = display.sentence();
/*let arr = [];*/
//basic 2
var additional = /** @class */ (function (_super) {
    __extends(additional, _super);
    function additional(name, age, jobTitle, salary, jobLocation) {
        var _this = _super.call(this, name, age, jobTitle) || this;
        _this.salary = salary;
        _this.jobLocation = jobLocation;
        return _this;
    }
    additional.prototype.additionals = function () {
        return _super.prototype.sentence.call(this) + " and I get " + this.salary + " every month, and I work in " + this.jobLocation + ".";
    };
    return additional;
}(Person));
var newguy = new additional("Mike", 30, "ScrumMaster", 4000, "Amsterdam");
document.getElementById("print2").innerHTML = newguy.additionals();
