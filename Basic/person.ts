class Person{
  name = "";
  age = "";
  jobTitle= "";

  constructor(name,age, jobTitle){
      this.name = name;
      this.age = age;
      this.jobTitle = jobTitle;      
  }

  sentence() {
  return `Hello there, My Name is ${this.name} and I am ${this.age} years old, and I am a ${this.jobTitle}`;
}

}



var display = new Person("Mark", "25", "Devloper");


//console.log(display.sentence());

document.getElementById("print").innerHTML = display.sentence();

