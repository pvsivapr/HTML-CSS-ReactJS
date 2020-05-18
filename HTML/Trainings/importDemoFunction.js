/*********************************************** */
import {myCities1, funISPs1, cars1} from './exportDemoFunction.js'

console.log("\n way to export a variable");
console.log(myCities1);

console.log("\n way to export a function");
funISPs1();

console.log("\n way to export a class and use its methods");
console.log(cars1);
var _cars1 = new cars1();
_cars1.carEngine();
//cars.carEngine();
/************************************************ */
import {funfunISPs} from './exportDemoFunction.js'

console.log("\n way to export a function using a alias name, If we have to import more modules and many of them are having multiple functions with same name then we can export and import a function with an alias");
funfunISPs();
/*********************************************** */
import ExportDemoClass from './exportDefaultDemo.js'
var fullClass = new ExportDemoClass();
fullClass.mySkills();
/*********************************************** */
