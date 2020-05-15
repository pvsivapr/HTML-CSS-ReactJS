class PrintArrays
{
    constructor (array1, array2)
    {
        console.log("printing the first array");
        this.loopPrintEachArrayElement(array1);
        console.log("Now printing the second array");
        this.loopPrintEachArrayElement(array2);
    }

    loopPrintEachArrayElement(array)
    {
        array.forEach(element => {
            console.log(element);
        });
    }
}


function main()
{
    console.log("  ");
    console.log("Task 3 : ");
    testArray1 = ["this", "is", "my", "first", "array"];
    testArray2 = ["this", "is", "my", "second", "array"];
    let array = new PrintArrays(testArray1, testArray2);
}
main();