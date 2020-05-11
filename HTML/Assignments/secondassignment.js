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
    },
    setDefaults : function()
    {
        sessionStorage.act
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

var fName,lName, mNum, eMail = "";
var newLine = "<br />";
function collectData()
{
    fName = document.forms["registrationForm"]["fName"].value;
    lName = document.forms["registrationForm"]["lName"].value;
    mNum = document.forms["registrationForm"]["mNum"].value;
    eMail = document.forms["registrationForm"]["eMail"].value;
}

function onSessionClicked(shallSaveData)
{
    if(shallSaveData)
    {
        collectData();
        sessionDataStore.set("fName", fName);
        sessionDataStore.set("lName", lName);
        sessionDataStore.set("mNum", mNum);
        sessionDataStore.set("eMail", eMail);
    }
    else
    {
        var output = "";
        if(sessionStorage)
        {
            var sfName = sessionDataStore.get("fName");
            var slName = sessionDataStore.get("lName");
            var smNum = sessionDataStore.get("mNum");
            var seMail = sessionDataStore.get("eMail");
        
            output = "<u><b>The Session Data stored is: </b></u>" + newLine + "First Name =" + sfName + newLine + "Last Name =" + slName + newLine + "Mobile Number =" + smNum + newLine + "email ID =" + seMail;
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
        localDataStore.set("fName", fName);
        localDataStore.set("lName", lName);
        localDataStore.set("mNum", mNum);
        localDataStore.set("eMail", eMail);
    }
    else
    {
        var output = "";
        if(localStorage)
        {
            var sfName = localDataStore.get("fName");
            var slName = localDataStore.get("lName");
            var smNum = localDataStore.get("mNum");
            var seMail = localDataStore.get("eMail");
        
            output = "<u><b>The Local Data stored is: </b></u>" + newLine + "First Name =" + sfName + newLine + "Last Name =" + slName + newLine + "Mobile Number =" + smNum + newLine + "email ID =" + seMail;
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