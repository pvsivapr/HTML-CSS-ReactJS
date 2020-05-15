var GetEmployeeData = (name, city) => {
    let response = "";
    const companyName = "Cognizant";
    response = "My name is " + name + ".\nI am From " + city + ".\nI work with ${companyName}" + companyName;
    return response;
};

function onPageStart(){
    console.log("Task 1 : ");
    console.log(GetEmployeeData("Sivaprasad", "Rayavaram"));
}

onPageStart();//thirdAssignment_ArrowFunctions