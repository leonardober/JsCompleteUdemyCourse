let js = 'amazing';
if(js === 'amazing') alert("JavaScript is FUN!");

40 + 8 + 23 -10;
console.log(40 + 8 + 23 -10);

console.log('Jonas');
console.log(23);
let firstName = "Matilda";

console.log(firstName);
let Jonas_Matilda = "JM";
let PI =3.1416;
let myFirstJob = 'Coder';
let myCurrentJob = 'Teacher';
let job1 ='Programmer';
let job2 = 'teacher';

console.log(myFirstJob);

//const massMark = 78;
//const heightMark = 1.69;
//const massJohn = 92;
//const heightJohn = 1.95;

//const BMIMark = massMark / heightMark ** 2;
//const BMIJohn = massJohn / (heightJohn * heightJohn);
//const markHigherBMI = BMIMark > BMIJohn;

//console.log(BMIMark, BMIJohn, markHigherBMI);

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);

const massMarkk = 95;
const heightMarkk = 1.88;
const massJohnn = 85;
const heightJohnn = 1.76;

const BMIMarkk = massMarkk / heightMarkk ** 2;
const BMIJohnn = massJohnn / (heightJohnn * heightJohnn);
const markHigherrBMI = BMIMarkk > BMIJohnn;

console.log(BMIMarkk, BMIJohnn, markHigherrBMI);

if(BMIMarkk > BMIJohnn){
console.log("Markk's BMI (${BMIMarkk}) is higher than Johnn's (${BMIJohnn}!")
}else{
    console.log("Johnn's BMI (${BMIJohnn})is higher than Markk's (${BMIMarkk})!")
}

/////////variables to build a String
const firstNamee = 'Johny';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;
const Johny = "I'm " + firstNamee + ',a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(Johny);


const JohnyNew = `I'm ${firstNamee}, a ${year - birthYear} year old ${job}!`;
console.log(JohnyNew);

console.log(`just a regular string...`);
console.log('String with \n\
multiple \n\
 lines');

 console.log(`String
 multiple
 lines`);
 //condicionales take decisions
 const age = 15;
 //const isOldEnough = age >= 18;

 if(age>=18){
   console.log('Sarah can start driving license')
 }else{
    const yearsLeft = 18-age;
    console.log(`Sarah is too young. wait another ${yearsLeft} years:)`)
 }

 

const birthYearr = 2012;

