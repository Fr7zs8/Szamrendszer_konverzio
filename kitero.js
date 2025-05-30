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

const masodik = osztas(elso, szamrendszer);
const maradekelso = maradek(elso, szamrendszer)
console.log(masodik);
console.log(maradekelso);

const harmadik = osztas(masodik, szamrendszer);
const maradekmasodik = maradek(masodik, szamrendszer);
console.log(harmadik);
console.log(maradekmasodik);

const negyedik = osztas(harmadik, szamrendszer);
const maradekharmadik = maradek(harmadik, szamrendszer);
console.log(negyedik);
console.log(maradekharmadik);

