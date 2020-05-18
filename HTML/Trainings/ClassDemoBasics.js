class person1
{
  constructor(name0)
  {
    console.log("Test 1 with different variable names name1, name0");
    this.name1 = name0;
  }
  setName(name0)
  {
    this.name1 = name0;
  }
  getName()
  {
    return this.name1;
  }
}
var person1ClassTest = new person1("Sivaprasad");
let name_Person1ClassTest = person1ClassTest.getName();
console.log(name_Person1ClassTest);

class person2
{
  constructor(name2)
  {
    console.log("Test 2 with same variable names name2 but differentiating by using 'this' keyword");
    this.name2 = name2;
  }
  setName(name2)
  {
    this.name2 = name2;
  }
  getName()
  {
    return this.name2;
  }
}
var person2ClassTest = new person2("Sivaprasad Reddy");
let name_Person2ClassTest = person2ClassTest.getName();
console.log(name_Person2ClassTest);

class person3
{
  constructor(name3)
  {
    console.log("Test 3 with a method and a static variable(age)");
    this.name3 = name3;
    this.age3 = 28
  }
  sayHello()
  {
    return (`Hi, I am ${this.name3}, I am ${this.age3} years old`);
  }
}
var person3ClassTest = new person3("Sivaprasad Reddy");
let name_Person3ClassTest = person3ClassTest.sayHello();
console.log(name_Person3ClassTest);

class person4
{
  constructor(name4)
  {
    console.log("Test 4 using age from previous class, test is to check how this keyword works");
    this.name4 = name4;
    this.age4 = 28
  }
  sayHello()
  {
    return (`Hi, I am ${this.name4}, I am ${this.age3} years old`);
  }
}
var person4ClassTest = new person4("Sivaprasad Reddy");
let name_Person4ClassTest = person4ClassTest.sayHello();
console.log(name_Person4ClassTest);

class person5
{
  constructor(name5)
  {
    console.log("Test 5, Testing a static method in the class, because of static method the variables are not intiated, directly using in the 'static' method, which gives 'undefined' as output");
    this.name5 = name5;
    this.age5 = 28
  }
  static sayHello()
  {
    return (`Hi, I am ${this.name5}, I am ${this.age5} years old`);
  }
}
console.log("Test 5, Testing a static method in the class, because of static method the variables are not intiated, directly using in the 'static' method, which gives 'undefined' as output");
let name_Person5ClassTest = person5.sayHello();
console.log(name_Person5ClassTest);