

//       60+20+13-20
//       console.log(60+20+13-20)

//       //camelCase//
// let firstName = "Ridwan";

// console.log(firstName);


// let first_name_person;
// let firstNamePerson;

// // let 3years = 3;

// let farhan_ahmed_ridwan = "Teacher";
// let PI = 3.444;

// let myFristJob ="Programmer";
// let myCurrentJob ="Teacher";

// let job1 = "Programmer";
// let job2 = "Teacher";

// console.log(myFristJob);
// console.log(myCurrentJob);

// console.log(job1);
// console.log(job2);


// var object = {
//       data:"10",
//       roll: "01",
//       name: "Ridwan", 
// }


// var roll = 10;
// var name = "Ridwan";
// var iAmGoodBoy = true;
// var dhaka = null;
// var mango;
// //Symbol//

// console.log(typeof(roll))
// console.log(typeof(name))
// console.log(typeof(iAmGoodBoy))
// console.log(typeof(dhaka))
// console.log(typeof(mango))


// const now = 2037;
// const ridwan = now - 2003;
// const halima = now - 1998;

// console.log(ridwan, halima);
// console.log(ridwan * 2, ridwan / 2, 2 ** 4) // 2+2=4*2=8*2=16

// // Assign Operatorts
// let x = 10+5; //15
// x += 10; //25
// x *= 4; //100
// x++ // x+1;
// x-- // x-1;

// // Comparison Operators
// console.log(30 > 20) // >, <, >=, <=. 
// console.log(10 <= 10)


// Precedence Operators

// const now = 2037;
// const ridwan = now - 2003;
// const halima = now - 1998;

// console.log(now - 2003 > now - 1998) // false

// let a,b;
// a = b = 25 - 10 - 5;
// console.log(a,b); // 10, 10;

//Challang 1.

// const massMark = 78;
// const heightMark = 1.69;
// const messJhon = 92;
// const heightJhon = 1.95;

// const BMIMark = massMark / heightMark ** 2 ;
// const BMIJhon = messJhon / (heightJhon * heightJhon);
// const markHigherBMI = BMIMark > BMIJhon;
// console.log(BMIMark, BMIJhon, markHigherBMI);

// Strind Template.

// const firstName = "Ridwan";
// const job = "Teacher";
// const birthYear = 2003;
// const year = 2037;

// const ridwan = "I'm " + firstName + ', a ' + (year - birthYear) + ' Years old ' + job + '!';

// console.log(ridwan)

// const ridwanNew = `I'm ${firstName}, a ${year - birthYear}, Years old ${job} !`;

// console.log(ridwan);
// console.log(`Just a regular string....`);
// console.log('String with \n\ multiple \n\ line');



// What is variable? 

// var student ="Ridwan";
//  let student ="Ridwan";
// const adding = 2 + 2;
// const division = 10 / 2; // constant
// student = "Rony";

// console.log(adding);
// console.log(division);

// var fun = function (){

//     console.log(student);
// }

// const age = 15;

// if(age >= 18){
//     console.log("Sara can start driving licence .")
// }else{
//     const yearsLeft = 18 - age;
//     console.log(`Sara is too young, wait another ${yearsLeft} Years :)`)
// }

// const birthYear = 1998;
// let century;
// if(birthYear >= 2000){
//     century = 20;
// }else{
//     century = 21;
// }
// console.log(century);

// </---------Conding Challange 2----------/>

// const massMark = 78;
// const heightMark = 1.69;
// const messJhon = 92;
// const heightJhon = 1.95;

// const BMIMark = massMark / heightMark ** 2 ;
// const BMIJhon = messJhon / (heightJhon * heightJhon);
// // const markHigherBMI = BMIMark > BMIJhon;
// if(BMIMark > BMIJhon){
//     console.log(`Jhon is BMI (${BMIJhon}) is heigher then Mark's (${BMIMark})`)
// }
// else{
//     console.log(`Mark is BMI  (${BMIMark}), is heigher then Jhon's  (${BMIJhon})`)
// }
// console.log(BMIMark, BMIJhon, markHigherBMI);

// let n = '1' + 1;
//     n = n - 1;
//     console.log(n); //10

// console.log(Boolean(0)); //false
// console.log(Boolean(undefined)); //false
// console.log(Boolean('Jonas')); //true
// console.log(Boolean({})); //true
// console.log(Boolean(null)); //false

// const money = 0;
// if(money){
//     console.log("Don't spend it all;");
// }else{
//     console.log("You Should get a job!")
// }

// const favourite = prompt("What's your favourite Number?");

// console.log(favourite);

// const hasDriverLicense = true;
// const hasGoodVision = false;

// console.log(hasDriverLicense && hasGoodVision);
// console.log(hasDriverLicense || hasGoodVision);
// console.log(!hasDriverLicense);

