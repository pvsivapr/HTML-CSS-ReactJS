function Student1(_name1)
{
  this.name1 = _name1;
}
//This is how to declare a prototype
Student1.prototype.printName = function(){
  console.log(this.name1);
}
var studentTest11 = new Student1("1_Sivaprasad");
var studentTest12 = new Student1("1_PVSPReddy");
studentTest11.printName();
studentTest12.printName();
/*********************************************************** */

function Student2(_name)
{
  this.name2 = _name;
  this.printName = function()
  {
    console.log(this.name2)
  }
}
//This is how to declare a prototype
var studentTest21 = new Student2("2_Sivaprasad");
var studentTest22 = new Student2("2_PVSPReddy");
// studentTest21.printName();
// studentTest22.printName();
console.log(studentTest21.printName() == studentTest22.printName());
/*********************************************************** */

function Student3(_name)
{
  this.name3 = _name;
}
//This is how to declare a prototype
Student3.prototype.printName = function(){
  console.log(this.name3);
}
var studentTest31 = new Student1("3_Sivaprasad");
var studentTest32 = new Student1("3_PVSPReddy");
console.log(studentTest31.printName() == studentTest32.printName());

/*********************************************************** */
