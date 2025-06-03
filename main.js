function ValidateInputs(){
    let result = true;

    const szamInput = document.getElementById("numberInput");
    const szamvalue = szamInput.value;

    const rendszerInput = document.getElementById("szamrendszerInput");
    const rendszerValue = rendszerInput.value;

    const errornumber = document.getElementById("errornumber");
    const errorszamrend = document.getElementById("errorszamrendszer");

    if(szamvalue < 0 || szamvalue > 10000 || szamvalue == ""){
        errornumber.textContent = "Csak 0 és 10000 között írj számot!!";
        szamInput.value = "";
        result = false;
    }
    else{
        errornumber.textContent = "";
    }

    if(rendszerValue < 0 || rendszerValue > 16 || rendszerValue == ""){
        errorszamrend.textContent = "Csak 0 és 16 között írj számot!!";
        rendszerInput.value = "";
        result = false
    }
    else{
        errorszamrend.textContent = "";
    }

    return result;
}

/**
 * 
 * @param {Number} a 
 * @param {Number} b 
 * @returns {Number}
 */
const osztas = (a, b) =>{
    return Math.floor(a/b);
}

//console.log(osztas(13, 2));
/**
 * 
 * @param {Number} a 
 * @param {Number} b 
 * @returns {Number}
 */
const maradek = (a,b) =>{
    return a%b;
}

function Logic(){
    const szamok = [];
    const maradekok = [];

    const szamInput = document.getElementById("numberInput");
    const szamvalue = szamInput.value;
    szamok.push(szamvalue);

    const rendszerInput = document.getElementById("szamrendszerInput");
    const rendszerValue = rendszerInput.value;
    maradekok.push(rendszerValue);

    while(szamok[szamok.length-1] !== 0){
    szamok.push(osztas(szamok[szamok.length-1], rendszerValue));
    maradekok.push(maradek(szamok[szamok.length-2], rendszerValue));
    }

    const tbody = document.getElementById("tbody");

    for(let i = 0; i<szamok.length; i++){
        const tr = document.createElement("tr");
        tbody.appendChild(tr);

        const td = document.createElement("td");
        td.innerHTML = szamok[i];
        tr.appendChild(td);

        const td2 = document.createElement("td");
        td2.innerHTML = maradekok[i];
        tr.appendChild(td2);

    }

    const eredmeny = document.getElementById("erdemeny");

    const eredmenyhalm = []
    for(let i = maradekok.length-1; i > 0; i--){
        eredmenyhalm.push(maradekok[i]);
    }
    

    eredmeny.innerHTML = `${szamvalue}<sub>10</sub> = ${eredmenyhalm.join('')}<sub>${rendszerValue}</sub>`
}


const formClass = new Form("form");
const table = new Table("table");

const form = document.getElementById("form");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    const tbody = document.getElementById("tbody");
    tbody.innerHTML = "";
    if(ValidateInputs() === true){
        Logic();
    }
})



