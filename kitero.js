const osztas = (a, b) =>{
    return Math.floor(a/b);
}

//console.log(osztas(13, 2));

const maradek = (a,b) =>{
    return a%b;
}

//console.log(maradek(13,2));


const elso = 13;
const szamrendszer = 2;

const array = [];
const arrayszam = [];

arrayszam.push(osztas(elso, szamrendszer));

array.push(maradek(elso, szamrendszer));

arrayszam.push(osztas(arrayszam[0], szamrendszer))

array.push(maradek(arrayszam[0], szamrendszer));

arrayszam.push(osztas(array[1], szamrendszer));

array.push(maradek(array[1], szamrendszer));

console.log(array);


console.log(arrayszam)

