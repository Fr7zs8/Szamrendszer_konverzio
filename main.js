function ValidateInputs(){
    const szamInput = document.getElementById("numberInput");
    const szamvalue = szamInput.value;

    const rendszerInput = document.getElementById("szamrendszerInput");
    const rendszerValue = rendszerInput.value;

    const errornumber = document.getElementById("errornumber");
    const errorszamrend = document.getElementById("errorszamrendszer");

    if(szamvalue < 0 || szamvalue > 10000 || szamvalue == ""){
        errornumber.textContent = "Csak 0 és 10000 között írj számot!!";
        szamInput.value = "";
    }
    else{
        errornumber.textContent = "";
    }

    if(rendszerValue < 0 || rendszerValue > 16 || rendszerValue == ""){
        errorszamrend.textContent = "Csak 0 és 16 között írj számot!!";
        rendszerInput.value = "";
    }
    else{
        errorszamrend.textContent = "";
    }
}    

function Logic(){

    const arrayosztok = [];

    const arraymaradek = [];

    const szamInput = document.getElementById("numberInput");
    const szamvalue = szamInput.value;
    arrayosztok.push(szamvalue);

    const rendszerInput = document.getElementById("szamrendszerInput");
    const rendszerValue = rendszerInput.value;
    arraymaradek.push(rendszerValue);

    console.log(arrayosztok);
    console.log(arraymaradek);
    
}


const formClass = new Form("form");
const table = new Table("table");

const form = document.getElementById("form");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    ValidateInputs();
    Logic();
})



