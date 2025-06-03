class Manager{
    #datas;

    #addCallback;

    constructor(){
        this.#datas  = [];
    }

    setAddCallback(callback){
        this.#addCallback = callback;
    }

    add(data){
        this.#datas.push(data);
        this.#addCallback(data);
    }

}