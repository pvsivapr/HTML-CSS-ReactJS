var sessionDataStore = {
    set : function(key, value)
    {
        sessionStorage.setItem(key, value);
    },
    get : function(key)
    {
        var value = sessionStorage.getItem(key);
        return value;
    },
    clearData : function()
    {
        sessionStorage.clear();
    }
}

var localDataStore = {
    set : function(key, value)
    {
        localStorage.setItem(key, value);
    },
    get : function(key)
    {
        var value = localStorage.getItem(key);
        return value;
    },
    clearData : function()
    {
        localStorage.clear();
    }
}

var uName,uPwd, mNum, eMail, rGender, cTAndD = "";
var newLine = "<br />";
function collectData()
{
    uName = document.forms["registrationForm"]["uName"].value;
    uPwd = document.forms["registrationForm"]["uPwd"].value;
    eMail = document.forms["registrationForm"]["eMail"].value;
    uCompany = document.forms["registrationForm"]["uCompany"].value;
    rGender = document.forms["registrationForm"]["rGender"].value;
    cTAndD = document.forms["registrationForm"]["cTAndD"].value;
}

function SelectStorage()
{
    var storageType = document.forms["registrationForm"]["rStore"].value;
    if(storageType === "local")
    {
        onLocalStorageClicked(true);
    }
    else
    {
        onSessionClicked(true);
    }
}

function onSessionClicked(shallSaveData)
{
    if(shallSaveData)
    {
        collectData();
        sessionDataStore.set("uName", uName);
        sessionDataStore.set("uPwd", uPwd);
        sessionDataStore.set("eMail", eMail);
        sessionDataStore.set("uCompany", uCompany);
        sessionDataStore.set("rGender", rGender);
        sessionDataStore.set("cTAndD", cTAndD);
    }
    else
    {
        var output = "";
        if(sessionStorage)
        {
            var suName = sessionDataStore.get("uName");
            var suPwd = sessionDataStore.get("uPwd");
            var seMail = sessionDataStore.get("eMail");
            var suCompany = sessionDataStore.get("uCompany");
            var srGender = sessionDataStore.get("rGender");
            var scTAndD = sessionDataStore.get("cTAndD");
        
            output = "<u><b>The Session Data stored is: </b></u>" + newLine + 
            "User Name = " + suName + newLine +
            "email ID = " + seMail + newLine +
            "Company = " + suCompany + newLine +
            "Gender = " + srGender + newLine ;
        }
        else
        {
            output = "The session data is not available right now"
        }
        var displayDiv = document.getElementById("displayDataDiv");
        displayDiv.innerHTML = output;
    }
}

function onLocalStorageClicked(shallSaveData)
{
    if(shallSaveData)
    {
        collectData();
        localDataStore.set("uName", uName);
        localDataStore.set("uPwd", uPwd);
        localDataStore.set("eMail", eMail);
        localDataStore.set("uCompany", uCompany);
        localDataStore.set("rGender", rGender);
        localDataStore.set("cTAndD", cTAndD);
    }
    else
    {
        var output = "";
        if(localStorage)
        {
            var suName = localDataStore.get("uName");
            var suPwd = localDataStore.get("uPwd");
            var seMail = localDataStore.get("eMail");
            var suCompany = localDataStore.get("uCompany");
            var srGender = localDataStore.get("rGender");
            var scTAndD = localDataStore.get("cTAndD");
        
            output = "<u><b>The Local Data stored is: </b></u>" + newLine +  
            "User Name = " + suName + newLine +
            "email ID = " + seMail + newLine +
            "Company = " + suCompany + newLine +
            "Gender = " + srGender + newLine ;
        }
        else
        {
            output = "The session data is not available right now"
        }
        var displayDiv = document.getElementById("displayDataDiv");
        displayDiv.innerHTML = output;
    }
}

function onClearSessionClicked()
{
    if(sessionStorage)
    {
        sessionDataStore.clearData();
    }
}

function onClearLocalStorageClicked()
{
    if(localStorage)
    {
        localDataStore.clearData();
    }
}