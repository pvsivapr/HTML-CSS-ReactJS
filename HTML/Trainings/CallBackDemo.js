function createQuote(quote, anySuccessCallBackFunction, anyFailedCallBackFunction)
{
  if(quote !== undefined && quote !== "")
  {
    var myquote = "This is my Quote: \n" + quote;
    anySuccessCallBackFunction(myquote);
  }
  else
  {
    anyFailedCallBackFunction();
  }
}

function IfSuccessful(response)
{
  console.log(response);
}

function IfFailed()
{
  console.log("Value should not be empty or undefined");
}

createQuote("Hello CallBack", IfSuccessful, IfFailed);
createQuote("", IfSuccessful, IfFailed);

IfSuccessful("Call back involves a lot of code, So to overcome this problem, ES6 introduced Promise concept --> PromiseDemo.js");