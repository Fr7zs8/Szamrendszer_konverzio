/**
 * 
 * @returns {boolean}
 */
function ValidateInputs(){ //Létrehozzuk a függvényt
    let result = true; //HA nincs probléma igaz lesz

    const szamInput = document.getElementById("numberInput"); //Megkeresük a beort adatokat
    const szamvalue = szamInput.value; //Kiveszük az értékét

    const rendszerInput = document.getElementById("szamrendszerInput");//Megkeresük a beirt adatokat
    const rendszerValue = rendszerInput.value; //Kiveszük az értékét

    const errornumber = document.getElementById("errornumber"); //Megkeresük az errornak készitett helyet
    const errorszamrend = document.getElementById("errorszamrendszer"); //Megkeresük az errornak készitett helyet

    if(szamvalue < 0 || szamvalue > 10000 || szamvalue == ""){ // kezeljül ami nem lehet. az üres a 0 nál kisebb és a 10000 nél nagyobb
        errornumber.textContent = "Csak 0 és 10000 között írj számot!!"; //Kiirjuk a hibaüzenetet
        szamInput.value = ""; //Töröljük az értéket
        result = false; //Visszatérünk hamisssal
    }
    else{
        errornumber.textContent = ""; // Ha jó akkor kiüritjük a number helyét
    }

    if(rendszerValue < 0 || rendszerValue > 16 || rendszerValue == ""){ //Megnézük a msáik inputot az jó e
        errorszamrend.textContent = "Csak 0 és 16 között írj számot!!"; //Ha nem jó akkor beirjuk a hibát
        rendszerInput.value = ""; //üritjük az értéket
        result = false; //Visszatérünk hamissal
    }
    else{
        errorszamrend.textContent = ""; // Ha jó akkor kiüritjük a number helyét
    }

    return result; // visszatérünk az értékkel hogy jo minden vagy nem
}


/**
 * 
 * @param {Number} a 
 * @param {Number} b 
 * @returns {Number}
 */
const osztas = (a, b) =>{
    return Math.floor(a/b); // Osztjuk a-t b-val és lefelé kerekitjük mindig
}

/**
 * 
 * @param {Number} a 
 * @param {Number} b 
 * @returns {Number}
 */
const maradek = (a,b) =>{
    return a%b; //Maradékos osztást végzünk
}
/**
 * 
 * @param {Number} value 
 * @returns {string}
 */
function convertalbetukke(value) { //Atadunk egy értéket
    const digits = "0123456789ABCDEF"; //Ezek a számok lehetnek mert csak 16os számrendszerig alakitunk
    return digits[value]; //És azt az elemet veszi ki a digitsekből ahány a value értéke magyarul ha a 16 akkor F lesz
}

/**
 * 
 * @param {Manager} manager 
 */
function Logic(manager){ //A feladat logikája
    const szamok = []; //Két külön listába pakolom a dolgokat ide mennek a számok
    const maradekok = []; //Ide meg a maradékok

    const szamInput = document.getElementById("numberInput"); //Megszerezük az inputokat
    const szamvalue = szamInput.value;// Majd az értékét
    szamok.push(szamvalue); //Pusholjuuk a tömbbe

    const rendszerInput = document.getElementById("szamrendszerInput"); //Megszerezük az inputokat
    const rendszerValue = rendszerInput.value; // Majd az értékét
    maradekok.push(rendszerValue); //Pusholjuuk a tömbbe

    while(szamok[szamok.length-1] !== 0){ // Addig fut ameddig az utoló eleme nem 0. Ha nulla már nem fut le
    szamok.push(osztas(szamok[szamok.length-1], rendszerValue)); // a szamokba belepusholjuk a számok utolsó elemét osztva a rendszerből kapott számrendszer számmal
    maradekok.push(maradek(szamok[szamok.length-2], rendszerValue)); // A maradékokba beleppusholjuk a számok utolsó elötti elemét és a kapott számrendszer számmal a maradékos osztását
    }

    const eredmeny = document.getElementById("erdemeny"); //Megszerezük a p-t ahogya kiirjuk az eredményt

    const eredmenyhalm = [] //Lesz egy halmazünk ahová visszafelé belepakoljuk az elemeket
    for(let i = maradekok.length-1; i > 0; i--){ // Vissazfelé végigmegyünk a listán
        eredmenyhalm.push(convertalbetukke(maradekok[i])); //Átkonvertáljuk a 10 nél nagyobb számokat betüvé
    }

    const data = []; // Van egy datánk amit majd az add függvénynek átkell adni
    for (let i = 0; i < szamok.length; i++) { // Végigmegyyünk a számok istán
        const row = []; // Lesz egy sor tömbűnk
        row.push(szamok[i]); // AMibe pusholjuk elöször a számok i edik elemét
        if (i === 0) { //Az első számot nem szabad betűvé alakitani szoval ha az első indexu számrol van zso
        row.push(maradekok[i]); //Akkor csak sinám hozzáadjuk a tömbhöz számként
        } 
        else { //Ha a többi számrol
            row.push(convertalbetukke(maradekok[i])); //Akkor betűvé alakitjuk és ugy pusholjuk a táblázatunkhoz
        }
        data.push(row); // végül datához ozzáadjuk a sort
    }

    manager.add(data); //Majd meghivjuk a manageraddfüggvényét hogy a táblázathoz adjuk

    eredmeny.innerHTML = `${szamvalue}<sub>10</sub> = ${eredmenyhalm.join('')}<sub>${rendszerValue}</sub>`; //Majd alulra kiirjuk hogy a szám amit megadtunk 10 esben az mennyi a megadott számrendszerben.
}