/*
1.
Calculate the average score for each team, using the test data below
2. Compare the teym's average scores to determine the winner of the commetitton, and print it to the
console. Don't farget that there can be a draw, so test for that as well (drow means they have the sane average score)
3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has
higher score than the other team, and the same time a
score of at least 100 polnts, HINT: Use a logicat
operator to test for minimum score, as well as
multiple else-if blocks
4, BONUS 2: Minimum score also applles to a draw! So a draw only happens when both teams have the same score and both have a score arealnn or mquat 100
points, Otherwise, no team WAn the trophy
You sent
score and both have a score greater or equat.0l
points. Otherwise, no team wins the trophy.

TEST MATA: Dolphins score-96, 108 and 89. Koalas score E, 91 and-110
EST DATm BONUS 1: Dolphins score 97, 112 and 101.
Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101.
Koalas score 109, 95 and 106
*/

// const scoreDolphines = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphines, scoreKoalas);

// if(scoreDolphines > scoreKoalas){
//     console.log("Dolphines win the trophy !");
// }else if(scoreDolphines < scoreKoalas){
//     console.log("Koalas win the trophy !");
// }else if(scoreDolphines === scoreKoalas){
//     console.log("Both win the trophy!");
// }

// const scoreDolphines = (97 + 112 + 101) / 3;
// const scoreKoalas = (109 + 95 + 107) / 3;
// console.log(scoreDolphines, scoreKoalas);

// if(scoreDolphines > scoreKoalas && scoreDolphines >= 100){
//     console.log("Dolphines win the trophy !");
// }else if(scoreDolphines < scoreKoalas && scoreKoalas >= 100){
//     console.log("Koalas win the trophy !");
// }else if(scoreDolphines === scoreKoalas && scoreDolphines >= 100 && scoreKoalas >= 100){
//     console.log("Both win the trophy!");
// }else{
//     console.log("No one wins the trophy!");
// }

// -------Switch Case-------->

// const day = "friday";

// switch(day){
//     case 'monday':
//         console.log("plan course structure");
//         console.log("Go to coding meetup");
//         break;
//     case "tuesday":
//         console.log("Prepare theory videos");
//         break;
//     case "wednesday":
//     case "thursday":
//         console.log("Write code example");
//         break;
//     case "friday": 
//     console.log("Record Videos");
//     break;
//     case "saturday":
//     case "sunday":
//         console.log("Enjoy the weekend :D")
//         break;
//     default:
//         console.log("Not a valid day!")
// }

// // convert if else;

// if(day === "monday"){
//     console.log("plan course structure");
//     console.log("Go to coding meetup");
// }else if(day === "tuesday"){
//     console.log("Prepare theory videos");
// }else if(day === "wednesday" || day ==="thursday"){
//     console.log("Write code example");
// }else if(day === "friday"){
//     console.log("Record Videos");
// }else if(day === "saturday" || day === "sunday"){
//     console.log("Enjoy the weekend :D");
// }else{
//     console.log("Not a valid day!")
// }

//< -----Statement and Exprresion-------->

// 3 + 4;
// 1991;
// true && false && !false;

// if(23 > 20){
//     const str = "23 is bigger";
// }

// const me = 'Ridwan';
// console.log(`I'm ${2023 - 2003} years old ${me}.`)

// <------ Conditional Operator Ternary ----->

// const age = 10;
// age >= 18 ? console.log("I like to drink wine 🍷"): console.log("I like to drink water 💧");

// const drink = age >= 18 ? "wine 🍷": "water 💧";
// console.log(drink);

// let drink2;
// if(age >= 18){
//     drink2 = ("wine 🍷")
// }else{
//     drink2 = ("water 💧")
// }
// console.log(drink2)

// console.log(`I like to drink ${age >= 18 ? "wine 🍷": "water 💧"}`)


//---------- Coding Challenge #4------>
// 
/*
Steven wants to build a very simple tip calculator
for whenever he goes eating in a resturant. In his
country, it's usual to tip 15" if the bill value is
between 50 and 300. If the value ls different, the
tip is 20%.
1. Your task is to caluclate the tip, depending on
the bill value. Create a varlable called 'tip' for
this. It's not allowed to use an if/else statement
(If it's easier far you, you can start with an if/
else statement, and then try to convert it to a
ternary operator!)
2. Print a string to the console contalning the bill
value, the tip, and the final value (bill + tip)
Example: 'The bill was 275, the tip was 41.25, and
the total value 316.25'
TEST DATA: Test for bill values 275, 40 and 430
*/

let bill = 275;


// if((bill <= 300) && (bill >= 50)){
//     console.log("bill is 50-300 ace")
// }else{
//     console.log("bill 50-300 over!")
// }


// let tips = bill <= 300 && bill >= 50 ? console.log(`Your 15% tips: ${bill / 100 * 15}`) : console.log(`Your 20% tips: ${bill / 100 * 20}`)

// let tips = bill <= 300 && bill >= 50 ? console.log(`The bill was: ${bill}, the tip was: ${bill / 100 * 15}, and the total value ${bill + (bill / 100 * 15)}`) : console.log(`The bill was: ${bill}, the tip was: ${bill / 100 * 15}, and the total value ${bill + (bill / 100 * 15)}`)

let tips = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.20;
console.log(`The bill was: ${bill}, the tip was: ${tips}, and the total value ${bill + tips}`)