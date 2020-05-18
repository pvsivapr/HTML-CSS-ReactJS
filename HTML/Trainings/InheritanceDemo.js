class Person
{
  constructor(name)
  {
    this.name = name;
  }
  greet()
  {
    console.log("Hello " + this.name + " " + this.age);
  }
}

class ExtendedPerson extends Person{
  constructor(name, age)
  {
    super(name);
    this.age = age;
  }
  greet()
  {
    console.log(this.name);
  }
  greetTwice()
  {
    super.greet();
    this.greet();
  }
}

const person = new ExtendedPerson("SivaPrasad Reddy", 29);

console.log(person.greetTwice());