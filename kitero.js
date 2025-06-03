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

//console.log(maradek(13,2));


const elso = 13;
const szamrendszer = 2;

const array = [];
const arrayszam = [];


array.push(szamrendszer);
arrayszam.push(elso);

arrayszam.push(osztas(elso, szamrendszer)); // 13/2 = 6 arrayszam[0] = 6

array.push(maradek(elso, szamrendszer)); // 13%2 = 1 array[0] = 1

arrayszam.push(osztas(arrayszam[1], szamrendszer)) // 6/2 = 3 arrayszam[1] = 3

array.push(maradek(arrayszam[1], szamrendszer)); // 6%2 = 0 array[1] = 0

arrayszam.push(osztas(arrayszam[2], szamrendszer)); // 3/2 = 1 

array.push(maradek(arrayszam[2], szamrendszer));

arrayszam.push(osztas(arrayszam[3], szamrendszer)); 

array.push(maradek(arrayszam[3], szamrendszer));

console.log(array);
console.log(arrayszam);


const szamok = [];
const maradekok = [];

szamok.push(elso);
maradekok.push(szamrendszer);

while(szamok[szamok.length-1] !== 0){
    szamok.push(osztas(szamok[szamok.length-1], szamrendszer)); // 13/2 = 6
    maradekok.push(maradek(szamok[szamok.length-2], szamrendszer)); // szamoktömb = [13, 6] itt nekünk 13 %2 kell
}

console.log(szamok);
console.log(maradekok);
