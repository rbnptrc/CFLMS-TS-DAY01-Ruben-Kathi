class Person{
  name = "";
  age = "";
  jobTitle= "";

  constructor(name,age, jobTitle){
      this.name = name;
      this.age = age;
      this.jobTitle = jobTitle; 
      /*arr.push(this);   */  
  }

  sentence() {
  return `Hello there, My Name is ${this.name} and I am ${this.age} years old, and I am a ${this.jobTitle}`;
}

}

var display = new Person("Mark", "25", "Devloper");

//console.log(display.sentence());

document.getElementById("print1").innerHTML = display.sentence();

/*let arr = [];*/


//basic 2
class additional extends Person
{
  salary;
  jobLocation;

  constructor(name, age, jobTitle, salary, jobLocation)
  {
    super(name, age, jobTitle);
    this.salary = salary;
    this.jobLocation = jobLocation;
  }

  additionals()
  {
    return `${super.sentence()} and I get ${this.salary} every month, and I work in ${this.jobLocation}.`;
  }
}

var newguy = new additional("Mike", 30, "ScrumMaster", 4000, "Amsterdam");

document.getElementById("print2").innerHTML = newguy.additionals();


