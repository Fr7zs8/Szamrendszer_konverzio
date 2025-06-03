class Area{ //Létrehozzuk az area classt ami a megjelenitésért lesz felelös
    /**
     * @type {HTMLDivElement}
     */
    #div; //Létrehozunk egy divet

    /**
     * @type {Manager}
     */
    #manager; //Létrehozunk egy managert

    /**
     * 
     * @param {string} cssClass 
     * @param {Manager} manager 
     */
    constructor(cssClass, manager){ //Beállitjuk a konstructorát
        this.#manager = manager; // Managernek értéket adunk
        const container = this.#getContainer(); //Lekérjük van e már conténer hogyha van ne hozzunk létre ujat
        this.#div = document.createElement("div"); //A divünkből divetcsinálunk
        this.#div.className = cssClass; //Lesz classneve
        container.appendChild(this.#div); //Majd a container divhez hzzáadjk
    }

    /**
     * @returns {HTMLDivElement}
     */
    get div(){ //Divnek csinálunk egy gettert
        return this.#div;
    }
    /**
     * @returns {Manager}
     */
    get manager(){ //A managernek is csinálunk egy getterte
        return this.#manager;
    }

    /**
     * Megnézi van már conténer ha nincs létrehoz egyet
     * @returns {HTMLDivElement}
     */
    #getContainer(){ 
        let container = document.querySelector(".container"); //Megkeresi van e ilyen classal rendelkező container
        if(!container){ //Ha nincs
            container = document.createElement("div"); //Létrehoz egy divet
            container.classList.add("container"); // Add neki classt
            document.body.appendChild(container); //MAjd a bodyhoz hozzáadja
        }
        return container; //Majv vissaztér vele
    }
}

class Table extends Area{ //Table aki örököl az Areától

    /**
     * @type {tbody}
     */
    #tbody;
       
    /**
     * 
     * @param {string} cssClass 
     * @param {Manager} manager 
     */
    constructor(cssClass, manager){ //Konstructor
        super(cssClass, manager); //Az ősétől örökli
        this.#tbody = this.#makeTableheader(); //Vissaztér tbodyval és megcsinálja a táblázatot plusz a fejlécet
        manager.setAddCallback((dataarray) => this.#maketable(dataarray)); //Ha kap hivást akkor meghivja a maketablet ami megcsinálja a táblzatkiirást
    }

    /**
     * A táblázat fejlécét létrehozza
     * @returns {tbody}
     */
    #makeTableheader(){
        const fejlec = ["A szám 10 es számrendszerben", "A szám a megadott számrendszerben"]; //Fejlécszöveg

        const table = document.createElement("table"); //table létrehozás
        this.div.appendChild(table); //Hozzáadja a divhez

        const thead = document.createElement("thead"); // megcsinálja a theadet
        table.appendChild(thead); //Hozzáadja a táblázathoz

        const tr = document.createElement("tr"); //Megcsinálja a tr-t
        thead.appendChild(tr); //hozzáadja a theadhez

        for(const elem of fejlec){ //Végigmegy a fejléc elemén és anyiszor
            const th = document.createElement("th"); //Létrehoz egy th-t
            th.innerHTML = elem; //Beleirja az elemet
            tr.appendChild(th); //Majd hozzáadja a tr hez
        }

        const tbody = document.createElement("tbody"); //Létrehozza tbodyt
        tbody.id = "tbody"; //Ad neki egy id-t hogy megtudjuk találni könnyen
        table.appendChild(tbody); //Hozzáadja table höz

        const eredmenyszoveg = document.createElement("p"); //Csinál egy p-t amibe beleirjuk az eredmény szövegét
        eredmenyszoveg.id = "erdemeny"; //Rak rá id-t hogy megtudjuk majd találni
        this.div.appendChild(eredmenyszoveg); //Majd a divhez hozzáadja

        return tbody; //Visszatér tbodyval

    }

