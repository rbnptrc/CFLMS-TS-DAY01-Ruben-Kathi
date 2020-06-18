//basic 1
class Person {
   Name  = ""; 
   age  = "";
   jobTitle  = "";    
constructor(name, age, jobTitle) { 
       this.Name = name;
       this.age = age;
       this.jobTitle = jobTitle;
   }
   name() { 
       return `Hello there, My name is ${this.Name} and i am ${this.age} years old, and I am a ${this.jobTitle}`;
   }
   
}

var ich = new Person("kathrin", 35, "Webdeveloper");

document.getElementById("result").innerHTML = ich.name();

//basic 2
class more extends Person
{
  salary;
  jobLocation;

  constructor(name, age, jobTitle, salary, jobLocation)
  {
    super(name, age, jobTitle);
    this.salary = salary;
    this.jobLocation = jobLocation;
  }

  More()
  {
    return `${super.name()} and I get ${this.salary} every month, and I work in ${this.jobLocation}.`
  }
}

var again = new more("kathrin", 35, "Webdeveloper", 2500, "tahiti");

document.getElementById("result2").innerHTML = again.More();


