let country = 'Colombia';
let continent = 'America';
let population = 42000000;
console.log(continent);
console.log(country);
console.log(population);
let isIsland = 'sanAndres';
let language =  'English';
console.log(isIsland);
console.log(language);
const speedLight = 300000;
console.log (speedLight);
let a;
a = "kenai";
console.log(a);

let objeto = {
    nombre:"john",
    edad:35
}

let colores =["blanco","negro","azul"];
console.log(objeto);
console.log(colores);

objeto.correo = "john@gmail.com"; //accedo al objeto
colores.push("anaranjado");
console.log(objeto);
console.log(colores);

const caja = {
    nombre: "cubo",
    tamaño:20
}

const formas =["triangulo", "cuadrado","rectangulo"];
console.log(caja);
console.log(formas);

caja.country = "Suiza";

console.log(caja);
console.log(formas);
//basic operators
let totalPopulation = 47000000;
let halfPopulation = totalPopulation / 2;

console.log("Population en each half:", halfPopulation);

let countryPopulation = 57000000;
countryPopulation++;
console.log("Updated population:", countryPopulation);

let finlandPopulation = 6000000;
let colombiaPopulation = 47000000;

if (colombiaPopulation > finlandPopulation) {
console.log("Colombia has a larger population than Finland.");
} else {
   console.log("Finland has a larger population than Colombia.");
}
//averagePopulation
let averagePopulation = 33000000;
let yourCountryPopulation = 25000000;
if (yourCountryPopulation < averagePopulation){
    console.log("YourCountryPopulation has less people than the averagePopulationCountry.");
}else if( yourCountryPopulation === averagePopulation){
    console.log("YourCountryPopulation has the same population as the averagePopulationCountry.");
} else{
    console.log("YourCountryPopulation is larger than the averagePopulation.")
}
 //variables plus description

let countryName = 'Portugal';
let continente = 'Europe';
let populationn = 11000000;
let languagee = 'portuguese';

let description = `${countryName} is in ${continente}, and its ${populationn} million people speak ${languagee}.`;

console.log(description);