    /**
     * A táblázat kigenerálásáért felelős
     * @param {Array} array 
     */
    #maketable(array){
        this.#tbody.innerHTML = ""; //Kiüriti tbodyt

        for (let i = 0; i < array.length; i++) { //Végigmegy az arrayan amit neki adtunk
            const tr = document.createElement("tr"); //Csinál egy treket
            this.#tbody.appendChild(tr); //tbodyhoz hozzáadja öket

            const row = array[i]; //Csinál egy sort változot amibe beleteszi az array i edik elemét ami jelen esetben 2 elem mivel párossával kezelem őket
            for (let j = 0; j < row.length; j++) { //Végigmegy a sorookon
                const td = document.createElement("td"); //Csinál tdket
                td.innerHTML = row[j]; //Hozzáadja az elemeket
                tr.appendChild(td); //Majd tr hez adja
            }
        }
    }

}

class Form extends Area{ // Létrehoza a form classt ami örököl az areátol
    /**
     * 
     * @param {string} cssClass 
     * @param {Manager} manager 
     */
    constructor(cssClass, manager){ //Beállitja a konstructorát
        super(cssClass, manager); //Öröklödik az areából
        this.#makeForm(); //Meghivja a makeform függvényt ami elkésziti
    }

    /**
     * Elkésziti a fomot
     */
    #makeForm(){
        const h1 = document.createElement("h1"); //A cimnek létrehoz helyet
        h1.innerHTML = "Számrendszer Konvertáló"; //Kiija a cimet
        this.div.appendChild(h1); //Hozzáadja a divhez

        const form = document.createElement("form"); //Létrehozza a formot
        form.id = "form"; //Kap id-t hogy lehessen kezelni
        this.div.appendChild(form); //divhez hozzáadja

        this.#createLabelInputElement("number", "Szám (10-esben):", "numberInput", form); // Csinál egy labelt és egy inputot
        form.appendChild(document.createElement("br")); //Belerak egy sortörést
        this.#createError("errornumber" ,form); //Létrehoz egy error szöveg heyet
        form.appendChild(document.createElement("br"));//Belerak egy sortörést
        this.#createLabelInputElement("szamrendszer", "Számrendszer:", "szamrendszerInput", form); // Csinál egy labelt és egy inputot
        form.appendChild(document.createElement("br"));//Belerak egy sortörést
        this.#createError("errorszamrendszer", form); //Létrehoz egy error szöveg heyet
        form.appendChild(document.createElement("br"));//Belerak egy sortörést
        

        const button = document.createElement("button"); //létrehoz egy gombot
        button.id = "button"; //id-t ad neki
        button.type = "submit"; //beállitja atypeját
        button.innerHTML = "Convert"; //Szöveget ir rá
        form.appendChild(button); //Hozzáadja a formohoz
    }

    /**
     * Létrehoz egy labelt és egy Inputot
     * @param {string} labelid 
     * @param {string} labeltext 
     * @param {string} inputid 
     * @param {HTMLElement} parent 
     */
    #createLabelInputElement(labelid, labeltext, inputid, parent){
        const label = document.createElement("label"); //megcsinlja  alabelt
        label.htmlFor = labelid; //Feállitja a htmlforját
        label.textContent = labeltext; //Beállitja a szövegét
        parent.appendChild(label); //Hozzáadja a parenthez

        const input = document.createElement("input"); //csinál egy inputot
        input.id = inputid; //Beállitja az id ját
        input.type = "number"; //beállitja a type-jját
        parent.appendChild(input); //Hozzáadja a parenthez
    }

    /**
     * 
     * @param {string} id 
     * @param {HTMLElement} parent 
     */
    #createError(id, parent){
        const error = document.createElement("snap"); //Csinál egy snapet
        error.id = id; //beállitja az id-ját
        parent.appendChild(error) //Hozzáadja a parenthez
    }
}