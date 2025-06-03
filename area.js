class Area{
    /**
     * @type {HTMLDivElement}
     */
    #div;

    #manager;

    constructor(cssClass, manager){
        this.#manager = manager;
        const container = this.#getContainer();
        this.#div = document.createElement("div");
        this.#div.className = cssClass;
        container.appendChild(this.#div);
    }

    get div(){
        return this.#div;
    }

    get manager(){
        return this.#manager;
    }

    #getContainer(){
        let container = document.querySelector(".container");
        if(!container){
            container = document.createElement("div");
            container.classList.add("container");
            document.body.appendChild(container);
        }
        return container;
    }
}

class Table extends Area{

    #tbody;
       
    constructor(cssClass, manager){
        super(cssClass, manager);
        this.#tbody = this.#makeTableheader();
        manager.setAddCallback((dataarray) => this.#maketable(dataarray));
    }

    #makeTableheader(){
        const fejlec = ["A szám 10 es számrendszerben", "A szám 2 es számrendszerben"];

        const table = document.createElement("table");
        this.div.appendChild(table);

        const thead = document.createElement("thead");
        table.appendChild(thead);

        const tr = document.createElement("tr");
        thead.appendChild(tr);

        for(const elem of fejlec){
            const th = document.createElement("th");
            th.innerHTML = elem;
            tr.appendChild(th);
        }

        const tbody = document.createElement("tbody");
        tbody.id = "tbody";
        table.appendChild(tbody);

        const eredmenyszoveg = document.createElement("p");
        eredmenyszoveg.id = "erdemeny";
        this.div.appendChild(eredmenyszoveg);

        return tbody;

    }

    #maketable(array){
        this.#tbody.innerHTML = "";

        for (let i = 0; i < array.length; i++) {
            const tr = document.createElement("tr");
            this.#tbody.appendChild(tr);

            const row = array[i];

            for (let j = 0; j < row.length; j++) {
                const td = document.createElement("td");
                td.innerHTML = row[j];
                tr.appendChild(td);
            }
        }
    }

}

class Form extends Area{
    constructor(cssClass, manager){
        super(cssClass, manager);
        this.#makeForm();
    }

    #makeForm(){
        const h1 = document.createElement("h1");
        h1.innerHTML = "Számrendszer Konvertáló";
        this.div.appendChild(h1);

        const form = document.createElement("form");
        form.id = "form";
        this.div.appendChild(form);

        this.#createLabelInputElement("number", "Szám (10-esben):", "numberInput", form);
        form.appendChild(document.createElement("br"));
        this.#createError("errornumber" ,form);
        form.appendChild(document.createElement("br"));
        this.#createLabelInputElement("szamrendszer", "Számrendszer:", "szamrendszerInput", form);
        form.appendChild(document.createElement("br"));
        this.#createError("errorszamrendszer", form);
        form.appendChild(document.createElement("br"));
        

        const button = document.createElement("button");
        button.id = "button";
        button.type = "submit";
        button.innerHTML = "Convert";
        form.appendChild(button);
    }

    #createLabelInputElement(labelid, labeltext, inputid, parent){
        const label = document.createElement("label");
        label.htmlFor = labelid;
        label.textContent = labeltext;
        parent.appendChild(label);

        const input = document.createElement("input");
        input.id = inputid;
        input.type = "number";
        parent.appendChild(input);
    }

    #createError(id, parent){
        const error = document.createElement("snap");
        error.id = id;
        parent.appendChild(error)
    }
}