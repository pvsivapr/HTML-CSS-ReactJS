class PrintArrays
{
    array1 = [];
    array2 = [];
    constructor (_array1, _array2)
    {
        this.array1 = _array1;
        this.array2 = _array2;
    }

    printArrays()
    {
        console.log("printing the first array");
        this.loopPrintEachArrayElement(this.array1);
        console.log("Now printing the second array");
        this.loopPrintEachArrayElement(this.array2);
    }

    loopPrintEachArrayElement(array)
    {
        array.forEach(element => {
            console.log(element);
        });
    }

    /*
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
    */
}


function main()
{
    console.log("  ");
    console.log("Task 3 : ");
    testArray1 = ["this", "is", "my", "first", "array"];
    testArray2 = ["this", "is", "my", "second", "array"];
    let array = new PrintArrays(testArray1, testArray2);
    array.printArrays();
}
main();