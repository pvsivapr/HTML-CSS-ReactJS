var cities = ["Rayavaram", "Kakinada", "Hyderabad", "New York", "Chicago"];
var citiesCopy = [...cities];

function arrayFunctions()
{
    console.log("  ");
    console.log("Task 2 : ");
    cities.splice(2, 1);
    citiesCopy[citiesCopy.length] = "Sanfranscisco";
    citiesCopy.push("Switzerland");
    let array = new PrintArrays(cities, citiesCopy);
}

function loopPrintEachArrayElement(array)
    {
        array.forEach(element => {
            console.log(element);
        });
    }

    arrayFunctions();