let century;
if (birthYearr <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

//types conversion(manually convert) vs coercion(automatically converts)

 const inputYear = '1991';
 console.log(Number(inputYear), inputYear);
 //add number plus
 console.log(Number(inputYear) + 18);

 //converting string to number NaN stands for not a number fall to produce a new number invalid number
 console.log(Number('Jonas'));
// appear number invalid number
console.log(typeof NaN);

//convert  type string  and number
console.log(String(23), 23);

//type coercion converts automatically values in other values

console.log('I am ' + 23 + ' years old');
//converts number yo Strings

console.log('I am ' + String(23) + ' years old');
//the Strings to numbers //concatenate the Strings to numbers
console.log('23' - '10' - 3);

console.log('23' * '2');
console.log('23' / '2');

let n = '1' + 1; // '11'
n = n - 1;
console.log(n);

//truthy and falsy Values
//5 falsy values: 0, '',undefined, null,NaN
console.log(Boolean(0));  //false
console.log(Boolean(undefined)); //false
console.log(Boolean('Jonas')); //String  //true
console.log(Boolean({})); //empty object  //true
console.log(Boolean(''));   //false

const money = 0;
if(money){
  console.log("Don't spend it all;)");
}else{
  console.log('You should get job!');
}

let height;
if(height){
  console.log('YAY! height is defined');
}else{
  console.log('Height is undefined');
}

let heightt= 123;
if(heightt){
  console.log('YAY! heightt is defined');
}else{
  console.log('Heightt is undefined');
}

let heighth= 0;
if(heighth){
  console.log('YAY! heighth is defined');
}else{
  console.log('Heighth is undefined');
}

//Equality operators == vs ===

const agee= 18;
if(agee === 18) console.log('You just became an adult:D(strict)');

if(agee == 18) console.log('You just became an adult:D (loose)');

const favourite = prompt("what's your favorite number?");
console.log(favourite);
//typeof  string to number
console.log(typeof favourite); //string
if(favourite == 13){  //'13' == 13
  console.log('Cool! 13 is an amazing number!')
}

const favouritee = Number(prompt("what's your favoritee number?"));
console.log(favouritee);
//typeof
console.log(typeof favouritee); //string
if(favouritee === 13){  //12 === 13  -> FALSE
  console.log('Cool! 13 is an amazing number!');
} else if(favouritee === 7){
  console.log('7 is also a cool number');
}else if(favouritee ===9){
 console.log('9 is also a cool number');

}else{
   console.log('Number is not 13 or 7');
}

if(favourite !== 13) console.log('why not 13?');

//Boolean logic
//  true AND true  = true  the rest is  false
//  false OR false = false  the rest is true
// NOT A  NOT B  inverts true/false value
//LOGICAL OPERATOR
const hasDriversLicense = true; //A
const hasGoodVision = true; //B

console.log(hasDriversLicense && hasGoodVision);

const hasDriversLicenses = true; //C
const hasGoodVisionn = false; //D

console.log(hasDriversLicenses && hasGoodVisionn);
console.log(hasDriversLicenses || hasGoodVisionn);
console.log(!hasDriversLicenses);

const shouldDrive = hasDriversLicense && hasGoodVision;
if(shouldDrive){
  console.log('Sarah is able to drive!');
}else{
  console.log('Someone else should drive..');
}
// Alt +124  ||
const isTired = true; //E
console.log(hasDriversLicense || hasGoodVision || isTired);

console.log(hasDriversLicense && hasGoodVision && isTired);

if(hasDriversLicense && hasGoodVision && !isTired){
  console.log('Sarah is able to drive!');
}else{
  console.log('Someone else should drive..');
}

//25Challenge # 3 
const scoreDolphins = (96 + 108 +89)/3;
const scorekoalas = (88 + 91 + 110)/3;
console.log(scoreDolphins, scorekoalas);

if(scoreDolphins > scorekoalas){
  console.log('Dolphins Team are the Winners!');
}else if (scorekoalas >scoreDolphins){
  console.log('Koalas Team is the winner!');
}else if(scorekoalas===scoreDolphins){
  console.log('Tie Both are Winners!')
}
//Bonus 1
const scoreDolphinss = (97 + 112 +101)/3;
const scoreKoalas = (109 + 95 + 123)/3;
console.log(scoreDolphinss, scoreKoalas);

if(scoreDolphinss > scoreKoalas && scoreDolphinss >= 100){
  console.log('Dolphins Team are the Winners!');
}else if (scoreKoalas >scoreDolphinss && scoreKoalas >= 100){
  console.log('Koalas Team is the winner!');
}else if(scoreKoalas===scoreDolphinss && scoreDolphinss >=100 && scoreKoalas >=100){
  console.log('Tie Both are Winners!')
}else{
  console.log('Nobody are winner');
}

//Bonus 2
const scoredolphinss = (97 + 112 +101)/3;
const scoreKoalass = (109 + 95 + 123)/3;
console.log(scoredolphinss, scoreKoalass);

//Challenge # 1
const MassMark = 78;
const HeightMark = 1.69;
const MassJohn = 92;
const HeightJohn = 1.95;

const BmIMark = MassMark / HeightMark **2;
const BmIJohn = MassJohn / (HeightJohn *HeightJohn);
const MarkHiggerBMI = BmIMark > BmIJohn;
console.log(MarkHiggerBMI);
console.log(BmIMark, BmIJohn);

const MAssMark = 95;
const HEightMark = 1.88;
const MAssJohn = 85;
const HEightJohn = 1.76;

const BmiMark = MAssMark / HEightMark **2;
const BmiJohn = MAssJohn / (HEightJohn *HEightJohn);
const MArkHiggerBMI = BmiMark > BmiJohn;
console.log(MArkHiggerBMI);
console.log(BmiMark, BmiJohn);

//switch statement
const day = 'monday';

switch(day){
  case 'monday': //day 'monday'
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'tuesday':
    console.log('prepare theory videos');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('write code examples');
    break;
  case 'friday':
    console.log('Record videos');
    break;
  case 'saturday':
  case 'sunday':
      console.log('Enjoy weekend :D');
      break;
  default:
    console.log('Not a validay day!');
}
 if (day ==='monday'){
  console.log('Plan course structure');
  console.log('Go to coding meetup');
 }else if(day === 'tuesday'){
  console.log('prepare theory videos');
  //Alt + 124  ||
 }else if (day === 'wednesday' || day === 'thursday'){
  console.log('write code examples');
 }else if(day === 'friday'){
  console.log('Record videos');
 }else if (day === 'saturday' || day === 'sunday'){
  console.log('Enjoy weekend :D');
 }else{
  console.log('Not  a validay day!');
 }
// Expressions is a piece of code that produces a value
3 + 4
1991
true && false && !false

//Statement  is  like a bigger piece of code that is executed work as sentences,words
if(23>10){ //statetement
  const str = '23 is bigger'; //expressions
console.log('23 is biigger than 10');
}
const me = 'Jonas';
console.log('I am ${2031-1991} years old ${me}'); //expressions

//CONDITIONAL OPERATORS(ternary operator)
const aGe = 23;
//aGe >= 18 ? console.log('I like to drink wine'):
 // console.log('I want to drink water');
const drink = aGe >= 18 ? 'wine': 'water';
console.log(drink);

let drink2;
if(aGe >= 18){
  drink2 = 'wine';
}else{
  drink2 = 'water';
}
 console.log(drink2);


 const AGe = 15;
 const drinkk = AGe >= 18 ? 'wine': 'water';
console.log(drinkk);

let drink3;
if(AGe >= 18){
  drink3 = 'wine';
}else{
  drink3 = 'water';
}
 console.log(drink3);

 console.log(`I like to drink ${AGe >= 18 ? 'wine': 'water'}`);



 //CHALLENGE # 4
 const bill = 275;
 const tip = bill <= 300 && bill >= 50 ?  bill * 0.15: bill * 0.20;//tip  between
 console.log(`The bill was ${bill}, the tip was ${tip}, and the Total Value ${bill + tip}`);

 //Test Data

 const billll = 40;
 const tipp = billll <= 300 && billll >= 50 ?  billll * 0.15: billll * 0.20;//tip  between
 console.log(`The bill was ${billll}, the tip was ${tipp}, and the Total Value ${billll + tipp}`);

 const billl = 430;
 const tippp = billl <= 300 && billl >= 50 ?  billl * 0.15: billl * 0.20;//tip  between
 console.log(`The bill was ${billl}, the tip was ${tippp}, and the Total Value ${billl + tippp}`);

 const billlll = 275;
 const tipppp = bill <= 300 && billlll >= 50 ?  billlll * 0.15: billlll * 0.20;//tip  between
 console.log(`The bill was ${billlll}, the tip was ${tipppp}, and the Total Value ${billlll + tipppp}`);