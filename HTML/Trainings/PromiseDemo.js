let demoPromise = new Promise(function(resolve, reject)
{
  let isClean = false;
  if(isClean)
  {
    resolve("Success");
  }
  else
  {
    reject("Unsuccessful");//will come in catch block
    console.log("If 'promise' is 'reject' then it is received in the 'catch' block of 'then'");
  }
});

//Promise will be executed using .then
demoPromise.then(function(result)
{
  console.log('the result is ', result);
}).catch(function(result)
{
  console.log('the Error is ', result);
});


