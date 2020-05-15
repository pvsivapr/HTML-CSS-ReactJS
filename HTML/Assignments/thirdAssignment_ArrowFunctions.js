var getEmployeeData = (name, city) => {
    let response = "";
    const companyName = "Cognizant";
    response = "My name is " + name + ".\nI am From " + city + ".\nI work with " + companyName;
    return response;
};

function onPageStart()
{
    console.log("  ");
    console.log("Task 1 : ");
    console.log(getEmployeeData("Sivaprasad", "Rayavaram"));
}

onPageStart();