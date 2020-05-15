class PrintArrays
{
    constructor (array1, array2)
    {
        console.log("printing the second array");
        this.LoopPrintEachArrayElement(array1);
        console.log("Now printing the second array");
        this.LoopPrintEachArrayElement(array2);
    }

    LoopPrintEachArrayElement(array)
    {
        array.forEach(element => {
            console.log(element);
        });
    }
}


function main()
{
    console.log("Task 3 : ");
    a1 = ["this", "is", "my", "first", "array"];
    a2 = ["this", "is", "my", "second", "array"];
    let array = new PrintArrays(a1, a2);
}
main();
