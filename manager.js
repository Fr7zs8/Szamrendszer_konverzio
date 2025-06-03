class Manager{ //Létrehozzuk a manager osztályt
    /**
     * @type {Array}
     */
    #datas; //Van egy változonk

    /**
     * @type {CallBack}
     */
    #addCallback; // Van egy callbackunk

    constructor(){ //Azarrayunk egy array lesz
        this.#datas  = [];
    }

    /**
     * 
     * @param {CallBack} callback 
     */
    setAddCallback(callback){ //setter az addcallbacknak
        this.#addCallback = callback; //Beállitjuk
    }

    /**
     * 
     * @param {Array} data 
     */
    add(data){ //Függvény az addoláshoz
        this.#datas.push(data); //Feltöltjuuk datas ba a datat
        this.#addCallback(data); // És az addcallbackot hivjuk dataval
    }

}