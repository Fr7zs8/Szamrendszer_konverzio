const manager = new Manager(); //Inicializáljuk a managert
const formClass = new Form("form", manager); //Inicializáljuk a formot
const table = new Table("table", manager); //Inicializáljuk a table

const form = document.getElementById("form"); //Lekérjük a már létrehozott formot

form.addEventListener("submit", function(e) { //Eseménykezelőt rakunk a formra
    e.preventDefault(); //leállitjuk az alapértelmezett működését
    if(ValidateInputs() === true){ // Ha a validáló függvény igazzal tér vissza akkor lefutatjuk 
        Logic(manager); // A logikáját az egésznek
    }
})
