
function ValidateInputs(){
    const szamInput = document.getElementById("numberInput");
    const szamvalue = szamInput.value;

    const rendszerInput = document.getElementById("szamrendszerInput");
    const rendszerValue = rendszerInput.value;

    if(szamvalue< 0 || szamvalue > 10000){
        alert("Csak 0 és 10000 között írj számot!!");
        szamInput.value = "";
    }

    if(rendszerValue< 0 || rendszerValue > 16){
        alert("Csak 0 és 16 között írj számot!!");
        rendszerInput.value = "";
    }
}    


const form = document.getElementById('form');
form.addEventListener("submit", function(e) {
    e.preventDefault();
    ValidateInputs();
})


